var escape = require('lodash-node/modern/utilities/escape'),
    forEach = require('lodash-node/modern/collections/forEach');

module.exports  = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = escape, __j = Array.prototype.join;
    function print() { __p += __j.call(arguments, '') };
    with (obj) {
    __p += '<div class="' +
    ((__t = ( namespace )) == null ? '' : __t) +
    '-button-bar">\n  ';
     forEach(buttons, function(button) {
    __p += '\n  <div class="' +
    ((__t = ( namespace )) == null ? '' : __t) +
    '-button-bar__item">\n    <button class="' +
    ((__t = ( namespace )) == null ? '' : __t) +
    '-button">' +
    ((__t = ( button.label )) == null ? '' : __t) +
    '</button>\n  </div>\n  ';
     });
    __p += '\n</div>\n';

    }
    return __p;
  };
