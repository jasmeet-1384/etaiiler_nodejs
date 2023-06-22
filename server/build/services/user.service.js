"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userTokenUpdate = exports.userResgister = exports.userOtpVerification = exports.userOtp = exports.userLogin = exports.updateUser = exports.unfollowUser = exports.sendSupportMessage = exports.searchProfile = exports.searchHash = exports.resetPassword = exports.profileUpdate = exports.newUser = exports.getUserProfileById = exports.getUserAddresses = exports.getUser = exports.getProfileDetails = exports.getGpsAddressDetails = exports.getBusinessProfileById = exports.getBusiness = exports.getAllUsersAndBusiness = exports.getAllUsers = exports.followUser = exports.deleteUser = exports.deleteProfile = exports.addNewAddress = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _business = _interopRequireDefault(require("../models/business.model"));

var _otp2 = _interopRequireDefault(require("../models/otp.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

var _otpGenerator = _interopRequireDefault(require("otp-generator"));

var _notification = _interopRequireDefault(require("./notification.service"));

var _supportChat = _interopRequireDefault(require("../models/supportChat.model"));

var _getNotification = require("./getNotification.service");

var _axios = _interopRequireDefault(require("axios"));

var _hashTag = _interopRequireDefault(require("../models/hashTag.model"));

var _post = _interopRequireDefault(require("../models/post.model"));

var _follow = _interopRequireDefault(require("../models/follow.model"));

var _following = _interopRequireDefault(require("../models/following.model"));

var _likes = _interopRequireDefault(require("../models/likes.model"));

var _comments = _interopRequireDefault(require("../models/comments.model"));

var _address = _interopRequireDefault(require("../models/address.model"));

var _share = _interopRequireDefault(require("../models/share.model"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Mongoose = require('mongoose');

//get all users
var userResgister = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var userData, passwordHash, _newUser, userDetails, newAddress, addressDetails, updateGps;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req);
            _context.next = 3;
            return _user["default"].find({
              phoneNumber: req.phoneNumber
            });

          case 3:
            userData = _context.sent;

            if (userData.length) {
              _context.next = 23;
              break;
            }

            _context.next = 7;
            return _bcrypt["default"].hash(req.password, 10);

          case 7:
            passwordHash = _context.sent;
            req.password = passwordHash;
            _newUser = new _user["default"](_objectSpread({}, req));
            _context.next = 12;
            return _newUser.save();

          case 12:
            userDetails = _context.sent;
            newAddress = new _address["default"]({
              user_id: _newUser._id,
              role: req.role,
              latitude: req.latitude,
              longitude: req.longitude,
              active: req.active,
              addressLine1: req.addressLine1,
              addressLine2: req.addressLine2
            });
            _context.next = 16;
            return newAddress.save();

          case 16:
            addressDetails = _context.sent;
            _context.next = 19;
            return _user["default"].updateOne({
              _id: Mongoose.Types.ObjectId(_newUser._id)
            }, {
              $set: {
                gpsAddress: newAddress._id
              }
            });

          case 19:
            updateGps = _context.sent;
            return _context.abrupt("return", {
              message: 'added successfully',
              code: 201,
              data: userDetails
            });

          case 23:
            return _context.abrupt("return", {
              message: 'user already registered',
              code: 400,
              data: {}
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function userResgister(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.userResgister = userResgister;

var resetPassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var userData, businessData, passwordHash, updatePassword, _passwordHash, _updatePassword;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].find({
              phoneNumber: req.phoneNumber
            });

          case 2:
            userData = _context2.sent;
            _context2.next = 5;
            return _business["default"].find({
              phoneNumber: req.phoneNumber
            });

          case 5:
            businessData = _context2.sent;

            if (!(userData.length > 0)) {
              _context2.next = 17;
              break;
            }

            _context2.next = 9;
            return _bcrypt["default"].hash(req.password, 10);

          case 9:
            passwordHash = _context2.sent;
            req.password = passwordHash;
            _context2.next = 13;
            return _user["default"].updateOne({
              phoneNumber: req.phoneNumber
            }, {
              $set: {
                password: req.password
              }
            });

          case 13:
            updatePassword = _context2.sent;
            return _context2.abrupt("return", {
              message: 'updated successfully',
              code: 201,
              data: updatePassword
            });

          case 17:
            _context2.next = 19;
            return _bcrypt["default"].hash(req.password, 10);

          case 19:
            _passwordHash = _context2.sent;
            req.password = _passwordHash;
            _context2.next = 23;
            return _business["default"].updateOne({
              phoneNumber: req.phoneNumber
            }, {
              $set: {
                password: req.password
              }
            });

          case 23:
            _updatePassword = _context2.sent;
            return _context2.abrupt("return", {
              message: 'updated successfully',
              code: 201,
              data: _updatePassword
            });

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function resetPassword(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //user login


exports.resetPassword = resetPassword;

var userLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userData, businessData, passwordVerify, payload, token, dataUser, _passwordVerify, _payload, _token, _dataUser;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user["default"].findOne({
              phoneNumber: req.phoneNumber
            }).populate('gpsAddress', null, 'Address').exec();

          case 2:
            userData = _context3.sent;
            _context3.next = 5;
            return _business["default"].findOne({
              phoneNumber: req.phoneNumber
            }).populate('gpsAddress', null, 'Address').exec();

          case 5:
            businessData = _context3.sent;

            if (!userData) {
              _context3.next = 20;
              break;
            }

            _context3.next = 9;
            return _bcrypt["default"].compare(req.password, userData.password);

          case 9:
            passwordVerify = _context3.sent;

            if (!passwordVerify) {
              _context3.next = 17;
              break;
            }

            payload = {
              phoneNumber: userData.phoneNumber
            };
            token = jwt.sign(payload, process.env.TOKEN_SECRET, {
              expiresIn: '1d'
            });
            dataUser = {
              token: token,
              userData: userData
            };
            return _context3.abrupt("return", {
              data: dataUser,
              message: 'Login sucess',
              code: 200
            });

          case 17:
            return _context3.abrupt("return", {
              data: {},
              message: 'Wrong Password',
              code: 403
            });

          case 18:
            _context3.next = 35;
            break;

          case 20:
            if (!businessData) {
              _context3.next = 34;
              break;
            }

            _context3.next = 23;
            return _bcrypt["default"].compare(req.password, businessData.password);

          case 23:
            _passwordVerify = _context3.sent;

            if (!_passwordVerify) {
              _context3.next = 31;
              break;
            }

            _payload = {
              phoneNumber: businessData.phoneNumber
            };
            _token = jwt.sign(_payload, process.env.TOKEN_SECRET, {
              expiresIn: '1d'
            });
            _dataUser = {
              token: _token,
              businessData: businessData
            };
            return _context3.abrupt("return", {
              data: _dataUser,
              message: 'Login sucess',
              code: 200
            });

          case 31:
            return _context3.abrupt("return", {
              data: {},
              message: 'Wrong Password',
              code: 403
            });

          case 32:
            _context3.next = 35;
            break;

          case 34:
            return _context3.abrupt("return", {
              data: {},
              message: 'phone number not found!! Register first',
              code: 403
            });

          case 35:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function userLogin(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.userLogin = userLogin;

var userTokenUpdate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var updateToken, _updateToken;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;

            if (!(req.role === 'user')) {
              _context4.next = 8;
              break;
            }

            _context4.next = 4;
            return _user["default"].updateOne({
              _id: Mongoose.Types.ObjectId(req.id)
            }, {
              $set: {
                fcmToken: req.token,
                os: req.os
              }
            });

          case 4:
            updateToken = _context4.sent;
            return _context4.abrupt("return", {
              data: updateToken,
              message: 'Token updated',
              code: 200
            });

          case 8:
            _context4.next = 10;
            return _business["default"].updateOne({
              _id: Mongoose.Types.ObjectId(req.id)
            }, {
              $set: {
                fcmToken: req.token,
                os: req.os
              }
            });

          case 10:
            _updateToken = _context4.sent;
            return _context4.abrupt("return", {
              data: _updateToken,
              message: 'Token updated',
              code: 200
            });

          case 12:
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            console.log('Error => ', _context4.t0);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));

  return function userTokenUpdate(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.userTokenUpdate = userTokenUpdate;

var profileUpdate = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req) {
    var newAddress, addressDetails, updateGps, updateProfile, _newAddress, _addressDetails, _updateGps, updateToken;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (!(req.role === 'user')) {
              _context5.next = 15;
              break;
            }

            newAddress = new _address["default"]({
              user_id: req.user_id,
              role: req.role,
              latitude: req.latitude,
              longitude: req.longitude,
              active: req.active,
              addressLine1: req.addressLine1,
              addressLine2: req.addressLine2
            });
            _context5.next = 5;
            return newAddress.save();

          case 5:
            addressDetails = _context5.sent;
            _context5.next = 8;
            return _user["default"].updateOne({
              _id: Mongoose.Types.ObjectId(req.user_id)
            }, {
              $set: {
                gpsAddress: newAddress._id
              }
            });

          case 8:
            updateGps = _context5.sent;
            _context5.next = 11;
            return _user["default"].updateOne({
              phoneNumber: req.phoneNumber
            }, {
              $set: {
                name: req.name,
                dateOfBirth: req.dateOfBirth,
                bio: req.bio,
                state: req.state,
                city: req.city,
                pincode: req.pincode,
                gender: req.gender,
                image: req.image
              }
            });

          case 11:
            updateProfile = _context5.sent;
            return _context5.abrupt("return", {
              data: updateProfile,
              message: 'Token updated',
              code: 200
            });

          case 15:
            if (!(req.role == 'business')) {
              _context5.next = 27;
              break;
            }

            _newAddress = new _address["default"]({
              user_id: req.user_id,
              role: req.role,
              latitude: req.latitude,
              longitude: req.longitude,
              active: req.active,
              addressLine1: req.addressLine1,
              addressLine2: req.addressLine2
            });
            _context5.next = 19;
            return _newAddress.save();

          case 19:
            _addressDetails = _context5.sent;
            _context5.next = 22;
            return _business["default"].updateOne({
              _id: Mongoose.Types.ObjectId(req.user_id)
            }, {
              $set: {
                gpsAddress: _newAddress._id
              }
            });

          case 22:
            _updateGps = _context5.sent;
            _context5.next = 25;
            return _business["default"].updateOne({
              phoneNumber: req.phoneNumber
            }, {
              $set: {
                name: req.name,
                dateOfBirth: req.dateOfBirth,
                state: req.state,
                city: req.city,
                addressLine1: req.addressLine1,
                addressLine2: req.addressLine2,
                pincode: req.pincode,
                productCategory: req.productCategory,
                natureOfBusiness: req.natureOfBusiness,
                website: req.website,
                image: req.image
              }
            });

          case 25:
            updateToken = _context5.sent;
            return _context5.abrupt("return", {
              data: updateToken,
              message: 'business updated',
              code: 200
            });

          case 27:
            _context5.next = 32;
            break;

          case 29:
            _context5.prev = 29;
            _context5.t0 = _context5["catch"](0);
            console.log('Error => ', _context5.t0);

          case 32:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 29]]);
  }));

  return function profileUpdate(_x6) {
    return _ref5.apply(this, arguments);
  };
}(); //otp generation


exports.profileUpdate = profileUpdate;

var userOtp = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var userData, businessData, OTP, hashOtp, otp, otpDetails, textLocalClient, params, textLocalResponse, _OTP, _hashOtp, _otp, _otpDetails, _textLocalClient, _params, _textLocalResponse;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _user["default"].findOne({
              phoneNumber: req.phoneNumber
            });

          case 2:
            userData = _context6.sent;
            _context6.next = 5;
            return _business["default"].findOne({
              phoneNumber: req.phoneNumber
            });

          case 5:
            businessData = _context6.sent;

            if (!userData) {
              _context6.next = 28;
              break;
            }

            OTP = _otpGenerator["default"].generate(6, {
              digits: true,
              lowerCaseAlphabets: false,
              upperCaseAlphabets: false,
              specialChars: false
            });
            console.log(OTP, '<== OTP GENERATED'); // const salt = await bcrypt.genSalt(10)

            _context6.next = 11;
            return _bcrypt["default"].hash(OTP, 10);

          case 11:
            hashOtp = _context6.sent;
            otp = new _otp2["default"]({
              phoneNumber: req.phoneNumber,
              otp: hashOtp
            });
            _context6.next = 15;
            return otp.save();

          case 15:
            otpDetails = _context6.sent;
            console.log('s => ', "Dear User,\n\nUse the OTP ".concat(OTP, " login or reset password to your ii universe account. OTP is valid for 180 seconds. Kindly do not share this OTP."));
            textLocalClient = _axios["default"].create({
              baseURL: 'https://api.textlocal.in/',
              params: {
                apiKey: 'NTEzODc5NDUzMTU4NDE1MDY5MzI3MDM2Nzg3NzQ3NmM=',
                //Text local api key
                sender: 'HAASTG'
              }
            });
            params = new URLSearchParams();
            params.append('numbers', [parseInt('91' + req.phoneNumber)]);
            params.append('message', "Use the OTP ".concat(OTP, " for login or reset password to your Haastag account. OTP is valid for 180 seconds. Please do not share this OTP. -Haastag"));
            _context6.next = 23;
            return textLocalClient.post('/send', params);

          case 23:
            textLocalResponse = _context6.sent;
            console.log(textLocalResponse.data);
            return _context6.abrupt("return", {
              message: 'otp send successfully',
              code: 201,
              data: otpDetails
            });

          case 28:
            if (!businessData) {
              _context6.next = 50;
              break;
            }

            _OTP = _otpGenerator["default"].generate(6, {
              digits: true,
              lowerCaseAlphabets: false,
              upperCaseAlphabets: false,
              specialChars: false
            });
            console.log(_OTP, '<== OTP GENERATED'); // const salt = await bcrypt.genSalt(10)

            _context6.next = 33;
            return _bcrypt["default"].hash(_OTP, 10);

          case 33:
            _hashOtp = _context6.sent;
            _otp = new _otp2["default"]({
              phoneNumber: req.phoneNumber,
              otp: _hashOtp
            });
            _context6.next = 37;
            return _otp.save();

          case 37:
            _otpDetails = _context6.sent;
            console.log('s => ', "Dear User,\n\nUse the OTP ".concat(_OTP, " login or reset password to your ii universe account. OTP is valid for 180 seconds. Kindly do not share this OTP."));
            _textLocalClient = _axios["default"].create({
              baseURL: 'https://api.textlocal.in/',
              params: {
                apiKey: 'NTEzODc5NDUzMTU4NDE1MDY5MzI3MDM2Nzg3NzQ3NmM=',
                //Text local api key
                sender: 'HAASTG'
              }
            });
            _params = new URLSearchParams();

            _params.append('numbers', [parseInt('91' + req.phoneNumber)]);

            _params.append('message', "Use the OTP ".concat(_OTP, " for login or reset password to your Haastag account. OTP is valid for 180 seconds. Please do not share this OTP. -Haastag"));

            _context6.next = 45;
            return _textLocalClient.post('/send', _params);

          case 45:
            _textLocalResponse = _context6.sent;
            console.log(_textLocalResponse.data);
            return _context6.abrupt("return", {
              message: 'otp send successfully',
              code: 201,
              data: _otpDetails
            });

          case 50:
            return _context6.abrupt("return", {
              data: {},
              message: 'Phone number not found!! Register first',
              code: 403
            });

          case 51:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function userOtp(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}(); //otp verification


exports.userOtp = userOtp;

var userOtpVerification = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var otpData, userData, businessData, rightOtpFind, validUser, payload, token, otpVerification, _rightOtpFind, _validUser, _payload2, _token2, _otpVerification;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _otp2["default"].find({
              phoneNumber: req.phoneNumber
            });

          case 2:
            otpData = _context7.sent;
            _context7.next = 5;
            return _user["default"].findOne({
              phoneNumber: req.phoneNumber
            }).populate('gpsAddress', null, 'Address').exec();

          case 5:
            userData = _context7.sent;
            _context7.next = 8;
            return _business["default"].findOne({
              phoneNumber: req.phoneNumber
            }).populate('gpsAddress', null, 'Address').exec();

          case 8:
            businessData = _context7.sent;
            console.log(otpData);

            if (!(otpData && userData)) {
              _context7.next = 25;
              break;
            }

            rightOtpFind = otpData[otpData.length - 1];
            _context7.next = 14;
            return _bcrypt["default"].compare(req.otp, rightOtpFind.otp);

          case 14:
            validUser = _context7.sent;

            if (!(rightOtpFind.phoneNumber === req.phoneNumber && validUser)) {
              _context7.next = 22;
              break;
            }

            payload = {
              phoneNumber: otpData.phoneNumber
            };
            token = jwt.sign(payload, process.env.TOKEN_SECRET, {
              expiresIn: '1d'
            });
            otpVerification = {
              token: token,
              userData: userData
            };
            return _context7.abrupt("return", {
              data: otpVerification,
              message: 'Login sucess',
              code: 200
            });

          case 22:
            return _context7.abrupt("return", {
              data: {},
              message: 'Wrong Otp',
              code: 403
            });

          case 23:
            _context7.next = 41;
            break;

          case 25:
            if (!(otpData && businessData)) {
              _context7.next = 40;
              break;
            }

            // const payload = { phoneNumber: otpData.phoneNumber }
            // const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" })
            // const otpVerification = {
            //   token,
            //   businessData
            // }
            // return {
            //   data: otpVerification,
            //   message: "Login sucess",
            //   code: 200
            // }
            _rightOtpFind = otpData[otpData.length - 1];
            _context7.next = 29;
            return _bcrypt["default"].compare(req.otp, _rightOtpFind.otp);

          case 29:
            _validUser = _context7.sent;

            if (!(_rightOtpFind.phoneNumber === req.phoneNumber && _validUser)) {
              _context7.next = 37;
              break;
            }

            _payload2 = {
              phoneNumber: otpData.phoneNumber
            };
            _token2 = jwt.sign(_payload2, process.env.TOKEN_SECRET, {
              expiresIn: '1d'
            });
            _otpVerification = {
              token: _token2,
              businessData: businessData
            };
            return _context7.abrupt("return", {
              data: _otpVerification,
              message: 'Login sucess',
              code: 200
            });

          case 37:
            return _context7.abrupt("return", {
              data: {},
              message: 'Wrong Otp',
              code: 403
            });

          case 38:
            _context7.next = 41;
            break;

          case 40:
            return _context7.abrupt("return", {
              data: {},
              message: 'Phone number not found!! Register first',
              code: 403
            });

          case 41:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function userOtpVerification(_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}(); //get all users


exports.userOtpVerification = userOtpVerification;

var getAllUsers = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req) {
    var users;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _user["default"].find().populate('gpsAddress', null, 'Address').exec();

          case 3:
            users = _context8.sent;
            return _context8.abrupt("return", {
              message: 'users fetched successfully',
              code: 201,
              data: users
            });

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            throw _context8.t0;

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function getAllUsers(_x11) {
    return _ref8.apply(this, arguments);
  };
}(); //get all users & business


exports.getAllUsers = getAllUsers;

var getAllUsersAndBusiness = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req) {
    var users, business, allProfiles;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _user["default"].find().populate('gpsAddress', null, 'Address').exec();

          case 3:
            users = _context9.sent;
            _context9.next = 6;
            return _business["default"].find().populate('gpsAddress', null, 'Address').exec();

          case 6:
            business = _context9.sent;
            allProfiles = [].concat((0, _toConsumableArray2["default"])(users), (0, _toConsumableArray2["default"])(business));
            return _context9.abrupt("return", {
              message: 'users fetched successfully',
              code: 201,
              data: allProfiles
            });

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            throw _context9.t0;

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 11]]);
  }));

  return function getAllUsersAndBusiness(_x12) {
    return _ref9.apply(this, arguments);
  };
}(); //get all users & business


exports.getAllUsersAndBusiness = getAllUsersAndBusiness;

var searchProfile = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req) {
    var regex, users, business, allProfiles;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            regex = new RegExp(req.name);
            _context10.next = 4;
            return _user["default"].find({
              name: regex
            }).populate('gpsAddress', null, 'Address').exec();

          case 4:
            users = _context10.sent;
            _context10.next = 7;
            return _business["default"].find({
              name: regex
            }).populate('gpsAddress', null, 'Address').exec();

          case 7:
            business = _context10.sent;
            allProfiles = [].concat((0, _toConsumableArray2["default"])(users), (0, _toConsumableArray2["default"])(business));
            return _context10.abrupt("return", {
              message: 'users fetched successfully',
              code: 201,
              data: allProfiles
            });

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](0);
            throw _context10.t0;

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 12]]);
  }));

  return function searchProfile(_x13) {
    return _ref10.apply(this, arguments);
  };
}();

exports.searchProfile = searchProfile;

var searchHash = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req) {
    var regex, users, allProfiles;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            regex = new RegExp(req.name); // const business = await Business.find({ name: regex }).populate('gpsAddress', null, 'Address').exec()

            _context11.next = 4;
            return _hashTag["default"].aggregate([{
              $match: {
                hashTag: regex
              }
            }, {
              $group: {
                _id: '$hashTag',
                count: {
                  $sum: 1
                },
                postId: {
                  $first: '$postId'
                }
              }
            }, {
              $lookup: {
                from: 'posts',
                localField: 'postId',
                foreignField: '_id',
                as: 'postDetails'
              }
            }]);

          case 4:
            users = _context11.sent;
            allProfiles = (0, _toConsumableArray2["default"])(users);
            return _context11.abrupt("return", {
              message: 'hashes fetched successfully',
              code: 201,
              data: allProfiles
            });

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](0);
            throw _context11.t0;

          case 12:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 9]]);
  }));

  return function searchHash(_x14) {
    return _ref11.apply(this, arguments);
  };
}(); //follow user


exports.searchHash = searchHash;

var followUser = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req) {
    var user_details, followId_details, updateFollowerOfUserBeingFollowed, updateFollowingOfLoggedInUser, updateFollowerOfBusinessBeingFollowed, updateFollowingOfLoggedInBusiness, newFollow, addFollowDetails, followIDDetails;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            console.log('Follow ID => ', req.followId, req.user_id, req.role);
            _context12.prev = 1;
            _context12.next = 4;
            return (0, _getNotification.getUserDetails)(req.user_id);

          case 4:
            user_details = _context12.sent;
            _context12.next = 7;
            return (0, _getNotification.getUserDetails)(req.followId);

          case 7:
            followId_details = _context12.sent;

            if (!followId_details.followers.some(function (el) {
              return el == req.user_id;
            })) {
              _context12.next = 12;
              break;
            }

            return _context12.abrupt("return", {
              message: 'followed already',
              code: 201,
              data: {}
            });

          case 12:
            _context12.next = 14;
            return _user["default"].findByIdAndUpdate(req.followId, {
              $push: {
                followers: req.user_id
              }
            }, {
              "new": true
            }).exec();

          case 14:
            updateFollowerOfUserBeingFollowed = _context12.sent;
            _context12.next = 17;
            return _user["default"].findByIdAndUpdate(req.user_id, {
              $push: {
                following: req.followId
              }
            }, {
              "new": true
            }).exec();

          case 17:
            updateFollowingOfLoggedInUser = _context12.sent;
            _context12.next = 20;
            return _business["default"].findByIdAndUpdate(req.followId, {
              $push: {
                followers: req.user_id
              }
            }, {
              "new": true
            }).exec();

          case 20:
            updateFollowerOfBusinessBeingFollowed = _context12.sent;
            _context12.next = 23;
            return _business["default"].findByIdAndUpdate(req.user_id, {
              $push: {
                following: req.followId
              }
            }, {
              "new": true
            }).exec();

          case 23:
            updateFollowingOfLoggedInBusiness = _context12.sent;
            newFollow = new _follow["default"](_objectSpread({}, req));
            addFollowDetails = newFollow.save();
            followIDDetails = {};
            _context12.next = 29;
            return _business["default"].findOne({
              _id: Mongoose.Types.ObjectId(req.followId)
            });

          case 29:
            followIDDetails = _context12.sent;

            if (!(followIDDetails == null)) {
              _context12.next = 37;
              break;
            }

            _context12.next = 33;
            return _user["default"].findOne({
              _id: Mongoose.Types.ObjectId(req.followId)
            });

          case 33:
            followIDDetails = _context12.sent;

            _notification["default"].notify(followIDDetails.fcmToken, 'follow', user_details.name);

            _context12.next = 38;
            break;

          case 37:
            _notification["default"].notify(followIDDetails.fcmToken, 'follow', user_details.name);

          case 38:
            return _context12.abrupt("return", {
              message: 'followed successfully',
              code: 201,
              data: updateFollowingOfLoggedInUser
            });

          case 39:
            _context12.next = 44;
            break;

          case 41:
            _context12.prev = 41;
            _context12.t0 = _context12["catch"](1);
            throw _context12.t0;

          case 44:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 41]]);
  }));

  return function followUser(_x15) {
    return _ref12.apply(this, arguments);
  };
}(); //unfollow user


exports.followUser = followUser;

var unfollowUser = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req) {
    var updateFollowerOfUserBeingFollowed, updateFollowingOfLoggedInUser, updateFollowerOfBusinessBeingFollowed, updateFollowingOfLoggedInBusiness;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _user["default"].findByIdAndUpdate(req.followId, {
              $pull: {
                followers: req.user_id
              }
            }, {
              "new": true
            }).exec();

          case 3:
            updateFollowerOfUserBeingFollowed = _context13.sent;
            _context13.next = 6;
            return _user["default"].findByIdAndUpdate(req.user_id, {
              $pull: {
                following: req.followId
              }
            }, {
              "new": true
            }).exec();

          case 6:
            updateFollowingOfLoggedInUser = _context13.sent;
            _context13.next = 9;
            return _business["default"].findByIdAndUpdate(req.followId, {
              $pull: {
                followers: req.user_id
              }
            }, {
              "new": true
            }).exec();

          case 9:
            updateFollowerOfBusinessBeingFollowed = _context13.sent;
            _context13.next = 12;
            return _business["default"].findByIdAndUpdate(req.user_id, {
              $pull: {
                following: req.followId
              }
            }, {
              "new": true
            }).exec();

          case 12:
            updateFollowingOfLoggedInBusiness = _context13.sent;
            _context13.next = 15;
            return _follow["default"].remove({
              followId: Mongoose.Types.ObjectId(req.followId)
            });

          case 15:
            return _context13.abrupt("return", {
              message: 'unfollowed successfully',
              code: 201,
              data: updateFollowingOfLoggedInUser
            });

          case 18:
            _context13.prev = 18;
            _context13.t0 = _context13["catch"](0);
            throw _context13.t0;

          case 21:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 18]]);
  }));

  return function unfollowUser(_x16) {
    return _ref13.apply(this, arguments);
  };
}(); //create new user


exports.unfollowUser = unfollowUser;

var newUser = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(body) {
    var data;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return _user["default"].create(body);

          case 2:
            data = _context14.sent;
            return _context14.abrupt("return", data);

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function newUser(_x17) {
    return _ref14.apply(this, arguments);
  };
}(); //update single user


exports.newUser = newUser;

var updateUser = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return _user["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });

          case 2:
            data = _context15.sent;
            return _context15.abrupt("return", data);

          case 4:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function updateUser(_x18, _x19) {
    return _ref15.apply(this, arguments);
  };
}(); //delete single user


exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(id) {
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return _user["default"].findByIdAndDelete(id);

          case 2:
            return _context16.abrupt("return", '');

          case 3:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function deleteUser(_x20) {
    return _ref16.apply(this, arguments);
  };
}(); //get single user


exports.deleteUser = deleteUser;

var getUser = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(id) {
    var data;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return _user["default"].findById(id);

          case 2:
            data = _context17.sent;
            return _context17.abrupt("return", data);

          case 4:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function getUser(_x21) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var getBusiness = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(id) {
    var data;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return _business["default"].findById(id).populate('gpsAddress', null, 'Address').exec();

          case 2:
            data = _context18.sent;
            return _context18.abrupt("return", data);

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function getBusiness(_x22) {
    return _ref18.apply(this, arguments);
  };
}();

exports.getBusiness = getBusiness;

var getGpsAddressDetails = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req) {
    var userData, businessData;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;

            if (!(req.role == 'user')) {
              _context19.next = 8;
              break;
            }

            _context19.next = 4;
            return _user["default"].findOne({
              phoneNumber: req.phoneNumber
            }).populate('gpsAddress', null, 'Address').exec();

          case 4:
            userData = _context19.sent;
            return _context19.abrupt("return", {
              message: 'gps fetched successfully',
              code: 201,
              data: userData
            });

          case 8:
            _context19.next = 10;
            return _business["default"].findOne({
              phoneNumber: req.phoneNumber
            }).populate('gpsAddress', null, 'Address').exec();

          case 10:
            businessData = _context19.sent;
            return _context19.abrupt("return", {
              message: 'gps fetched successfully',
              code: 201,
              data: businessData
            });

          case 12:
            _context19.next = 17;
            break;

          case 14:
            _context19.prev = 14;
            _context19.t0 = _context19["catch"](0);
            throw _context19.t0;

          case 17:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 14]]);
  }));

  return function getGpsAddressDetails(_x23) {
    return _ref19.apply(this, arguments);
  };
}();

exports.getGpsAddressDetails = getGpsAddressDetails;

var addNewAddress = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req) {
    var newAddress, addressDetails;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            newAddress = new _address["default"]({
              user_id: req.user_id,
              role: req.role,
              latitude: req.latitude,
              longitude: req.longitude,
              active: req.active,
              addressLine1: req.addressLine1,
              addressLine2: req.addressLine2
            });
            _context20.next = 4;
            return newAddress.save();

          case 4:
            addressDetails = _context20.sent;
            return _context20.abrupt("return", {
              message: 'new address added successfully',
              code: 201,
              data: addressDetails
            });

          case 8:
            _context20.prev = 8;
            _context20.t0 = _context20["catch"](0);
            throw _context20.t0;

          case 11:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[0, 8]]);
  }));

  return function addNewAddress(_x24) {
    return _ref20.apply(this, arguments);
  };
}();

exports.addNewAddress = addNewAddress;

var getUserAddresses = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req) {
    var address;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _context21.next = 3;
            return _address["default"].find({
              user_id: req.user_id
            });

          case 3:
            address = _context21.sent;
            return _context21.abrupt("return", {
              message: 'addresses fetched successfully',
              code: 201,
              data: address
            });

          case 7:
            _context21.prev = 7;
            _context21.t0 = _context21["catch"](0);
            console.log(_context21.t0);

          case 10:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[0, 7]]);
  }));

  return function getUserAddresses(_x25) {
    return _ref21.apply(this, arguments);
  };
}();

exports.getUserAddresses = getUserAddresses;

var sendSupportMessage = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req) {
    var newMsg, msgDetails;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            newMsg = new _supportChat["default"](_objectSpread({}, req));
            _context22.next = 4;
            return newMsg.save();

          case 4:
            msgDetails = _context22.sent;
            return _context22.abrupt("return", {
              message: 'support chat sent successfully',
              code: 201,
              data: msgDetails
            });

          case 8:
            _context22.prev = 8;
            _context22.t0 = _context22["catch"](0);
            console.log(_context22.t0);

          case 11:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[0, 8]]);
  }));

  return function sendSupportMessage(_x26) {
    return _ref22.apply(this, arguments);
  };
}();

exports.sendSupportMessage = sendSupportMessage;

var getProfileDetails = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req) {
    var user_details;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return (0, _getNotification.getUserDetails)(req.user_id);

          case 3:
            user_details = _context23.sent;
            return _context23.abrupt("return", {
              message: 'user details fetched successfully',
              code: 201,
              data: user_details
            });

          case 7:
            _context23.prev = 7;
            _context23.t0 = _context23["catch"](0);
            console.log(_context23.t0);

          case 10:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[0, 7]]);
  }));

  return function getProfileDetails(_x27) {
    return _ref23.apply(this, arguments);
  };
}();

exports.getProfileDetails = getProfileDetails;

var deleteProfile = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req) {
    var user_details, removeBusiness, removeUser, posts, followers, following, likes, comments, address, shares;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            _context24.next = 3;
            return (0, _getNotification.getUserDetails)(req.user_id);

          case 3:
            user_details = _context24.sent;

            if (!(user_details.role == 'business')) {
              _context24.next = 10;
              break;
            }

            _context24.next = 7;
            return _business["default"].deleteOne({
              _id: req.user_id
            });

          case 7:
            removeBusiness = _context24.sent;
            _context24.next = 14;
            break;

          case 10:
            if (!(user_details.role == 'user')) {
              _context24.next = 14;
              break;
            }

            _context24.next = 13;
            return _business["default"].deleteOne({
              _id: req.user_id
            });

          case 13:
            removeUser = _context24.sent;

          case 14:
            _context24.next = 16;
            return _post["default"].deleteMany({
              user_id: req.user_id
            });

          case 16:
            posts = _context24.sent;
            _context24.next = 19;
            return _follow["default"].deleteMany({
              user_id: req.user_id
            });

          case 19:
            followers = _context24.sent;
            _context24.next = 22;
            return _following["default"].deleteMany({
              user_id: req.user_id
            });

          case 22:
            following = _context24.sent;
            _context24.next = 25;
            return _likes["default"].deleteMany({
              user_id: req.user_id
            });

          case 25:
            likes = _context24.sent;
            _context24.next = 28;
            return _comments["default"].deleteMany({
              user_id: req.user_id
            });

          case 28:
            comments = _context24.sent;
            _context24.next = 31;
            return _address["default"].deleteMany({
              user_id: req.user_id
            });

          case 31:
            address = _context24.sent;
            _context24.next = 34;
            return _share["default"].deleteMany({
              user_id: req.user_id
            });

          case 34:
            shares = _context24.sent;
            return _context24.abrupt("return", {
              message: 'profile deleted successfully',
              code: 201,
              data: user_details
            });

          case 38:
            _context24.prev = 38;
            _context24.t0 = _context24["catch"](0);
            console.log(_context24.t0);

          case 41:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[0, 38]]);
  }));

  return function deleteProfile(_x28) {
    return _ref24.apply(this, arguments);
  };
}();

exports.deleteProfile = deleteProfile;

var getBusinessProfileById = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req) {
    var profileDetails;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            _context25.next = 3;
            return _business["default"].findById(req.user_id).populate('gpsAddress', null, 'Address').exec();

          case 3:
            profileDetails = _context25.sent;
            return _context25.abrupt("return", {
              message: 'user details fetched successfully',
              code: 201,
              data: profileDetails
            });

          case 7:
            _context25.prev = 7;
            _context25.t0 = _context25["catch"](0);
            console.log(_context25.t0);

          case 10:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[0, 7]]);
  }));

  return function getBusinessProfileById(_x29) {
    return _ref25.apply(this, arguments);
  };
}();

exports.getBusinessProfileById = getBusinessProfileById;

var getUserProfileById = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req) {
    var profileDetails;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            _context26.next = 3;
            return _user["default"].findById(req.user_id).populate('gpsAddress', null, 'Address').exec();

          case 3:
            profileDetails = _context26.sent;
            return _context26.abrupt("return", {
              message: 'user details fetched successfully',
              code: 201,
              data: profileDetails
            });

          case 7:
            _context26.prev = 7;
            _context26.t0 = _context26["catch"](0);
            console.log(_context26.t0);

          case 10:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[0, 7]]);
  }));

  return function getUserProfileById(_x30) {
    return _ref26.apply(this, arguments);
  };
}();

exports.getUserProfileById = getUserProfileById;