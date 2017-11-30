var db = new Proxy(JSON.parse( window.localStorage.database || '{}' ), {
  set: function(target, prop, value, receiver) {
    target[prop] = value;
    window.localStorage.database = JSON.stringify(target);
  },
  deleteProperty: function(target, prop) {
    if(prop in target) {
      delete target[prop];
    }
    window.localStorage.database = JSON.stringify(target);
  }
});
