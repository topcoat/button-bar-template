var ButtonBar = require('..');

module.exports = function() {
console.log("HELLO");
  window.document.body.innerHTML += ButtonBar({buttons: [
    {'label':'a'},
    {'label':'b'},
    {'label':'c'}
  ]});
}();
