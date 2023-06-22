"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharePosts = exports.sharePost = exports.reportPosts = exports.removePostLike = exports.removePostComment = exports.removePost = exports.relatedPosts = exports.getRazorpayDetails = exports.getPromoPosts = exports.getPromoPlans = exports.getPostTags = exports.getPostShares = exports.getPostLikes = exports.getPostLikeCount = exports.getPostCommentCount = exports.getPostComment = exports.getPostById = exports.getPaymentOrderId = exports.getPayment = exports.getOwnPostsCounts = exports.getOwnPosts = exports.getLikesByUser = exports.getHiddenPosts = exports.getDiscountPlans = exports.getAllPostsHome = exports.getAllPosts = exports.getAllPostLikes = exports.deletePosts = exports.addPostLike = exports.addPostComment = exports.addPost = exports.addHidePost = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var PostService = _interopRequireWildcard(require("../services/post.service"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var addPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return PostService.addPost(req.body);

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

  return function addPost(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.addPost = addPost;

var removePost = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return PostService.removePost(req.body);

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

  return function removePost(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.removePost = removePost;

var getAllPosts = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return PostService.getAllPosts(req.body);

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

  return function getAllPosts(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllPosts = getAllPosts;

var getAllPostsHome = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return PostService.getAllPostsHome(req.body);

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

  return function getAllPostsHome(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllPostsHome = getAllPostsHome;

var relatedPosts = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return PostService.getRelatedPosts(req.body);

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

  return function relatedPosts(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.relatedPosts = relatedPosts;

var getPostById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return PostService.getPostById(req.body);

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

  return function getPostById(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getPostById = getPostById;

var sharePost = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var data, url;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return PostService.sharePost(req.params);

          case 3:
            data = _context7.sent;
            // let url = `https://www.google.com`
            url = "iuniverse://post/".concat(data.data);
            res.redirect(url);
            console.log("sdfhbhs ==========>>>>>>>>    ", url);
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            next(_context7.t0);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 9]]);
  }));

  return function sharePost(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.sharePost = sharePost;

var getOwnPosts = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            console.log(req);
            _context8.next = 4;
            return PostService.getOwnPosts(req.body);

          case 4:
            data = _context8.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            next(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));

  return function getOwnPosts(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getOwnPosts = getOwnPosts;

var getOwnPostsCounts = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return PostService.getOwnPostsCounts(req.body);

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

  return function getOwnPostsCounts(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getOwnPostsCounts = getOwnPostsCounts;

var addPostLike = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return PostService.addPostLike(req.body);

          case 3:
            data = _context10.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context10.next = 10;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            next(_context10.t0);

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 7]]);
  }));

  return function addPostLike(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.addPostLike = addPostLike;

var removePostLike = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return PostService.removePostLike(req.body);

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

  return function removePostLike(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.removePostLike = removePostLike;

var getPostLikes = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return PostService.getPostLikes(req.body);

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

  return function getPostLikes(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getPostLikes = getPostLikes;

var getAllPostLikes = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return PostService.getAllPostLikes(req.body);

          case 3:
            data = _context13.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
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

  return function getAllPostLikes(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

exports.getAllPostLikes = getAllPostLikes;

var getPostLikeCount = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return PostService.getPostLikeCount(req.body);

          case 3:
            data = _context14.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
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

  return function getPostLikeCount(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

exports.getPostLikeCount = getPostLikeCount;

var getLikesByUser = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return PostService.getLikesByUser(req.body);

          case 3:
            data = _context15.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
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

  return function getLikesByUser(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();

exports.getLikesByUser = getLikesByUser;

var addPostComment = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return PostService.addPostComment(req.body);

          case 3:
            data = _context16.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context16.next = 10;
            break;

          case 7:
            _context16.prev = 7;
            _context16.t0 = _context16["catch"](0);
            next(_context16.t0);

          case 10:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 7]]);
  }));

  return function addPostComment(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();

exports.addPostComment = addPostComment;

var getPostComment = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return PostService.getPostComment(req.body);

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

  return function getPostComment(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getPostComment = getPostComment;

var getPostCommentCount = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return PostService.getPostCommentCount(req.body);

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

  return function getPostCommentCount(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();

exports.getPostCommentCount = getPostCommentCount;

var removePostComment = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return PostService.removePostComment(req.body);

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

  return function removePostComment(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

exports.removePostComment = removePostComment;

var sharePosts = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return PostService.sharePosts(req.body);

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

  return function sharePosts(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

exports.sharePosts = sharePosts;

var getPostShares = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _context21.next = 3;
            return PostService.getPostShares(req.body);

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

  return function getPostShares(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();

exports.getPostShares = getPostShares;

var getPostTags = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _context22.next = 3;
            return PostService.getPostTags(req.body);

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

  return function getPostTags(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();

exports.getPostTags = getPostTags;

var addHidePost = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return PostService.addHidePost(req.body);

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

  return function addHidePost(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

exports.addHidePost = addHidePost;

var getHiddenPosts = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            _context24.next = 3;
            return PostService.getHiddenPosts(req.body);

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

  return function getHiddenPosts(_x70, _x71, _x72) {
    return _ref24.apply(this, arguments);
  };
}();

exports.getHiddenPosts = getHiddenPosts;

var reportPosts = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            _context25.next = 3;
            return PostService.reportPosts(req.body);

          case 3:
            data = _context25.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context25.next = 10;
            break;

          case 7:
            _context25.prev = 7;
            _context25.t0 = _context25["catch"](0);
            next(_context25.t0);

          case 10:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[0, 7]]);
  }));

  return function reportPosts(_x73, _x74, _x75) {
    return _ref25.apply(this, arguments);
  };
}();

exports.reportPosts = reportPosts;

var deletePosts = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            _context26.next = 3;
            return PostService.deletePosts(req.body);

          case 3:
            data = _context26.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context26.next = 10;
            break;

          case 7:
            _context26.prev = 7;
            _context26.t0 = _context26["catch"](0);
            next(_context26.t0);

          case 10:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[0, 7]]);
  }));

  return function deletePosts(_x76, _x77, _x78) {
    return _ref26.apply(this, arguments);
  };
}();

exports.deletePosts = deletePosts;

var getPromoPosts = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            _context27.next = 3;
            return PostService.getPromoPosts(req.body);

          case 3:
            data = _context27.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context27.next = 10;
            break;

          case 7:
            _context27.prev = 7;
            _context27.t0 = _context27["catch"](0);
            next(_context27.t0);

          case 10:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[0, 7]]);
  }));

  return function getPromoPosts(_x79, _x80, _x81) {
    return _ref27.apply(this, arguments);
  };
}();

exports.getPromoPosts = getPromoPosts;

var getPromoPlans = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            _context28.next = 3;
            return PostService.getPromoPlans(req.body);

          case 3:
            data = _context28.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context28.next = 10;
            break;

          case 7:
            _context28.prev = 7;
            _context28.t0 = _context28["catch"](0);
            next(_context28.t0);

          case 10:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, null, [[0, 7]]);
  }));

  return function getPromoPlans(_x82, _x83, _x84) {
    return _ref28.apply(this, arguments);
  };
}();

exports.getPromoPlans = getPromoPlans;

var getDiscountPlans = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            _context29.next = 3;
            return PostService.getDiscountPlans(req.body);

          case 3:
            data = _context29.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context29.next = 10;
            break;

          case 7:
            _context29.prev = 7;
            _context29.t0 = _context29["catch"](0);
            next(_context29.t0);

          case 10:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[0, 7]]);
  }));

  return function getDiscountPlans(_x85, _x86, _x87) {
    return _ref29.apply(this, arguments);
  };
}();

exports.getDiscountPlans = getDiscountPlans;

var getPayment = /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            _context30.next = 3;
            return PostService.getPayment(req.body);

          case 3:
            data = _context30.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context30.next = 10;
            break;

          case 7:
            _context30.prev = 7;
            _context30.t0 = _context30["catch"](0);
            next(_context30.t0);

          case 10:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, null, [[0, 7]]);
  }));

  return function getPayment(_x88, _x89, _x90) {
    return _ref30.apply(this, arguments);
  };
}();

exports.getPayment = getPayment;

var getPaymentOrderId = /*#__PURE__*/function () {
  var _ref31 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            _context31.next = 3;
            return PostService.getPaymentOrderId(req.body);

          case 3:
            data = _context31.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            }); // console.log(data,"kookokoko")

            _context31.next = 10;
            break;

          case 7:
            _context31.prev = 7;
            _context31.t0 = _context31["catch"](0);
            next(_context31.t0);

          case 10:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31, null, [[0, 7]]);
  }));

  return function getPaymentOrderId(_x91, _x92, _x93) {
    return _ref31.apply(this, arguments);
  };
}();

exports.getPaymentOrderId = getPaymentOrderId;

var getRazorpayDetails = /*#__PURE__*/function () {
  var _ref32 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            _context32.next = 3;
            return PostService.getRazorpayDetails(req.body);

          case 3:
            data = _context32.sent;
            res.status(data.code).json({
              code: data.code,
              data: data.data,
              message: data.message
            });
            _context32.next = 10;
            break;

          case 7:
            _context32.prev = 7;
            _context32.t0 = _context32["catch"](0);
            next(_context32.t0);

          case 10:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, null, [[0, 7]]);
  }));

  return function getRazorpayDetails(_x94, _x95, _x96) {
    return _ref32.apply(this, arguments);
  };
}();

exports.getRazorpayDetails = getRazorpayDetails;