var _ = require('lodash');

module.exports = function(obj) {
    obj || (obj = {});
    var __t, __p = '',
        __e = _.escape,
        __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '');
    }
    with(obj) {
        __p += '<div class="topcoat-button-bar">\n  ';
        _.forEach(buttons, function(button) {
            __p += '\n  <div class="topcoat-button-bar__item">\n    <button class="topcoat-button">' +
                ((__t = (button.label)) == null ? '' : __t) +
                '</button>\n  </div>\n  ';
        });
        __p += '\n</div>\n';

    }
    return __p;
};
