'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loading: false,
  pages: []
};
var homePageReducer = function homePageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  console.log(action.type);
  switch (action.type) {
    case 'GET_PAGES_REQ':
      return {
        loading: true,
        pages: []
      };
    case 'GET_PAGES_SUCCESS':
      return {
        loading: false,
        pages: [].concat((0, _toConsumableArray3.default)(state.pages), [action.payload])
      };
    case 'GET_PAGES_FAILURE':
      return {
        loading: false,
        error: 'error'
      };
    default:
      return state;
  }
};

exports.default = homePageReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2hvbWVQYWdlLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJwYWdlcyIsImhvbWVQYWdlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU07V0FBZSxBQUNWLEFBQ1Q7U0FGRixBQUFxQixBQUVaO0FBRlksQUFDbkI7QUFHRixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixrQkFBa0M7TUFBakMsQUFBaUMsNEVBQXpCLEFBQXlCO01BQVgsQUFBVyxtQkFDeEQ7O1VBQUEsQUFBUSxJQUFJLE9BQVosQUFBbUIsQUFDbkI7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDs7aUJBQU8sQUFDSSxBQUNUO2VBRkYsQUFBTyxBQUVFLEFBRVg7QUFKUyxBQUNMO1NBR0osQUFBSyxBQUNIOztpQkFBTyxBQUNJLEFBQ1Q7MERBQVcsTUFBWCxBQUFpQixTQUFPLE9BRjFCLEFBQU8sQUFFTCxBQUErQixBQUVuQztBQUpTLEFBQ0w7U0FHSixBQUFLLEFBQ0g7O2lCQUFPLEFBQ0ksQUFDVDtlQUZGLEFBQU8sQUFFRSxBQUVYO0FBSlMsQUFDTDtBQUlGO2FBakJKLEFBaUJJLEFBQU8sQUFFWjs7QUFyQkQsQUF1QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JhcnJ5L0RvY3VtZW50cy9Xb3Jrcy9uZXh0LXN0YXItd2FyIn0=