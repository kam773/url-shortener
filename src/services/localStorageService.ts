class LocalStorageService {
  static isSupported() {
    return "localStorage" in window && window["localStorage"] !== null;
  }

  static setItem(key: string, value: string) {
    if (this.isSupported()) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.error(e);
      }
    }
  }

  static getItem(key: string) {
    let value = null;

    if (this.isSupported()) {
      try {
        value = JSON.parse(localStorage.getItem(key) || "") || [];
      } catch (e) {
        console.error(e);
      }
    }

    return value;
  }

  static removeItem(key: string) {
    if (this.isSupported()) {
      localStorage.removeItem(key);
    }
  }
}

export default LocalStorageService;
