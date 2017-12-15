"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wait = function wait(time, data) {
  return new _promise2.default(function (resolve) {
    return setTimeout(function () {
      return resolve(data);
    }, time);
  });
};

exports.default = wait;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3YWl0IiwidGltZSIsImRhdGEiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxPQUFPLFNBQVAsQUFBTyxLQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVA7K0JBQTRCLG1CQUFBO3NCQUFzQixZQUFBO2FBQU0sUUFBTixBQUFNLEFBQVE7QUFBekIsS0FBQSxFQUFYLEFBQVcsQUFBZ0M7QUFBdkUsQUFBZ0IsR0FBQTtBQUE3QixBQUVBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvbmV4dC1zdGFyLXdhciJ9