/*
 |----------------------------------------------------------------------------------------------------------------------
 | A partial to check whether a string is empty.
 |----------------------------------------------------------------------------------------------------------------------
 */

/**
 * More information on [JavaScript Open Standards]{@link https://github.com/jsopenstd/jsopenstd}.
 *
 * @namespace js.partial
 * @version 0.0.1
 *
 * @author Richard King <richrdkng@gmail.com> [GitHub]{@link https://github.com/richrdkng}
 * @license [MIT]{@link https://github.com/jsopenstd/js-partial-foreach/blob/master/license.md}
 */

/**
 * UMD - [returnExports.js pattern]{@link https://github.com/umdjs/umd/blob/master/templates/returnExports.js}
 * For more information and license, check the link below:
 * [UMD GitHub Repository]{@link https://github.com/umdjs/umd}
 */
(function(root, factory) {
    // AMD
    /* istanbul ignore next: ignore coverage test for UMD */
    if (typeof define === 'function' && define.amd) {
        define([], factory);

    // CommonJS
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();

    // Browser
    } else {
        root.js_partial_isEmptyString = factory();
    }
}(this, function() {
    'use strict';

    /**
     * Determines whether a string is empty.
     * A string is considered empty or blank, when its **.length === 0**, or it **contains only whitespaces**.
     *
     * @memberOf js.partial
     * @function isEmptyString
     *
     * @param {string} string - The string to check.
     *
     * @returns {boolean} If the string is empty or blank, it will return true.
     */
    return function isEmptyString(string) {
        return string.length === 0 ||
               /^\s+$/.test(string) === true;
    };
}));
