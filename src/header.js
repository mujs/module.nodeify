module = (function (module, require) {
  'use strict';

  return function (name, definition) {
    module.exports = definition(require);
  };
})(module, require);

