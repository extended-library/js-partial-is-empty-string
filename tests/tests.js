'use strict';

const assert        = require('assert'),
      vars          = require('./variables'),
      isEmptyString = require(vars.path);

module.exports = {
    'js-partial-is-empty-string' : () => {
        assert(isEmptyString('')       === true);
        assert(isEmptyString(' ')      === true);
        assert(isEmptyString('  ')     === true);
        assert(isEmptyString('   ')    === true);
        assert(isEmptyString('\f')     === true);
        assert(isEmptyString('\n')     === true);
        assert(isEmptyString('\r')     === true);
        assert(isEmptyString('\t')     === true);
        assert(isEmptyString('\v')     === true);
        assert(isEmptyString('\ufeff') === true);

        assert(isEmptyString('1') === false);
        assert(isEmptyString('42') === false);
        assert(isEmptyString('69') === false); // ;)
    }
};
