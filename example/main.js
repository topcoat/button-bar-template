var ButtonBar = require('..');

(function() {

  var container = document.querySelector('.container');
  container.innerHTML = ButtonBar({
    "namespace": "topcoat",
    "buttons": [
      {"label": "Fwee"},
      {"label": "Fwi"},
      {"label": "Fwo"},
      {"label": "Fwum"}
    ]
  });

}());
