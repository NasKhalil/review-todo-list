
class localStorageMock {
    constructor() {
        this.storage = {};
    }
    
    setItem(key, object) {
        this.storage[key] = object;
    }
    getItem(key) {
        return this.storage[key];
    }
}


export default localStorageMock;