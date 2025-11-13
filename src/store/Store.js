class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.observers = new Map();
    this.components = new Map();
  }

  getState(key) {
    return this.state[key];
  }

  setState(key, value) {
    this.state[key] = value;
    this.notify(key);
  }

  subscribe(key, callback) {
    if (!this.observers.has(key)) {
      this.observers.set(key, []);
    }
    this.observers.get(key).push(callback);

    return () => {
      const callbacks = this.observers.get(key);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }

  notify(key) {
    const callbacks = this.observers.get(key);
    if (callbacks) {
      callbacks.forEach((callback) => callback(this.state[key]));
    }
  }

  mount(componentId, renderFn, dependencies = []) {
    if (this.components.has(componentId)) {
      return;
    }

    const unsubscribes = [];

    dependencies.forEach((key) => {
      const unsubscribe = this.subscribe(key, () => {
        const container = document.getElementById(componentId);
        if (container) {
          container.innerHTML = renderFn();
        }
      });
      unsubscribes.push(unsubscribe);
    });

    this.components.set(componentId, unsubscribes);
  }

  unmount(componentId) {
    const unsubscribes = this.components.get(componentId);
    if (unsubscribes) {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
      this.components.delete(componentId);
    }
  }

  unmountAll() {
    this.components.forEach((unsubscribes) => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    });
    this.components.clear();
  }

  reset() {
    this.state = {};
    this.observers.clear();
    this.unmountAll();
  }
}

export const store = new Store();
