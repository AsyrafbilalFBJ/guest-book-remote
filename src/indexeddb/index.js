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
            };
            if (!db.objectStoreNames.contains(storeUser)) {
                db.createObjectStore(storeUser);
            };
        };
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

export async function saveTokenToDB(key, value) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeToken], 'readwrite');
        const store = transaction.objectStore(storeToken);
        const request = store.put(value, key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

export async function saveAuthUserToDB(key, value) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeUser], 'readwrite');
        const store = transaction.objectStore(storeUser);
        const request = store.put(value, key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

export async function getTokenFromDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeToken], 'readonly');
        const store = transaction.objectStore(storeToken);
        const request = store.get(key);
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

export async function getAuthUserToDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeUser], 'readonly');
        const store = transaction.objectStore(storeUser);
        const request = store.get(key);
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

export async function removeTokenFromDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeToken], 'readwrite');
        const store = transaction.objectStore(storeToken);
        const request = store.delete(key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

export async function removeAuthUserFromDB(key) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeUser], 'readwrite');
        const store = transaction.objectStore(storeUser);
        const request = store.delete(key);
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}
