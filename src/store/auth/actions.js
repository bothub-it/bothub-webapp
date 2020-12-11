import auth from '@/api/auth';
import TYPES from '../types';

export default {
  async getLoginSchema() {
    const response = await auth.getLoginSchema();
    return response;
  },
  async login({ commit, dispatch }, { username, password }) {
    const response = await auth.login(username, password);
    commit(TYPES.SET_TOKEN, { token: response.data.token });
    dispatch('updateMyProfile');
  },
  async retriveAuthToken({ commit }) {
    if (window.localStorage) {
      commit(TYPES.SET_TOKEN, { token: window.localStorage.getItem('authToken'), authType: null });
    }
  },
  logout({ commit, dispatch }) {
    commit(TYPES.SET_TOKEN, { token: null, authType: null });
    dispatch('updateMyProfile');
    dispatch('clearTutorial');
    dispatch('clearFinalizatioMessage');
  },
  async getForgotPasswordSchema() {
    const response = await auth.getForgotPasswordSchema();
    return response;
  },
  async forgotPassword(store, { email }) {
    await auth.forgotPassword(email);
  },
  async getResetPasswordSchema(store, { nickname }) {
    const response = await auth.getResetPasswordSchema(nickname);
    return response;
  },
  async resetPassword(store, { nickname, token, password }) {
    await auth.resetPassword(nickname, token, password);
  },
  async getRegisterSchema() {
    const response = await auth.getRegisterSchema();
    return response;
  },
  async register(store, {
    email, name, nickname, password,
  }) {
    await auth.register(email, name, nickname, password);
  },
};
