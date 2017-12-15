'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchGetPagesFlow = watchGetPagesFlow;
exports.getPagesFlow = getPagesFlow;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _actions = require('../actions');

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(watchGetPagesFlow),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(getPagesFlow);

var pages = [{ id: 1, name: 'Page One' }, { id: 2, name: 'Page Two' }, { id: 3, name: 'Page Three' }, { id: 4, name: 'Page Four' }, { id: 5, name: 'Page Five' }];

function watchGetPagesFlow() {
  return _regenerator2.default.wrap(function watchGetPagesFlow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)('GET_PAGES_REQUEST', getPagesFlow);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function getPagesFlow(action) {
  var res, data;
  return _regenerator2.default.wrap(function getPagesFlow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_api2.default, pages);

        case 3:
          res = _context2.sent;

          if (!(res.status < 400)) {
            _context2.next = 13;
            break;
          }

          _context2.next = 7;
          return res.json();

        case 7:
          data = _context2.sent;

          console.log('data: ', data);
          _context2.next = 11;
          return (0, _effects.put)((0, _actions.getPagesSuccessAction)(data));

        case 11:
          _context2.next = 14;
          break;

        case 13:
          alert('network error');

        case 14:
          _context2.next = 20;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 20;
          return (0, _effects.put)((0, _actions.getPagesFailureAction)());

        case 20:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 16]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2EvZ2V0UGFnZXNGbG93LmpzIl0sIm5hbWVzIjpbIndhdGNoR2V0UGFnZXNGbG93IiwiZ2V0UGFnZXNGbG93IiwidGFrZUV2ZXJ5IiwiY2FsbCIsInB1dCIsImdldFBhZ2VzU3VjY2Vzc0FjdGlvbiIsImdldFBhZ2VzRmFpbHVyZUFjdGlvbiIsIndhaXQiLCJwYWdlcyIsImlkIiwibmFtZSIsImFjdGlvbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQXNCTyxBQUFVO1FBSVYsQUFBVTs7Ozs7O0FBMUJqQixBQUNFLEFBQ0EsQUFDQTs7QUFFRixBQUNFLEFBQ0EsQUFDSzs7QUFFUCxBQUFPLEFBQVU7Ozs7OztzRCxBQVlBO3VEQUlBLEE7O0FBWmpCLElBQU0sUUFBUSxDQUNaLEVBQUUsSUFBRixBQUFNLEdBQUcsTUFERyxBQUNaLEFBQWUsY0FDZixFQUFFLElBQUYsQUFBTSxHQUFHLE1BRkcsQUFFWixBQUFlLGNBQ2YsRUFBRSxJQUFGLEFBQU0sR0FBRyxNQUhHLEFBR1osQUFBZSxnQkFDZixFQUFFLElBQUYsQUFBTSxHQUFHLE1BSkcsQUFJWixBQUFlLGVBQ2YsRUFBRSxJQUFGLEFBQU0sR0FBRyxNQUxYLEFBQWMsQUFLWixBQUFlLEFBR2pCOztBQUFPLDZCQUFBOzBFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDQyx3QkFBQSxBQUFVLHFCQURYLEFBQ0MsQUFBK0I7O2FBRGhDO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUlQOztBQUFPLHNCQUFBLEFBQXVCLFFBQXZCO1dBQUE7c0VBQUE7Y0FBQTt5Q0FBQTthQUFBOzJCQUFBOzJCQUFBO2lCQUVlLEFBQUssa0NBRnBCLEFBRWUsQUFBVzs7YUFBdkI7QUFGSCwwQkFBQTs7Z0JBR0EsSUFBQSxBQUFJLFNBSEosQUFHYSxNQUhiOzZCQUFBO0FBQUE7QUFBQTs7MkJBQUE7aUJBSWtCLElBSmxCLEFBSWtCLEFBQUk7O2FBQWpCO0FBSkwsMkJBS0Q7O2tCQUFBLEFBQVEsSUFBUixBQUFZLFVBTFgsQUFLRCxBQUFzQjsyQkFMckI7aUJBTUssa0JBQUksb0NBTlQsQUFNSyxBQUFJLEFBQXNCOzthQU4vQjsyQkFBQTtBQUFBOzthQVFEO2dCQVJDLEFBUUQsQUFBTTs7YUFSTDsyQkFBQTtBQUFBOzthQUFBOzJCQUFBOzRDQUFBOzJCQUFBO2lCQVdHLGtCQVhILEFBV0csQUFBSTs7YUFYUDthQUFBOzJCQUFBOztBQUFBOzBCQUFBIiwiZmlsZSI6ImdldFBhZ2VzRmxvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFycnkvRG9jdW1lbnRzL1dvcmtzL25leHQtc3Rhci13YXIifQ==