var db = null;

function loadDB() {
  db = JSON.parse( window.localStorage.database || '{}' );
  
  // hook into db change operations to call saveDB()
  var p = new Proxy(db, {
    set: function(target, prop, value, receiver) {
      target[prop] = value;
      saveDB();
    }
  });
}

function saveDB() {
  window.localStorage.database = JSON.stringify( db );
}

loadDB();
