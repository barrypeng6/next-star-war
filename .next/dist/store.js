'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var sagaMiddleware = (0, _reduxSaga2.default)();
// 初始化 Redux store
// On the server-side the Redux store is a new instance with every request. 
var initializeStore = function initializeStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));
  sagaMiddleware.run(_saga2.default);
  return store;
};

exports.default = initializeStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJzYWdhTWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7QUFDQSxBQUFTLEFBQVQsQUFBc0IsQUFBdEIsQUFBdUMsQUFBdkM7O0FBQ0EsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXdCLEFBQXhCOzs7Ozs7QUFFQSxJQUFNLG1CQUFtQixPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxBQUF4QyxBQUFnRixBQUF6RztBQUNBLElBQU0saUJBQWlCLEFBQXZCO0FBQ0E7QUFDQTtBQUNBLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLDhCQUFnQixBQUN0QztNQUFNLFFBQVEsQUFDWixBQURZLDRDQUVaLEFBRlksY0FHWixpQkFBa0IsNEJBQWdCLEFBQWhCLEFBQWxCLEFBSFksQUFBZCxBQUtBO2lCQUFlLEFBQWYsQUFBbUIsQUFBbkIsQUFDQTtTQUFPLEFBQVAsQUFDRDtBQVJELEFBVUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JhcnJ5L0RvY3VtZW50cy9Xb3Jrcy9uZXh0LXN0YXItd2FyIn0=