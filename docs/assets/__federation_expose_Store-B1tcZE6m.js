import { importShared } from './__federation_fn_import-Dn22YDBF.js';

const dbName = 'GuestBook';
const storeToken = 'token';
const storeUser = 'user';

async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeToken)) {
                db.createObjectStore(storeToken);
            }            if (!db.objectStoreNames.contains(storeUser)) {
                db.createObjectStore(storeUser);
            }        };
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function saveTokenToDB(key, value) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeToken], 'readwrite');
        const store = transaction.objectStore(storeToken);
        const request = store.put(value, key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function saveAuthUserToDB(key, value) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeUser], 'readwrite');
        const store = transaction.objectStore(storeUser);
        const request = store.put(value, key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function getTokenFromDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeToken], 'readonly');
        const store = transaction.objectStore(storeToken);
        const request = store.get(key);
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function getAuthUserToDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeUser], 'readonly');
        const store = transaction.objectStore(storeUser);
        const request = store.get(key);
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function removeTokenFromDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeToken], 'readwrite');
        const store = transaction.objectStore(storeToken);
        const request = store.delete(key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function removeAuthUserFromDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeUser], 'readwrite');
        const store = transaction.objectStore(storeUser);
        const request = store.delete(key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

const axios = await importShared('axios');

const {createStore} = await importShared('vuex');

const store = createStore({
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

export { store as default };
