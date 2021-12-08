const localStorageMock = {
    storage: [],
    setItem:(key, object) {
        storage [key] = object
    },
    getItem(key) {
        return this.storage[key];
    }
}


export default localStorageMock;