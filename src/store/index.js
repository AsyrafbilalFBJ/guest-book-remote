import axios from 'axios'
import { createStore } from 'vuex'
import { saveTokenToDB, saveAuthUserToDB, getTokenFromDB, getAuthUserToDB, removeTokenFromDB, removeAuthUserFromDB } from '../indexeddb';

export default createStore({
  state() {
      return {
          count: 0,
          accessToken: '',
          user: {}
      };
  },
  mutations: {
      increment(state) {
          state.count++;
      },
      saveToken(state, accessToken) {
          state.accessToken = accessToken;
      },
      destroyToken(state) {
          state.accessToken = '';
      },
      saveUser(state, user) {
          state.user = user;
      },
      destroyUser(state) {
          state.user = {};
      }
  },
  actions: {
      async login({ commit }, payload) {
          try {
              const response = await axios.post('/auth/login', {
                  username: payload.username,
                  password: payload.password,
              }, {
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
              const token = response.data.accessToken;

              const getUser = await axios.get("/auth/me", {
                  headers: {
                      'Authorization': 'Bearer '+ token
                  },
              });
              commit('saveUser', getUser.data);
              commit('saveToken', token);
              await saveTokenToDB('accessToken', token);
              await saveAuthUserToDB('authUser', getUser.data);
          } catch (error) {
              console.error('Login failed:', error);
              throw error;
          }
      },
      async loadToken({ commit }) {
          const token = await getTokenFromDB('accessToken');
          if (token) {
              commit('saveToken', token);
          }
      },
      async loadUser({ commit }) {
          const user = await getAuthUserToDB('authUser');
          if (user) {
              commit('saveUser', user);
          }
      },
      async logout({ commit }) {
          commit('destroyToken');
          commit('destroyUser');
          await removeTokenFromDB('accessToken');
          await removeAuthUserFromDB('authUser');
      },
      async initializeApp({ dispatch }) {
          await dispatch('loadToken');
          await dispatch('loadUser');
      }
  },
  modules: {}
});