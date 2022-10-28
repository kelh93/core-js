'use strict';
delete globalThis.Promise;

const Promise = require('../../packages/core-js/es/promise');
const assert = require('assert');

module.exports = {
  deferred() {
    const deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  },
  resolved(value) {
    return Promise.resolve(value);
  },
  rejected(reason) {
    return Promise.reject(reason);
  },
  defineGlobalPromise() {
    globalThis.Promise = Promise;
    globalThis.assert = assert;
  },
  removeGlobalPromise() {
    delete globalThis.Promise;
  },
};