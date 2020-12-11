import window from 'global/window';

import TYPES from '../types';

export default {
  [TYPES.SET_TOKEN](state, { token, authType = 'Token' }) {
    if (!token || !authType) state.token = token;
    else state.token = `${authType} ${token}`;
    console.log({ token, authType, state: state.token });
    /* istanbul ignore next */
    if (window.localStorage) {
      if (token) {
        window.localStorage.setItem('authToken', authType ? `${authType} ${token}` : `${token}`);
      } else {
        window.localStorage.removeItem('authToken');
      }
    }
  },
};
