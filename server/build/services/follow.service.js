"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFollow = exports.getFollowingList = exports.getFollowersList = exports.getFollow = exports.addFollow = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _follow = _interopRequireDefault(require("../models/follow.model"));

var _getNotification = require("./getNotification.service");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Mongoose = require('mongoose');

var addFollow = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var newFollow, addFollowDetails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            newFollow = new _follow["default"](_objectSpread({}, req));
            _context.next = 4;
            return newFollow.save();

          case 4:
            addFollowDetails = _context.sent;
            return _context.abrupt("return", {
              message: "followed successfully",
              code: 201,
              data: addFollowDetails
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function addFollow(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addFollow = addFollow;

var removeFollow = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _follow["default"].remove({
              followingWhom: Mongoose.Types.ObjectId(req.followingWhom)
            });

          case 3:
            return _context2.abrupt("return", {
              message: "deleted successfully",
              code: 201
            });

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function removeFollow(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.removeFollow = removeFollow;

var getFollow = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var getFollowList;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _follow["default"].find({
              whoIsFollowing: Mongoose.Types.ObjectId(req.whoIsFollowing)
            });

          case 3:
            getFollowList = _context3.sent;
            return _context3.abrupt("return", {
              message: "fetched following list successfully",
              data: getFollowList,
              code: 201
            });

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getFollow(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getFollow = getFollow;

var getFollowersList = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var followerList, _getFollowersList, i, a;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            followerList = [];
            _context4.next = 4;
            return _follow["default"].find({
              followId: Mongoose.Types.ObjectId(req.user_id)
            });

          case 4:
            _getFollowersList = _context4.sent;
            i = 0;

          case 6:
            if (!(i < _getFollowersList.length)) {
              _context4.next = 14;
              break;
            }

            _context4.next = 9;
            return (0, _getNotification.getUserDetails)(_getFollowersList[i].user_id);

          case 9:
            a = _context4.sent;
            followerList.push(a);

          case 11:
            i++;
            _context4.next = 6;
            break;

          case 14:
            return _context4.abrupt("return", {
              message: "following list successfully",
              data: followerList,
              code: 201
            });

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 17]]);
  }));

  return function getFollowersList(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getFollowersList = getFollowersList;

var getFollowingList = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req) {
    var followerList, _getFollowersList2, i, a;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            followerList = [];
            _context5.next = 4;
            return _follow["default"].find({
              user_id: Mongoose.Types.ObjectId(req.user_id)
            });

          case 4:
            _getFollowersList2 = _context5.sent;
            i = 0;

          case 6:
            if (!(i < _getFollowersList2.length)) {
              _context5.next = 14;
              break;
            }

            _context5.next = 9;
            return (0, _getNotification.getUserDetails)(_getFollowersList2[i].followId);

          case 9:
            a = _context5.sent;
            followerList.push(a);

          case 11:
            i++;
            _context5.next = 6;
            break;

          case 14:
            return _context5.abrupt("return", {
              message: "following list successfully",
              data: followerList,
              code: 201
            });

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 17]]);
  }));

  return function getFollowingList(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getFollowingList = getFollowingList;