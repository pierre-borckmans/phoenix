'use strict';

/* Modal */

(function (scope) {

  scope.build = function (properties) {
    var modal = new Modal();
    _(properties).chain().omit('origin').each(function (value, key) {
      modal[key] = value;
    });
    if (_(properties.origin).isFunction()) {
      modal.origin = properties.origin(modal.frame());
    }
    return modal;
  }
})(Modal);