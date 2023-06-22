"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userTokenUpdate = exports.userResgister = exports.userOtpVerification = exports.userOtp = exports.userLogin = exports.updateUser = exports.unfollowUser = exports.sendSupportMessage = exports.searchProfile = exports.resetPassword = exports.profileUpdate = exports.getUserProfileById = exports.getUserAddresses = exports.getUser = exports.getProfileDetails = exports.getGpsAddressDetails = exports.getBusinessProfileById = exports.getBusiness = exports.getAllUsersAndBusiness = exports.getAllUsers = exports.followUser = exports.deleteUser = exports.deleteProfile = exports.addNewAddress = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var UserService = _interopRequireWildcard(require("../services/user.service"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable prettier/prettier */

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
var userResgister = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return UserService.userResgister(req.body);

          case 3:
            data = _context.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function userResgister(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.userResgister = userResgister;

var resetPassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return UserService.resetPassword(req.body);

          case 3:
            data = _context2.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function resetPassword(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


exports.resetPassword = resetPassword;

var userLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return UserService.userLogin(req.body);

          case 3:
            data = _context3.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function userLogin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.userLogin = userLogin;

var userTokenUpdate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return UserService.userTokenUpdate(req.body);

          case 3:
            data = _context4.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function userTokenUpdate(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.userTokenUpdate = userTokenUpdate;

var profileUpdate = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return UserService.profileUpdate(req.body);

          case 3:
            data = _context5.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function profileUpdate(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


exports.profileUpdate = profileUpdate;

var userOtp = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return UserService.userOtp(req.body);

          case 3:
            data = _context6.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            next(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function userOtp(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


exports.userOtp = userOtp;

var userOtpVerification = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return UserService.userOtpVerification(req.body);

          case 3:
            data = _context7.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            next(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function userOtpVerification(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


exports.userOtpVerification = userOtpVerification;

var getAllUsers = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return UserService.getAllUsers(req.body);

          case 3:
            data = _context8.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context8.next = 10;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            next(_context8.t0);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function getAllUsers(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getAllUsers = getAllUsers;

var getAllUsersAndBusiness = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return UserService.getAllUsersAndBusiness(req.body);

          case 3:
            data = _context9.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context9.next = 10;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            next(_context9.t0);

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 7]]);
  }));

  return function getAllUsersAndBusiness(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getAllUsersAndBusiness = getAllUsersAndBusiness;

var searchProfile = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var data1, data2, data;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return UserService.searchProfile(req.body);

          case 3:
            data1 = _context10.sent;
            _context10.next = 6;
            return UserService.searchHash(req.body);

          case 6:
            data2 = _context10.sent;
            data = [].concat((0, _toConsumableArray2["default"])(data1.data), (0, _toConsumableArray2["default"])(data2.data));
            res.status(data1.code).json({
              code: data1.code,
              data: data,
              message: data1.message
            });
            _context10.next = 14;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](0);
            next(_context10.t0);

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 11]]);
  }));

  return function searchProfile(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.searchProfile = searchProfile;

var followUser = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return UserService.followUser(req.body);

          case 3:
            data = _context11.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context11.next = 10;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            next(_context11.t0);

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 7]]);
  }));

  return function followUser(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.followUser = followUser;

var unfollowUser = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return UserService.unfollowUser(req.body);

          case 3:
            data = _context12.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context12.next = 10;
            break;

          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12["catch"](0);
            next(_context12.t0);

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 7]]);
  }));

  return function unfollowUser(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();
/**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


exports.unfollowUser = unfollowUser;

var updateUser = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return UserService.updateUser(req.params._id, req.body);

          case 3:
            data = _context13.sent;
            res.status(_httpStatusCodes["default"].ACCEPTED).json({
              code: _httpStatusCodes["default"].ACCEPTED,
              data: data,
              message: 'User updated successfully'
            });
            _context13.next = 10;
            break;

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](0);
            next(_context13.t0);

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 7]]);
  }));

  return function updateUser(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var getUser = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return UserService.getUser(req.body._id);

          case 3:
            data = _context14.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: 'User Found successfully'
            });
            _context14.next = 10;
            break;

          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14["catch"](0);
            next(_context14.t0);

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 7]]);
  }));

  return function getUser(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var getBusiness = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return UserService.getBusiness(req.body._id);

          case 3:
            data = _context15.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: 'User Found successfully'
            });
            _context15.next = 10;
            break;

          case 7:
            _context15.prev = 7;
            _context15.t0 = _context15["catch"](0);
            next(_context15.t0);

          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 7]]);
  }));

  return function getBusiness(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();
/**
 * Controller to delete a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


exports.getBusiness = getBusiness;

var deleteUser = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res, next) {
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return UserService.deleteUser(req.params._id);

          case 3:
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: [],
              message: 'User deleted successfully'
            });
            _context16.next = 9;
            break;

          case 6:
            _context16.prev = 6;
            _context16.t0 = _context16["catch"](0);
            next(_context16.t0);

          case 9:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 6]]);
  }));

  return function deleteUser(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var getGpsAddressDetails = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return UserService.getGpsAddressDetails(req.body);

          case 3:
            data = _context17.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context17.next = 10;
            break;

          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17["catch"](0);
            next(_context17.t0);

          case 10:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[0, 7]]);
  }));

  return function getGpsAddressDetails(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getGpsAddressDetails = getGpsAddressDetails;

var addNewAddress = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return UserService.addNewAddress(req.body);

          case 3:
            data = _context18.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context18.next = 10;
            break;

          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18["catch"](0);
            next(_context18.t0);

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[0, 7]]);
  }));

  return function addNewAddress(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();

exports.addNewAddress = addNewAddress;

var getUserAddresses = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return UserService.getUserAddresses(req.body);

          case 3:
            data = _context19.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context19.next = 10;
            break;

          case 7:
            _context19.prev = 7;
            _context19.t0 = _context19["catch"](0);
            next(_context19.t0);

          case 10:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 7]]);
  }));

  return function getUserAddresses(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

exports.getUserAddresses = getUserAddresses;

var sendSupportMessage = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return UserService.sendSupportMessage(req.body);

          case 3:
            data = _context20.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context20.next = 10;
            break;

          case 7:
            _context20.prev = 7;
            _context20.t0 = _context20["catch"](0);
            next(_context20.t0);

          case 10:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[0, 7]]);
  }));

  return function sendSupportMessage(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

exports.sendSupportMessage = sendSupportMessage;

var getProfileDetails = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _context21.next = 3;
            return UserService.getProfileDetails(req.body);

          case 3:
            data = _context21.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context21.next = 10;
            break;

          case 7:
            _context21.prev = 7;
            _context21.t0 = _context21["catch"](0);
            next(_context21.t0);

          case 10:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[0, 7]]);
  }));

  return function getProfileDetails(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();

exports.getProfileDetails = getProfileDetails;

var deleteProfile = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _context22.next = 3;
            return UserService.deleteProfile(req.body);

          case 3:
            data = _context22.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context22.next = 10;
            break;

          case 7:
            _context22.prev = 7;
            _context22.t0 = _context22["catch"](0);
            next(_context22.t0);

          case 10:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[0, 7]]);
  }));

  return function deleteProfile(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();

exports.deleteProfile = deleteProfile;

var getBusinessProfileById = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return UserService.getBusinessProfileById(req.body);

          case 3:
            data = _context23.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context23.next = 10;
            break;

          case 7:
            _context23.prev = 7;
            _context23.t0 = _context23["catch"](0);
            next(_context23.t0);

          case 10:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[0, 7]]);
  }));

  return function getBusinessProfileById(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

exports.getBusinessProfileById = getBusinessProfileById;

var getUserProfileById = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            _context24.next = 3;
            return UserService.getUserProfileById(req.body);

          case 3:
            data = _context24.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context24.next = 10;
            break;

          case 7:
            _context24.prev = 7;
            _context24.t0 = _context24["catch"](0);
            next(_context24.t0);

          case 10:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[0, 7]]);
  }));

  return function getUserProfileById(_x70, _x71, _x72) {
    return _ref24.apply(this, arguments);
  };
}();

exports.getUserProfileById = getUserProfileById;