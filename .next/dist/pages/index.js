'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/barry/Documents/Works/next-star-war/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Home page'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, props.pages.map(function (page) {
    return _react2.default.createElement('li', { key: page.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement(_link2.default, { as: '/page/' + page.id, href: '/page?id=' + page.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, page.name)));
  }))));
};

Index.getInitialProps = function (_ref) {
  var store = _ref.store,
      isServer = _ref.isServer,
      pathname = _ref.pathname,
      query = _ref.query;

  store.dispatch(_actions.getPagesRequestAction);

  console.log('pages', pages);
  return { pages: pages };
};

// 在 react-redux 中，我們使用Provider component將Redux store傳入（透過react context）
// 其所有的child component中。而在SSR中，我們使用withRedux(HOC)取代Provider，withRedux
// 可以使用在所有/page下的進入點中。
// 在其child components中依然使用connect(HOC), mapStateToProps, mapDispatchToProps，
// 去取得store，使用方式不變。
exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJIZWFkIiwid2l0aFJlZHV4IiwiaW5pdGlhbGl6ZVN0b3JlIiwiZ2V0UGFnZXNSZXF1ZXN0QWN0aW9uIiwiSW5kZXgiLCJwcm9wcyIsInBhZ2VzIiwibWFwIiwicGFnZSIsImlkIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFDRSxBQUNLOzs7Ozs7O0FBRVAsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDt5QkFDWixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxzREFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtnQkFBOUI7a0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTt1QkFFRixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxXQUNHLEFBQU0sTUFBTixBQUFZLElBQUksZ0JBQUE7MkJBQ2IsY0FBQSxRQUFJLEtBQUssS0FBVCxBQUFjO2tCQUFkO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLEFBQUMsZ0NBQUssZUFBYSxLQUFuQixBQUF3QixJQUFNLG9CQUFrQixLQUFoRCxBQUFxRDtrQkFBckQ7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLFlBSFMsQUFDYixBQUNFLEFBQ0UsQUFBUztBQVhYLEFBQ1osQUFLRSxBQUNFLEFBQ0c7QUFSVDs7QUFvQkEsTUFBQSxBQUFNLGtCQUFrQixnQkFBd0M7TUFBdEMsQUFBc0MsYUFBdEMsQUFBc0M7TUFBL0IsQUFBK0IsZ0JBQS9CLEFBQStCO01BQXJCLEFBQXFCLGdCQUFyQixBQUFxQjtNQUFYLEFBQVcsYUFBWCxBQUFXLEFBQzlEOztRQUFBLEFBQU0sQUFBUyxBQUVmOztVQUFBLEFBQVEsSUFBUixBQUFZLFNBQVosQUFBcUIsQUFDckI7U0FBTyxFQUFFLE9BQVQsQUFBTyxBQUNSO0FBTEQ7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQUNBO2tCQUFlLEFBQVUsaURBQXpCLEFBQWUsQUFBMkIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JhcnJ5L0RvY3VtZW50cy9Xb3Jrcy9uZXh0LXN0YXItd2FyIn0=