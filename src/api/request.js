import axios from 'axios';
import * as Sentry from '@sentry/browser';
import store from '../store';

export default {
  get $http() {
    const client = axios.create({
      baseURL: 'https://api.bothub.it',
      headers: {
        ...(store.getters.authenticated
          ? { Authorization: `Token ${store.getters.authToken}` } : {}),
      },
    });
    client.interceptors.response.use(
      res => res,
      (err) => {
        if (err.response.status === 500 || err.response.status === 408) {
          Sentry.captureException(err);
        }
        throw err;
      },
    );
    return client;
  },
};
