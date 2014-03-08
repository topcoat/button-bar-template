var ButtonBar = require('..');

module.exports = function() {
  window.document.body.innerHTML += ButtonBar({buttons: [
    {'label':'a'},
    {'label':'b'},
    {'label':'c'}
  ]});
}();
