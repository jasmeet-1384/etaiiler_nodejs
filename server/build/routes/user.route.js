"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var userController = _interopRequireWildcard(require("../controllers/user.controller"));

var _user2 = require("../validators/user.validator");

var _auth = require("../middlewares/auth.middleware");

var _s = require("../services/s3.service");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable prettier/prettier */
var router = _express["default"].Router(); //route to get all users


router.post('/userRegister', userController.userResgister);
router.post('/resetPassword', userController.resetPassword); //route to create a new user

router.post('/userLogin', userController.userLogin); // route to update the token

router.post('/userTokenUpdate', userController.userTokenUpdate);
router.post('/profileUpdate', userController.profileUpdate); //route for generating otp

router.post('/userOtp', userController.userOtp);
router.post('/getUser', userController.getUser);
router.post('/getBusiness', userController.getBusiness);
router.post('/followUser', userController.followUser);
router.post('/unfollowUser', userController.unfollowUser); //route for generating otp

router.post('/userOtpVerification', userController.userOtpVerification);
router.post('/getAllUser', userController.getAllUsers);
router.post('/getAllUsersAndBusiness', userController.getAllUsersAndBusiness);
router.post('/searchProfile', userController.searchProfile);
router.post('/followUser', userController.followUser);
router.post('/unfollowUser', userController.unfollowUser);
router.post('/getGpsAddressDetails', userController.getGpsAddressDetails);
router.post('/addNewAddress', userController.addNewAddress);
router.post('/getUserAddresses', userController.getUserAddresses);
router.post('/sendSupportMessage', userController.sendSupportMessage);
router.post('/getProfileDetails', userController.getProfileDetails);
router.post('/deleteProfile', userController.deleteProfile);
router.post('/getBusinessProfileById', userController.getBusinessProfileById);
router.post('/getUserProfileById', userController.getUserProfileById);
router.get('/s3Url', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var url;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _s.generateUploadUrl)();

          case 2:
            url = _context.sent;
            res.send({
              url: url
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;