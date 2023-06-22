"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllBusiness = exports.businessResgister = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _business = _interopRequireDefault(require("../models/business.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _address = _interopRequireDefault(require("../models/address.model"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Mongoose = require('mongoose');

var businessResgister = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var businessData, passwordHash, newBusiness, businessDetails, newAddress, addressDetails, updateGps;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _business["default"].find({
              phoneNumber: req.phoneNumber
            });

          case 2:
            businessData = _context.sent;

            if (businessData.length) {
              _context.next = 22;
              break;
            }

            _context.next = 6;
            return _bcrypt["default"].hash(req.password, 10);

          case 6:
            passwordHash = _context.sent;
            req.password = passwordHash;
            newBusiness = new _business["default"](_objectSpread({}, req));
            _context.next = 11;
            return newBusiness.save();

          case 11:
            businessDetails = _context.sent;
            newAddress = new _address["default"]({
              user_id: newBusiness._id,
              role: req.role,
              latitude: req.latitude,
              longitude: req.longitude,
              active: req.active,
              addressLine1: req.addressLine1,
              addressLine2: req.addressLine2
            });
            _context.next = 15;
            return newAddress.save();

          case 15:
            addressDetails = _context.sent;
            _context.next = 18;
            return _business["default"].updateOne({
              _id: Mongoose.Types.ObjectId(newBusiness._id)
            }, {
              $set: {
                gpsAddress: newAddress._id
              }
            });

          case 18:
            updateGps = _context.sent;
            return _context.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: businessDetails
            });

          case 22:
            return _context.abrupt("return", {
              message: "user already registered",
              code: 400,
              data: {}
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function businessResgister(_x) {
    return _ref.apply(this, arguments);
  };
}(); //get all users


exports.businessResgister = businessResgister;

var getAllBusiness = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var business;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _business["default"].find().populate('gpsAddress', null, 'Address').exec();

          case 3:
            business = _context2.sent;
            return _context2.abrupt("return", {
              message: "business fetched successfully",
              code: 201,
              data: business
            });

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllBusiness(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllBusiness = getAllBusiness;