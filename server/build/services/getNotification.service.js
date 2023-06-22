"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserDetails = exports.getNotifications = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _comments = _interopRequireDefault(require("../models/comments.model"));

var _likes = _interopRequireDefault(require("../models/likes.model"));

var _post = _interopRequireDefault(require("../models/post.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _business = _interopRequireDefault(require("../models/business.model"));

var _notification = _interopRequireDefault(require("./notification.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Mongoose = require('mongoose');

var getUserDetails = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var userData, BusinessData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].findById(id);

          case 2:
            userData = _context.sent;
            _context.next = 5;
            return _business["default"].findById(id);

          case 5:
            BusinessData = _context.sent;
            console.log("userData", userData);
            console.log("businessData", BusinessData);

            if (!userData) {
              _context.next = 11;
              break;
            }

            console.log("userData>>>>");
            return _context.abrupt("return", userData);

          case 11:
            if (!BusinessData) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", BusinessData);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserDetails(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUserDetails = getUserDetails;

var getNotifications = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var allcontents, userPosts, i, _userPosts$i, _userPosts$i$likes, _userPosts$i2, _userPosts$i2$likes, _userPosts$i4, _userPosts$i4$comment, _userPosts$i5, _userPosts$i5$comment, index, _userPosts$i3, _userPosts$i3$likes, element, dummy, jndex, _userPosts$i6, _userPosts$i6$comment, _element, _dummy, _index, _element2, userDetails, _userDetails, _userPosts, _i, _userPosts$_i, _userPosts$_i$likes, _userPosts$_i2, _userPosts$_i2$likes, _userPosts$_i4, _userPosts$_i4$commen, _userPosts$_i5, _userPosts$_i5$commen, _index2, _userPosts$_i3, _userPosts$_i3$likes, _element3, _dummy2, _jndex, _userPosts$_i6, _userPosts$_i6$commen, _element4, _dummy3, _index3, _element5, _userDetails2, _userDetails3;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            allcontents = [];

            if (!(req.role == 'user')) {
              _context2.next = 30;
              break;
            }

            _context2.next = 5;
            return _post["default"].find({
              user_id: Mongoose.Types.ObjectId(req.user_id),
              role: "user"
            }).populate('user_id', null, 'User').lean().exec();

          case 5:
            userPosts = _context2.sent;

            if (userPosts) {
              for (i = 0; i < userPosts.length; i++) {
                if ((_userPosts$i = userPosts[i]) !== null && _userPosts$i !== void 0 && (_userPosts$i$likes = _userPosts$i.likes) !== null && _userPosts$i$likes !== void 0 && _userPosts$i$likes.length && ((_userPosts$i2 = userPosts[i]) === null || _userPosts$i2 === void 0 ? void 0 : (_userPosts$i2$likes = _userPosts$i2.likes) === null || _userPosts$i2$likes === void 0 ? void 0 : _userPosts$i2$likes.length) > 0) {
                  for (index = 0; index < ((_userPosts$i3 = userPosts[i]) === null || _userPosts$i3 === void 0 ? void 0 : (_userPosts$i3$likes = _userPosts$i3.likes) === null || _userPosts$i3$likes === void 0 ? void 0 : _userPosts$i3$likes.length); index++) {
                    element = userPosts[i].likes[index];
                    dummy = _objectSpread({}, element);
                    dummy.postUser = userPosts[i].user_id;
                    dummy.postImage = userPosts[i].image;
                    console.log(dummy, "<====== dummy");
                    allcontents.push(dummy); //allcontents.push({ ...element, postUser: userPosts[i].user_id, postImage: userPosts[i].image })
                  }
                }

                if ((_userPosts$i4 = userPosts[i]) !== null && _userPosts$i4 !== void 0 && (_userPosts$i4$comment = _userPosts$i4.comments) !== null && _userPosts$i4$comment !== void 0 && _userPosts$i4$comment.length && ((_userPosts$i5 = userPosts[i]) === null || _userPosts$i5 === void 0 ? void 0 : (_userPosts$i5$comment = _userPosts$i5.comments) === null || _userPosts$i5$comment === void 0 ? void 0 : _userPosts$i5$comment.length) > 0) {
                  for (jndex = 0; jndex < ((_userPosts$i6 = userPosts[i]) === null || _userPosts$i6 === void 0 ? void 0 : (_userPosts$i6$comment = _userPosts$i6.comments) === null || _userPosts$i6$comment === void 0 ? void 0 : _userPosts$i6$comment.length); jndex++) {
                    _element = userPosts[i].comments[jndex];
                    _dummy = _objectSpread({}, _element);
                    _dummy.postUser = userPosts[i].user_id;
                    _dummy.postImage = userPosts[i].image;
                    console.log(_dummy, "<====== dummy2");
                    allcontents.push(_dummy); //allcontents.push({ ...element, postUser: userPosts[i].user_id, postImage: userPosts[i].image })
                  }
                } // allcontents.push({...userPosts[i].likes,postUser:userPosts[i].user_id,postImage:userPosts[i].image,postDesc:userPosts[i].description}, {...userPosts[i].comments,postUser:userPosts[i].user_id,postImage:userPosts[i].image,postDesc:userPosts[i].description})

              } //console.log(allcontents,"<++++ ALL CONTENTS")
              //console.log(allcontents[0],allcontents[0].createdAt.valueOf(), typeof(allcontents[0].createdAt))


              allcontents.sort(function (a, b) {
                return b.createdAt.valueOf() - a.createdAt.valueOf();
              }).slice(0, 20);
            }

            _index = 0;

          case 8:
            if (!(_index < allcontents.length)) {
              _context2.next = 27;
              break;
            }

            _element2 = allcontents[_index];
            console.log(_element2);

            if (!_element2.likedBy) {
              _context2.next = 18;
              break;
            }

            console.log("123");
            _context2.next = 15;
            return getUserDetails(_element2.likedBy);

          case 15:
            userDetails = _context2.sent;
            console.log(userDetails);
            allcontents[_index].likedBy = userDetails;

          case 18:
            if (!_element2.postedBy) {
              _context2.next = 24;
              break;
            }

            _context2.next = 21;
            return getUserDetails(_element2.postedBy);

          case 21:
            _userDetails = _context2.sent;
            console.log(_userDetails);
            allcontents[_index].postedBy = _userDetails;

          case 24:
            _index++;
            _context2.next = 8;
            break;

          case 27:
            return _context2.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: allcontents
            });

          case 30:
            _context2.next = 32;
            return _post["default"].find({
              user_id: Mongoose.Types.ObjectId(req.user_id),
              role: "business"
            }).populate('user_id', null, 'Business').lean().exec();

          case 32:
            _userPosts = _context2.sent;

            if (_userPosts) {
              for (_i = 0; _i < _userPosts.length; _i++) {
                if ((_userPosts$_i = _userPosts[_i]) !== null && _userPosts$_i !== void 0 && (_userPosts$_i$likes = _userPosts$_i.likes) !== null && _userPosts$_i$likes !== void 0 && _userPosts$_i$likes.length && ((_userPosts$_i2 = _userPosts[_i]) === null || _userPosts$_i2 === void 0 ? void 0 : (_userPosts$_i2$likes = _userPosts$_i2.likes) === null || _userPosts$_i2$likes === void 0 ? void 0 : _userPosts$_i2$likes.length) > 0) {
                  for (_index2 = 0; _index2 < ((_userPosts$_i3 = _userPosts[_i]) === null || _userPosts$_i3 === void 0 ? void 0 : (_userPosts$_i3$likes = _userPosts$_i3.likes) === null || _userPosts$_i3$likes === void 0 ? void 0 : _userPosts$_i3$likes.length); _index2++) {
                    _element3 = _userPosts[_i].likes[_index2];
                    _dummy2 = _objectSpread({}, _element3);
                    _dummy2.postUser = _userPosts[_i].user_id;
                    _dummy2.postImage = _userPosts[_i].image;
                    console.log(_dummy2, "<====== dummy");
                    allcontents.push(_dummy2); //allcontents.push({ ...element, postUser: userPosts[i].user_id, postImage: userPosts[i].image })
                  }
                }

                if ((_userPosts$_i4 = _userPosts[_i]) !== null && _userPosts$_i4 !== void 0 && (_userPosts$_i4$commen = _userPosts$_i4.comments) !== null && _userPosts$_i4$commen !== void 0 && _userPosts$_i4$commen.length && ((_userPosts$_i5 = _userPosts[_i]) === null || _userPosts$_i5 === void 0 ? void 0 : (_userPosts$_i5$commen = _userPosts$_i5.comments) === null || _userPosts$_i5$commen === void 0 ? void 0 : _userPosts$_i5$commen.length) > 0) {
                  for (_jndex = 0; _jndex < ((_userPosts$_i6 = _userPosts[_i]) === null || _userPosts$_i6 === void 0 ? void 0 : (_userPosts$_i6$commen = _userPosts$_i6.comments) === null || _userPosts$_i6$commen === void 0 ? void 0 : _userPosts$_i6$commen.length); _jndex++) {
                    _element4 = _userPosts[_i].comments[_jndex];
                    _dummy3 = _objectSpread({}, _element4);
                    _dummy3.postUser = _userPosts[_i].user_id;
                    _dummy3.postImage = _userPosts[_i].image;
                    console.log(_dummy3, "<====== dummy2");
                    allcontents.push(_dummy3); //allcontents.push({ ...element, postUser: userPosts[i].user_id, postImage: userPosts[i].image })
                  }
                } // allcontents.push({...userPosts[i].likes,postUser:userPosts[i].user_id,postImage:userPosts[i].image,postDesc:userPosts[i].description}, {...userPosts[i].comments,postUser:userPosts[i].user_id,postImage:userPosts[i].image,postDesc:userPosts[i].description})

              } //console.log(allcontents,"<++++ ALL CONTENTS")
              //console.log(allcontents[0],allcontents[0].createdAt.valueOf(), typeof(allcontents[0].createdAt))


              allcontents.sort(function (a, b) {
                return b.createdAt.valueOf() - a.createdAt.valueOf();
              }).slice(0, 20);
            }

            _index3 = 0;

          case 35:
            if (!(_index3 < allcontents.length)) {
              _context2.next = 54;
              break;
            }

            _element5 = allcontents[_index3];
            console.log(_element5);

            if (!_element5.likedBy) {
              _context2.next = 45;
              break;
            }

            console.log("123");
            _context2.next = 42;
            return getUserDetails(_element5.likedBy);

          case 42:
            _userDetails2 = _context2.sent;
            console.log(_userDetails2);
            allcontents[_index3].likedBy = _userDetails2;

          case 45:
            if (!_element5.postedBy) {
              _context2.next = 51;
              break;
            }

            _context2.next = 48;
            return getUserDetails(_element5.postedBy);

          case 48:
            _userDetails3 = _context2.sent;
            console.log(_userDetails3);
            allcontents[_index3].postedBy = _userDetails3;

          case 51:
            _index3++;
            _context2.next = 35;
            break;

          case 54:
            return _context2.abrupt("return", {
              message: "business notifications",
              code: 201,
              data: allcontents
            });

          case 55:
            _context2.next = 60;
            break;

          case 57:
            _context2.prev = 57;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 60:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 57]]);
  }));

  return function getNotifications(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getNotifications = getNotifications;