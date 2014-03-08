var ButtonBar = require('..');

(function() {

  var container = document.querySelector('.container');
  container.innerHTML = ButtonBar({buttons: [
    {'label':'a'},
    {'label':'b'},
    {'label':'c'},
    {'label':'d'}
  ]});

}());
