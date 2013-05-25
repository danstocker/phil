/*global phil */
/**
 * Determines whether direct access to prototype object is implemented
 * @return {Boolean}
 */
phil.hasProto = function () {
    return typeof Object.__proto__ !== 'undefined';
};

/**
 * Determines whether getters are implemented
 * @return {Boolean}
 */
phil.hasGetterSetter = function () {
    return typeof Object.__defineGetter__ !== 'undefined';
};

/**
 * Determines whether lookups are implemented
 * @return {Boolean}
 */
phil.hasLookupGetterSetter = function () {
    return typeof Object.__lookupGetter__ !== 'undefined';
};

/**
 * Determines whether environment implements a standard-
 * compliant `defineProperty()` method.
 * @return {Boolean}
 */
phil.hasDefineProperty = function () {
    if (typeof Object.defineProperty !== 'function') {
        return false;
    }

    try {
        Object.defineProperty({}, 'x', {});
    } catch (err) {
        return false;
    }

    return true;
};

phil.hasCircularPrototypes = function () {
    var a = {};
    return a.isPrototypeOf(a);
};
