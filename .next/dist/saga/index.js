'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _getPagesFlow = require('./getPagesFlow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _getPagesFlow.watchGetPagesFlow)()]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

exports.default = rootSaga;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2EvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJhbGwiLCJ3YXRjaEdldFBhZ2VzRmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBRVQsQUFBUyxBQUF5Qjs7OztzREFFeEIsQTs7QUFBVixTQUFBLEFBQVUsV0FBVjtpRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ1Esa0JBQUksQ0FEWixBQUNRLEFBQUksQUFDUjs7YUFGSjthQUFBOzBCQUFBOztBQUFBO2NBQUE7QUFNQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFycnkvRG9jdW1lbnRzL1dvcmtzL25leHQtc3Rhci13YXIifQ==