"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharePosts = exports.sharePost = exports.reportPosts = exports.removePostLike = exports.removePostComment = exports.removePost = exports.getRelatedPosts = exports.getRazorpayDetails = exports.getPromoPosts = exports.getPromoPlans = exports.getPostTags = exports.getPostShares = exports.getPostLikes = exports.getPostLikeCount = exports.getPostCommentCount = exports.getPostComment = exports.getPostById = exports.getPaymentOrderId = exports.getPayment = exports.getOwnPostsCounts = exports.getOwnPosts = exports.getLikesByUser = exports.getHiddenPosts = exports.getDiscountPlans = exports.getAllPostsHome = exports.getAllPosts = exports.getAllPostLikes = exports.deletePosts = exports.addPostTags = exports.addPostLike = exports.addPostComment = exports.addPost = exports.addHidePost = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _comments = _interopRequireDefault(require("../models/comments.model"));

var _likes = _interopRequireDefault(require("../models/likes.model"));

var _post = _interopRequireDefault(require("../models/post.model"));

var _hashTag = _interopRequireDefault(require("../models/hashTag.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _business = _interopRequireDefault(require("../models/business.model"));

var _razorpayDetails = _interopRequireDefault(require("../models/razorpayDetails.model"));

var _tag = _interopRequireDefault(require("../models/tag.model"));

var _share = _interopRequireDefault(require("../models/share.model"));

var _hidePost = _interopRequireDefault(require("../models/hidePost.model"));

var _report = _interopRequireDefault(require("../models/report.model"));

var _notification = _interopRequireDefault(require("./notification.service"));

var _promoPlan = require("../utils/promoPlan");

var _discountPlan = require("../utils/discountPlan");

var _getNotification = require("./getNotification.service");

var _crypto = _interopRequireDefault(require("crypto"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'rzp_test_Fxjkta891p06jg',
  key_secret: 'uz8VwOSG8BpmKJNirgAjS4qW'
});

var Mongoose = require('mongoose');

var addPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var _req$hashTags, newPost, postDetails, i, newTag, tagDetails, tag, postTag, allHashes, filteredHashes, b;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            newPost = new _post["default"](_objectSpread({}, req));
            _context.next = 4;
            return newPost.save();

          case 4:
            postDetails = _context.sent;
            i = 0;

          case 6:
            if (!(i < req.tagged_id.length)) {
              _context.next = 18;
              break;
            }

            newTag = new _tag["default"]({
              user_id: req.tagged_id[i],
              postId: newPost._id,
              role: req.role
            });
            _context.next = 10;
            return newTag.save();

          case 10:
            tagDetails = _context.sent;
            tag = {
              taggedPerson: req.tagged_id[i]
            };
            _context.next = 14;
            return _post["default"].updateOne({
              _id: newPost._id
            }, {
              $push: {
                tags: tag
              }
            }, {
              "new": true
            }).exec();

          case 14:
            postTag = _context.sent;

          case 15:
            i++;
            _context.next = 6;
            break;

          case 18:
            allHashes = (_req$hashTags = req.hashTags) === null || _req$hashTags === void 0 ? void 0 : _req$hashTags.split('#'); // remove hashes with 0 chars and spaces

            filteredHashes = allHashes.map(function (x) {
              return x.trim();
            }).filter(function (y) {
              return y.length > 0;
            }).map(function (z) {
              return {
                postId: postDetails._id,
                hashTag: z
              };
            });
            console.log("hashtags => ", filteredHashes);
            _context.next = 23;
            return _hashTag["default"].insertMany(filteredHashes);

          case 23:
            b = _context.sent;
            // let newTag = new Tag({
            console.log(b); //     tagged_id : req.tagged_id,
            //     postId : newPost._id,
            //     role: req.role
            // })
            // const tagDetails = await newTag.save()
            // let tag = {
            //     taggedPerson: req.tagged_id
            // }
            // let postTag = await Post.findByIdAndUpdate(newPost._id, {
            //     $push: { tags: tag }
            // }, { new: true }).exec()

            return _context.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: postDetails
            });

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 28]]);
  }));

  return function addPost(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addPost = addPost;

var removePost = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _post["default"].remove({
              _id: Mongoose.Types.ObjectId(req.post_id)
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

  return function removePost(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.removePost = removePost;

var getAllPosts = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var hashTagsOrder, topHashTags, topPostBasedOnTags, topPostIds, userPosts, businessPosts, topPosts, finalPosts;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // const userPosts = await Post.find({ role: "user" }).sort({ "createdAt": -1 }).populate('user_id', null, 'User').exec()
            // const businessPosts = await Post.find({ role: "business" }).sort({ "createdAt": -1 }).populate('user_id', null, 'Business').exec()
            // const combinedPosts = [...userPosts, ...businessPosts]
            // combinedPosts.sort((a, b) => b.createdAt - a.createdAt)
            console.log("trending called");
            _context3.next = 4;
            return _hashTag["default"].aggregate([{
              $group: {
                _id: "$hashTag",
                count: {
                  "$sum": 1
                }
              }
            }, {
              $sort: {
                "count": -1
              }
            }]);

          case 4:
            hashTagsOrder = _context3.sent;
            topHashTags = hashTagsOrder.map(function (x) {
              return x._id;
            });
            _context3.next = 8;
            return _hashTag["default"].find({
              hashTag: {
                $in: topHashTags
              }
            });

          case 8:
            topPostBasedOnTags = _context3.sent;
            topPostIds = topPostBasedOnTags.map(function (x) {
              return Mongoose.Types.ObjectId(x.postId);
            });
            _context3.next = 12;
            return _post["default"].find({
              $and: [{
                role: "user"
              }, {
                _id: {
                  $in: topPostIds
                }
              }]
            }).populate('user_id', null, 'User');

          case 12:
            userPosts = _context3.sent;
            _context3.next = 15;
            return _post["default"].find({
              $and: [{
                role: "business"
              }, {
                _id: {
                  $in: topPostIds
                }
              }]
            }).populate('user_id', null, 'Business');

          case 15:
            businessPosts = _context3.sent;
            // let topPosts = await Post.find({
            //     $and: [
            //         {role: {$in: ['user', 'business']}},
            //         {_id: { $in: topPostIds}}
            //     ]
            // })
            // .sort({ "createdAt": -1 })
            // .populate('user_id', null, 'User')
            // .populate('user_id', null, 'Business')
            topPosts = [].concat((0, _toConsumableArray2["default"])(userPosts), (0, _toConsumableArray2["default"])(businessPosts));
            topPosts = topPosts.sort(function (a, b) {
              return b.createdAt - a.createdAt;
            });
            finalPosts = [];
            topPosts.map(function (pos) {
              var hashes = topPostBasedOnTags.filter(function (x) {
                return x.postId.equals(pos._id);
              }).map(function (a) {
                return a.hashTag;
              }); // console.log("test => ", pos._doc.user_id)

              var basicDetails = pos._doc;
              finalPosts.push(_objectSpread(_objectSpread({}, basicDetails), {}, {
                hashTags: hashes,
                user_id: [basicDetails.user_id]
              }));
            }); // console.log("posts => ", finalPosts)

            return _context3.abrupt("return", {
              message: "posts fetched successfully",
              code: 201,
              data: finalPosts
            });

          case 23:
            _context3.prev = 23;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 23]]);
  }));

  return function getAllPosts(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllPosts = getAllPosts;

var getAllPostsHome = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var abcd, abcd2, combinedPosts, finalPosts, i, postDetails, hash, phashes, j, hT;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _post["default"].aggregate([{
              $match: {
                role: {
                  $in: ['user']
                }
              }
            }, {
              $lookup: {
                from: 'hashtags',
                localField: '_id',
                foreignField: 'postId',
                as: 'hashTags'
              }
            }, {
              $lookup: {
                from: 'users',
                localField: 'user_id',
                foreignField: '_id',
                as: 'user_id'
              }
            }]);

          case 3:
            abcd = _context4.sent;
            _context4.next = 6;
            return _post["default"].aggregate([{
              $match: {
                $and: [{
                  role: {
                    $in: ['business']
                  }
                }, {
                  postType: ""
                }]
              }
            }, {
              $lookup: {
                from: 'hashtags',
                localField: '_id',
                foreignField: 'postId',
                as: 'hashTags'
              }
            }, {
              $lookup: {
                from: 'businesses',
                localField: 'user_id',
                foreignField: '_id',
                as: 'user_id'
              }
            }]);

          case 6:
            abcd2 = _context4.sent;
            // console.log("abcd => ", JSON.stringify(abcd))
            // const userPosts = await Post.find({ role: "user" }).sort({ "createdAt": -1 }).populate('user_id', null, 'User').exec()
            // const businessPosts = await Post.find({ role: "business" }).sort({ "createdAt": -1 }).populate('user_id', null, 'Business').exec()
            // const combinedPosts = [...userPosts, ...businessPosts]
            combinedPosts = [].concat((0, _toConsumableArray2["default"])(abcd), (0, _toConsumableArray2["default"])(abcd2));
            combinedPosts.sort(function (a, b) {
              return b.createdAt - a.createdAt;
            });
            finalPosts = [];

            for (i = 0; i < combinedPosts.length; i++) {
              postDetails = combinedPosts[i]; // console.log("post => ", ...postDetails)

              hash = postDetails.hashTags || []; // console.log("post hash => ", hash)

              phashes = [];

              for (j = 0; j < hash.length; j++) {
                hT = hash[j];
                hT = hT.hashTag;
                phashes.push(hT);
              }

              postDetails["hashTags"] = phashes;
              finalPosts.push(_objectSpread({}, postDetails));
            }

            return _context4.abrupt("return", {
              message: "posts fetched successfully",
              code: 201,
              data: finalPosts
            });

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));

  return function getAllPostsHome(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllPostsHome = getAllPostsHome;

var getRelatedPosts = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req) {
    var hashId, hashTagQuery, requiredHashTag, allRelatedHastagPostsFromUsers, allRelatedHastagPostsFromBusinesses, _final, finalData, i, hTags, element, d, u, h, j, ht;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            hashId = req.hashId;
            _context5.next = 4;
            return _hashTag["default"].findOne({
              hashTag: hashId
            });

          case 4:
            hashTagQuery = _context5.sent;
            requiredHashTag = (hashTagQuery === null || hashTagQuery === void 0 ? void 0 : hashTagQuery.hashTag) || [];
            _context5.next = 8;
            return _hashTag["default"].aggregate([{
              $match: {
                "hashTag": requiredHashTag
              }
            }, {
              $group: {
                _id: "$postId"
              }
            }, {
              $lookup: {
                from: 'posts',
                localField: '_id',
                foreignField: '_id',
                as: 'postDetails'
              }
            }, {
              $match: {
                "postDetails.role": "user"
              }
            }, {
              $addFields: {
                "userId": "$postDetails.user_id"
              }
            }, {
              $lookup: {
                from: "users",
                localField: 'userId',
                foreignField: '_id',
                as: 'user_id'
              }
            }, {
              $unwind: "$postDetails"
            }, {
              $lookup: {
                from: 'hashtags',
                localField: 'postDetails._id',
                foreignField: 'postId',
                as: 'hashTags'
              }
            }]);

          case 8:
            allRelatedHastagPostsFromUsers = _context5.sent;
            _context5.next = 11;
            return _hashTag["default"].aggregate([{
              $match: {
                "hashTag": requiredHashTag
              }
            }, {
              $group: {
                _id: "$postId"
              }
            }, {
              $lookup: {
                from: 'posts',
                localField: '_id',
                foreignField: '_id',
                as: 'postDetails'
              }
            }, {
              $match: {
                "postDetails.role": "business"
              }
            }, {
              $addFields: {
                "userId": "$postDetails.user_id"
              }
            }, {
              $lookup: {
                from: "businesses",
                localField: 'userId',
                foreignField: '_id',
                as: 'user_id'
              }
            }, {
              $unwind: "$postDetails"
            }, {
              $lookup: {
                from: 'hashtags',
                localField: 'postDetails._id',
                foreignField: 'postId',
                as: 'hashTags'
              }
            }]);

          case 11:
            allRelatedHastagPostsFromBusinesses = _context5.sent;
            _final = [];
            finalData = [].concat((0, _toConsumableArray2["default"])(allRelatedHastagPostsFromUsers), (0, _toConsumableArray2["default"])(allRelatedHastagPostsFromBusinesses));

            for (i = 0; i < finalData.length; i++) {
              hTags = [];
              element = finalData[i];
              d = element.postDetails;
              u = element.user_id;
              h = element.hashTags;

              for (j = 0; j < h.length; j++) {
                ht = h[j];
                hTags.push(ht.hashTag);
              }

              d["user_id"] = u;
              delete element["postDetails"];
              delete element["hashTags"];
              delete element["userId"];

              _final.push(_objectSpread(_objectSpread(_objectSpread({}, element), d), {}, {
                hashTags: [].concat(hTags)
              }));
            }

            return _context5.abrupt("return", {
              message: "related posts fetched successfully",
              code: 201,
              data: _final
            });

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 18]]);
  }));

  return function getRelatedPosts(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getRelatedPosts = getRelatedPosts;

var getPostById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req) {
    var postDetails, checkUserFromTable;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _post["default"].findOne({
              _id: Mongoose.Types.ObjectId(req.id)
            }).populate('user_id', null, 'User');

          case 3:
            checkUserFromTable = _context6.sent;

            if (!(checkUserFromTable.user_id == null)) {
              _context6.next = 10;
              break;
            }

            _context6.next = 7;
            return _post["default"].findOne({
              _id: Mongoose.Types.ObjectId(req.id)
            }).populate('user_id', null, 'Business');

          case 7:
            postDetails = _context6.sent;
            _context6.next = 11;
            break;

          case 10:
            postDetails = checkUserFromTable;

          case 11:
            return _context6.abrupt("return", {
              message: "fetched successfully",
              code: 201,
              data: postDetails
            });

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            throw _context6.t0;

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 14]]);
  }));

  return function getPostById(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getPostById = getPostById;

var sharePost = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req) {
    var postDetails;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            postDetails = req.id; // console.log("Details ===>>>> ", postDetails)

            return _context7.abrupt("return", {
              message: "fetched successfully",
              code: 201,
              data: postDetails
            });

          case 5:
            _context7.prev = 5;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 5]]);
  }));

  return function sharePost(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.sharePost = sharePost;

var getOwnPosts = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req) {
    var abcd, abcd2, combinedPosts, finalPosts, i, postDetails, hash, phashes, j, hT;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _post["default"].aggregate([{
              $match: {
                $and: [{
                  user_id: Mongoose.Types.ObjectId(req.user_id)
                }, {
                  role: {
                    $in: ['user']
                  }
                }]
              }
            }, {
              $lookup: {
                from: 'hashtags',
                localField: '_id',
                foreignField: 'postId',
                as: 'hashTags'
              }
            }, {
              $lookup: {
                from: 'users',
                localField: 'user_id',
                foreignField: '_id',
                as: 'user_id'
              }
            }]);

          case 3:
            abcd = _context8.sent;
            _context8.next = 6;
            return _post["default"].aggregate([{
              $match: {
                $and: [{
                  role: {
                    $in: ['business']
                  }
                }, {
                  user_id: Mongoose.Types.ObjectId(req.user_id)
                }]
              }
            }, {
              $lookup: {
                from: 'hashtags',
                localField: '_id',
                foreignField: 'postId',
                as: 'hashTags'
              }
            }, {
              $lookup: {
                from: 'businesses',
                localField: 'user_id',
                foreignField: '_id',
                as: 'user_id'
              }
            }]);

          case 6:
            abcd2 = _context8.sent;
            combinedPosts = [].concat((0, _toConsumableArray2["default"])(abcd), (0, _toConsumableArray2["default"])(abcd2));
            combinedPosts.sort(function (a, b) {
              return b.createdAt - a.createdAt;
            });
            finalPosts = [];

            for (i = 0; i < combinedPosts.length; i++) {
              postDetails = combinedPosts[i]; // console.log("post => ", ...postDetails)

              hash = postDetails.hashTags || []; // console.log("post hash => ", hash)

              phashes = [];

              for (j = 0; j < hash.length; j++) {
                hT = hash[j];
                hT = hT.hashTag;
                phashes.push(hT);
              }

              postDetails["hashTags"] = phashes;
              finalPosts.push(_objectSpread({}, postDetails));
            }

            return _context8.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: {
                userPosts: abcd,
                businessPosts: abcd2
              }
            });

          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](0);
            throw _context8.t0;

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 14]]);
  }));

  return function getOwnPosts(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getOwnPosts = getOwnPosts;

var getOwnPostsCounts = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req) {
    var userPosts;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _post["default"].count({
              user_id: Mongoose.Types.ObjectId(req.user_id)
            });

          case 3:
            userPosts = _context9.sent;
            return _context9.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: {
                count: userPosts
              }
            });

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            throw _context9.t0;

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 7]]);
  }));

  return function getOwnPostsCounts(_x9) {
    return _ref9.apply(this, arguments);
  };
}(); ////////////////////////////////////


exports.getOwnPostsCounts = getOwnPostsCounts;

var addPostLike = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req) {
    var _postLike, user_details, like, _postLike2, newLike, likeDetails, postDetails, tokenFetch, postFCMToken;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _post["default"].findById(req.postId);

          case 3:
            _postLike = _context10.sent;
            console.log(_postLike.likes.some(function (el) {
              return el.likedBy == req.user_id;
            }));

            if (!_postLike.likes.some(function (el) {
              return el.likedBy == req.user_id;
            })) {
              _context10.next = 9;
              break;
            }

            return _context10.abrupt("return", {
              message: "already liked successfully",
              code: 201,
              data: []
            });

          case 9:
            _context10.next = 11;
            return (0, _getNotification.getUserDetails)(req.user_id);

          case 11:
            user_details = _context10.sent;
            like = {
              likedBy: req.user_id
            };
            _context10.next = 15;
            return _post["default"].findByIdAndUpdate(req.postId, {
              $push: {
                likes: like
              }
            }, {
              "new": true
            }).exec();

          case 15:
            _postLike2 = _context10.sent;
            newLike = new _likes["default"](_objectSpread({}, req));
            likeDetails = newLike.save();
            _context10.next = 20;
            return _post["default"].findOne({
              _id: Mongoose.Types.ObjectId(req.postId)
            });

          case 20:
            postDetails = _context10.sent;
            tokenFetch = {};

            if (!(postDetails.role === "user")) {
              _context10.next = 28;
              break;
            }

            _context10.next = 25;
            return _user["default"].findOne({
              _id: Mongoose.Types.ObjectId(postDetails.user_id)
            });

          case 25:
            tokenFetch = _context10.sent;
            _context10.next = 31;
            break;

          case 28:
            _context10.next = 30;
            return _business["default"].findOne({
              _id: Mongoose.Types.ObjectId(postDetails.user_id)
            });

          case 30:
            tokenFetch = _context10.sent;

          case 31:
            console.log(tokenFetch);
            postFCMToken = tokenFetch.fcmToken;

            _notification["default"].notify(postFCMToken, 'like', user_details.name);

            return _context10.abrupt("return", {
              message: "liked successfully",
              code: 201,
              data: _postLike2
            });

          case 35:
            _context10.next = 40;
            break;

          case 37:
            _context10.prev = 37;
            _context10.t0 = _context10["catch"](0);
            throw _context10.t0;

          case 40:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 37]]);
  }));

  return function addPostLike(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

exports.addPostLike = addPostLike;

var removePostLike = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req) {
    var unlike, _postLike3;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            unlike = {
              likedBy: req.user_id
            };
            _context11.next = 4;
            return _post["default"].findByIdAndUpdate(req.postId, {
              $pull: {
                likes: unlike
              }
            }, {
              "new": true
            }).exec();

          case 4:
            _postLike3 = _context11.sent;
            _context11.next = 7;
            return _likes["default"].remove({
              postId: Mongoose.Types.ObjectId(req.postId),
              user_id: Mongoose.Types.ObjectId(req.user_id)
            });

          case 7:
            return _context11.abrupt("return", {
              message: "unliked successfully",
              code: 201,
              data: _postLike3
            });

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](0);
            throw _context11.t0;

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 10]]);
  }));

  return function removePostLike(_x11) {
    return _ref11.apply(this, arguments);
  };
}();

exports.removePostLike = removePostLike;

var getPostLikes = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req) {
    var userLikes, businessLikes, allLikes;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _likes["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId),
              role: "user"
            }).populate('user_id', null, 'User').exec();

          case 3:
            userLikes = _context12.sent;
            _context12.next = 6;
            return _likes["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId),
              role: "business"
            }).populate('user_id', null, 'Business').exec();

          case 6:
            businessLikes = _context12.sent;
            allLikes = [].concat((0, _toConsumableArray2["default"])(userLikes), (0, _toConsumableArray2["default"])(businessLikes));
            return _context12.abrupt("return", {
              message: " success",
              code: 201,
              data: allLikes
            });

          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](0);
            throw _context12.t0;

          case 14:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 11]]);
  }));

  return function getPostLikes(_x12) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getPostLikes = getPostLikes;

var getAllPostLikes = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req) {
    var likedPosts;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _likes["default"].find();

          case 3:
            likedPosts = _context13.sent;
            return _context13.abrupt("return", {
              message: "likes fetched successfully",
              code: 201,
              data: likedPosts
            });

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](0);
            throw _context13.t0;

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 7]]);
  }));

  return function getAllPostLikes(_x13) {
    return _ref13.apply(this, arguments);
  };
}();

exports.getAllPostLikes = getAllPostLikes;

var getPostLikeCount = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req) {
    var count;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _likes["default"].count({
              post_id: Mongoose.Types.ObjectId(req.post_id)
            });

          case 3:
            count = _context14.sent;
            return _context14.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: {
                count: count
              }
            });

          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14["catch"](0);
            throw _context14.t0;

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 7]]);
  }));

  return function getPostLikeCount(_x14) {
    return _ref14.apply(this, arguments);
  };
}();

exports.getPostLikeCount = getPostLikeCount;

var getLikesByUser = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req) {
    var count, businessCount, combined, finalArray, i;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _likes["default"].find({
              user_id: Mongoose.Types.ObjectId(req.user_id)
            }).populate({
              path: 'postId',
              model: 'Post',
              populate: {
                path: 'user_id',
                model: 'User'
              }
            }).exec();

          case 3:
            count = _context15.sent;
            _context15.next = 6;
            return _likes["default"].find({
              user_id: Mongoose.Types.ObjectId(req.user_id)
            }).populate({
              path: 'postId',
              model: 'Post',
              populate: {
                path: 'user_id',
                model: 'Business'
              }
            }).exec();

          case 6:
            businessCount = _context15.sent;
            combined = [].concat((0, _toConsumableArray2["default"])(count), (0, _toConsumableArray2["default"])(businessCount));
            finalArray = [];

            for (i = 0; i < combined.length; i++) {
              if (combined[i].postId.user_id != null) {
                finalArray.push(combined[i]);
              }
            }

            finalArray.sort(function (a, b) {
              return b.createdAt - a.createdAt;
            });
            return _context15.abrupt("return", {
              message: "found successfully",
              code: 201,
              data: finalArray
            });

          case 14:
            _context15.prev = 14;
            _context15.t0 = _context15["catch"](0);
            throw _context15.t0;

          case 17:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 14]]);
  }));

  return function getLikesByUser(_x15) {
    return _ref15.apply(this, arguments);
  };
}(); ////////////////////////////////////


exports.getLikesByUser = getLikesByUser;

var addPostComment = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req) {
    var user_details, comment, commentDetails, newComment, newCommentDetails, postDetails, tokenFetch, postFCMToken;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return (0, _getNotification.getUserDetails)(req.user_id);

          case 3:
            user_details = _context16.sent;
            comment = {
              text: req.text,
              postedBy: req.user_id
            };
            _context16.next = 7;
            return _post["default"].findByIdAndUpdate(req.postId, {
              $push: {
                comments: comment
              }
            }, {
              "new": true
            }).exec();

          case 7:
            commentDetails = _context16.sent;
            newComment = new _comments["default"](_objectSpread({}, req));
            newCommentDetails = newComment.save();
            _context16.next = 12;
            return _post["default"].findOne({
              _id: Mongoose.Types.ObjectId(req.postId)
            });

          case 12:
            postDetails = _context16.sent;
            tokenFetch = {};

            if (!(postDetails.role === "user")) {
              _context16.next = 20;
              break;
            }

            _context16.next = 17;
            return _user["default"].findOne({
              _id: Mongoose.Types.ObjectId(postDetails.user_id)
            });

          case 17:
            tokenFetch = _context16.sent;
            _context16.next = 23;
            break;

          case 20:
            _context16.next = 22;
            return _business["default"].findOne({
              _id: Mongoose.Types.ObjectId(postDetails.user_id)
            });

          case 22:
            tokenFetch = _context16.sent;

          case 23:
            console.log(tokenFetch);
            postFCMToken = tokenFetch.fcmToken;

            _notification["default"].notify(postFCMToken, 'comment', user_details.name);

            return _context16.abrupt("return", {
              message: "commented successfully",
              code: 201,
              data: commentDetails
            });

          case 29:
            _context16.prev = 29;
            _context16.t0 = _context16["catch"](0);
            throw _context16.t0;

          case 32:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 29]]);
  }));

  return function addPostComment(_x16) {
    return _ref16.apply(this, arguments);
  };
}();

exports.addPostComment = addPostComment;

var getPostComment = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req) {
    var userComment, businessComment, allComments;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _comments["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId),
              role: "user"
            }).populate('user_id', null, 'User').exec();

          case 3:
            userComment = _context17.sent;
            _context17.next = 6;
            return _comments["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId),
              role: "business"
            }).populate('user_id', null, 'Business').exec();

          case 6:
            businessComment = _context17.sent;
            allComments = [].concat((0, _toConsumableArray2["default"])(userComment), (0, _toConsumableArray2["default"])(businessComment));
            return _context17.abrupt("return", {
              message: "comment fetched successfully",
              code: 201,
              data: allComments
            });

          case 11:
            _context17.prev = 11;
            _context17.t0 = _context17["catch"](0);
            throw _context17.t0;

          case 14:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[0, 11]]);
  }));

  return function getPostComment(_x17) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getPostComment = getPostComment;

var getPostCommentCount = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req) {
    var count;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return _comments["default"].count({
              post_id: Mongoose.Types.ObjectId(req.post_id)
            });

          case 3:
            count = _context18.sent;
            return _context18.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: {
                count: count
              }
            });

          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18["catch"](0);
            throw _context18.t0;

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[0, 7]]);
  }));

  return function getPostCommentCount(_x18) {
    return _ref18.apply(this, arguments);
  };
}();

exports.getPostCommentCount = getPostCommentCount;

var removePostComment = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req) {
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return _comments["default"].remove({
              _id: Mongoose.Types.ObjectId(req.like_id)
            });

          case 3:
            return _context19.abrupt("return", {
              message: "comment removed",
              code: 201
            });

          case 6:
            _context19.prev = 6;
            _context19.t0 = _context19["catch"](0);
            throw _context19.t0;

          case 9:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 6]]);
  }));

  return function removePostComment(_x19) {
    return _ref19.apply(this, arguments);
  };
}(); ////////////////////////


exports.removePostComment = removePostComment;

var addPostTags = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req) {
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            return _context20.abrupt("return", {
              message: "liked successfully",
              code: 201,
              data: postLike
            });

          case 4:
            _context20.prev = 4;
            _context20.t0 = _context20["catch"](0);
            throw _context20.t0;

          case 7:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[0, 4]]);
  }));

  return function addPostTags(_x20) {
    return _ref20.apply(this, arguments);
  };
}();

exports.addPostTags = addPostTags;

var sharePosts = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req) {
    var share, postShare, newShare, shareDetails, postDetails, tokenFetch, postFCMToken;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            share = {
              sharedBy: req.user_id
            };
            _context21.next = 4;
            return _post["default"].findByIdAndUpdate(req.postId, {
              $push: {
                share: share
              }
            }, {
              "new": true
            }).exec();

          case 4:
            postShare = _context21.sent;
            newShare = new _share["default"](_objectSpread({}, req));
            shareDetails = newShare.save();
            _context21.next = 9;
            return _post["default"].findOne({
              _id: Mongoose.Types.ObjectId(req.postId)
            });

          case 9:
            postDetails = _context21.sent;
            tokenFetch = {};

            if (!(postDetails.role === "user")) {
              _context21.next = 17;
              break;
            }

            _context21.next = 14;
            return _user["default"].findOne({
              _id: Mongoose.Types.ObjectId(postDetails.user_id)
            });

          case 14:
            tokenFetch = _context21.sent;
            _context21.next = 20;
            break;

          case 17:
            _context21.next = 19;
            return _business["default"].findOne({
              _id: Mongoose.Types.ObjectId(postDetails.user_id)
            });

          case 19:
            tokenFetch = _context21.sent;

          case 20:
            console.log(tokenFetch);
            postFCMToken = tokenFetch.fcmToken;

            _notification["default"].notify(postFCMToken, 'share');

            return _context21.abrupt("return", {
              message: "shared successfully",
              code: 201,
              data: postShare
            });

          case 26:
            _context21.prev = 26;
            _context21.t0 = _context21["catch"](0);
            throw _context21.t0;

          case 29:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[0, 26]]);
  }));

  return function sharePosts(_x21) {
    return _ref21.apply(this, arguments);
  };
}();

exports.sharePosts = sharePosts;

var getPostShares = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req) {
    var userLikes, businessLikes, allLikes;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _context22.next = 3;
            return _share["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId),
              role: "user"
            }).populate('user_id', null, 'User').exec();

          case 3:
            userLikes = _context22.sent;
            _context22.next = 6;
            return _share["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId),
              role: "business"
            }).populate('user_id', null, 'Business').exec();

          case 6:
            businessLikes = _context22.sent;
            allLikes = [].concat((0, _toConsumableArray2["default"])(userLikes), (0, _toConsumableArray2["default"])(businessLikes));
            return _context22.abrupt("return", {
              message: "shared fetched success",
              code: 201,
              data: allLikes
            });

          case 11:
            _context22.prev = 11;
            _context22.t0 = _context22["catch"](0);
            throw _context22.t0;

          case 14:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[0, 11]]);
  }));

  return function getPostShares(_x22) {
    return _ref22.apply(this, arguments);
  };
}();

exports.getPostShares = getPostShares;

var getPostTags = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req) {
    var userLikes, businessLikes, allLikes;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return _tag["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId)
            }).populate('user_id', null, 'User').exec();

          case 3:
            userLikes = _context23.sent;
            _context23.next = 6;
            return _tag["default"].find({
              postId: Mongoose.Types.ObjectId(req.postId)
            }).populate('user_id', null, 'Business').exec();

          case 6:
            businessLikes = _context23.sent;
            allLikes = [].concat((0, _toConsumableArray2["default"])(userLikes), (0, _toConsumableArray2["default"])(businessLikes));
            return _context23.abrupt("return", {
              message: "tags fetched success",
              code: 201,
              data: allLikes
            });

          case 11:
            _context23.prev = 11;
            _context23.t0 = _context23["catch"](0);
            throw _context23.t0;

          case 14:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[0, 11]]);
  }));

  return function getPostTags(_x23) {
    return _ref23.apply(this, arguments);
  };
}();

exports.getPostTags = getPostTags;

var addHidePost = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req) {
    var newPost, postDetails;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            newPost = new _hidePost["default"](_objectSpread({}, req));
            _context24.next = 4;
            return newPost.save();

          case 4:
            postDetails = _context24.sent;
            return _context24.abrupt("return", {
              message: "post removed successfully",
              code: 201,
              data: postDetails
            });

          case 8:
            _context24.prev = 8;
            _context24.t0 = _context24["catch"](0);
            throw _context24.t0;

          case 11:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[0, 8]]);
  }));

  return function addHidePost(_x24) {
    return _ref24.apply(this, arguments);
  };
}();

exports.addHidePost = addHidePost;

var getHiddenPosts = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req) {
    var hiddenPosts;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            _context25.next = 3;
            return _hidePost["default"].find({
              user_id: Mongoose.Types.ObjectId(req.user_id)
            });

          case 3:
            hiddenPosts = _context25.sent;
            return _context25.abrupt("return", {
              message: "shared fetched success",
              code: 201,
              data: hiddenPosts
            });

          case 7:
            _context25.prev = 7;
            _context25.t0 = _context25["catch"](0);
            throw _context25.t0;

          case 10:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[0, 7]]);
  }));

  return function getHiddenPosts(_x25) {
    return _ref25.apply(this, arguments);
  };
}();

exports.getHiddenPosts = getHiddenPosts;

var reportPosts = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req) {
    var newPost, postDetails;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            newPost = new _report["default"](_objectSpread({}, req));
            _context26.next = 4;
            return newPost.save();

          case 4:
            postDetails = _context26.sent;
            return _context26.abrupt("return", {
              message: "post reported successfully",
              code: 201,
              data: postDetails
            });

          case 8:
            _context26.prev = 8;
            _context26.t0 = _context26["catch"](0);
            throw _context26.t0;

          case 11:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[0, 8]]);
  }));

  return function reportPosts(_x26) {
    return _ref26.apply(this, arguments);
  };
}();

exports.reportPosts = reportPosts;

var deletePosts = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req) {
    var postDetails;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            _context27.next = 3;
            return _post["default"].findOneAndDelete({
              _id: Mongoose.Types.ObjectId(req.postId)
            });

          case 3:
            postDetails = _context27.sent;
            return _context27.abrupt("return", {
              message: "post deleted successfully",
              code: 201,
              data: postDetails
            });

          case 7:
            _context27.prev = 7;
            _context27.t0 = _context27["catch"](0);
            throw _context27.t0;

          case 10:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[0, 7]]);
  }));

  return function deletePosts(_x27) {
    return _ref27.apply(this, arguments);
  };
}(); ////////////////////////////////////////////////////////////////////////


exports.deletePosts = deletePosts;

var getPromoPosts = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req) {
    var latNlong, businessPosts, i, R, dLat, dLon, a, c, d, roundOffD;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            latNlong = [];
            _context28.next = 4;
            return _post["default"].find({
              role: "business",
              postType: "promo"
            }).populate({
              path: 'user_id',
              model: 'Business',
              populate: {
                path: 'gpsAddress',
                model: 'Address'
              }
            }).exec();

          case 4:
            businessPosts = _context28.sent;

            for (i = 0; i < businessPosts.length; i++) {
              R = 6371; // Radius of the earth in km

              dLat = deg2rad(businessPosts[i].user_id.gpsAddress.latitude - req.latitude); // deg2rad below

              dLon = deg2rad(businessPosts[i].user_id.gpsAddress.longitude - req.longitude);
              a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(req.latitude)) * Math.cos(deg2rad(businessPosts[i].user_id.gpsAddress.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
              c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
              d = R * c; // Distance in km

              roundOffD = Math.round(d * 100) / 100;

              if (businessPosts[i].range == '0-10 kms' && roundOffD <= 10) {
                latNlong.push(businessPosts[i]);
              } else if (businessPosts[i].range == '0-40 kms' && roundOffD <= 40) {
                latNlong.push(businessPosts[i]);
              } else if (businessPosts[i].range == 'State' && businessPosts[i].promoPlanState == req.state) {
                latNlong.push(businessPosts[i]);
                console.log(businessPosts[i], "BUSINESS");
              } else if (businessPosts[i].range == 'National') {
                latNlong.push(businessPosts[i]);
              }
            }

            return _context28.abrupt("return", {
              message: "promo posts fetched successfully",
              code: 201,
              data: latNlong
            });

          case 9:
            _context28.prev = 9;
            _context28.t0 = _context28["catch"](0);
            throw _context28.t0;

          case 12:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, null, [[0, 9]]);
  }));

  return function getPromoPosts(_x28) {
    return _ref28.apply(this, arguments);
  };
}();

exports.getPromoPosts = getPromoPosts;

var deg2rad = function deg2rad(deg) {
  return deg * (Math.PI / 180);
};

var getPromoPlans = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req) {
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            return _context29.abrupt("return", {
              message: "promo plans fetched successfully",
              code: 201,
              data: _promoPlan.plans
            });

          case 4:
            _context29.prev = 4;
            _context29.t0 = _context29["catch"](0);
            throw _context29.t0;

          case 7:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[0, 4]]);
  }));

  return function getPromoPlans(_x29) {
    return _ref29.apply(this, arguments);
  };
}();

exports.getPromoPlans = getPromoPlans;

var getDiscountPlans = /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(req) {
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            return _context30.abrupt("return", {
              message: "discount plans fetched successfully",
              code: 201,
              data: _discountPlan.discountPlan
            });

          case 4:
            _context30.prev = 4;
            _context30.t0 = _context30["catch"](0);
            throw _context30.t0;

          case 7:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, null, [[0, 4]]);
  }));

  return function getDiscountPlans(_x30) {
    return _ref30.apply(this, arguments);
  };
}();

exports.getDiscountPlans = getDiscountPlans;

var getPayment = /*#__PURE__*/function () {
  var _ref31 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(req) {
    var adFee, adFeeDetails, startTime, endTime, difference, differenceInHrs;
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            adFee = 0;
            startTime = new Date("".concat(req.promoFromDate, " ").concat(req.promoFromhrs)).getTime();
            endTime = new Date("".concat(req.promoToDate, " ").concat(req.promoToHrs)).getTime();
            difference = endTime - startTime;
            differenceInHrs = Math.ceil(difference / 60000 / 60);
            console.log(differenceInHrs);

            if (req.range == '0-10 kms') {
              adFee = 0;
              adFeeDetails = {
                hours: differenceInHrs,
                price: adFee
              };
            } else if (req.range == '0-40 kms') {
              adFee = differenceInHrs * 10;
              adFeeDetails = {
                hours: differenceInHrs,
                price: adFee
              };
            } else if (req.range == 'State') {
              adFee = differenceInHrs * 30;
              adFeeDetails = {
                hours: differenceInHrs,
                price: adFee
              };
            } else if (req.range == 'National') {
              adFee = differenceInHrs * 50;
              adFeeDetails = {
                hours: differenceInHrs,
                price: adFee
              };
            }

            return _context31.abrupt("return", {
              message: "add fee details fetched successfully",
              code: 201,
              data: adFeeDetails
            });

          case 11:
            _context31.prev = 11;
            _context31.t0 = _context31["catch"](0);
            throw _context31.t0;

          case 14:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31, null, [[0, 11]]);
  }));

  return function getPayment(_x31) {
    return _ref31.apply(this, arguments);
  };
}();

exports.getPayment = getPayment;

var createOrderCashFreeFunction = /*#__PURE__*/function () {
  var _ref32 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(amount, user_id, phoneNumber) {
    var data, response, responseJson;
    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            data = {
              order_id: _crypto["default"].randomBytes(10).toString("hex"),
              order_currency: "INR",
              order_amount: amount,
              customer_details: {
                customer_id: user_id,
                customer_name: "",
                customer_email: "",
                customer_phone: phoneNumber
              }
            };
            _context32.next = 4;
            return (0, _nodeFetch["default"])("https://api.cashfree.com/pg/orders", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-client-id': '2441746bae1d0b7cbe40fb92cb471442',
                'x-client-secret': '12622bce637a372a118a3b34a2ddd7eeeb32c118',
                'x-api-version': '2022-01-01',
                'x-request-id': 'etaiiler'
              },
              body: JSON.stringify(data)
            });

          case 4:
            response = _context32.sent;
            _context32.next = 7;
            return response.json();

          case 7:
            responseJson = _context32.sent;
            return _context32.abrupt("return", responseJson);

          case 11:
            _context32.prev = 11;
            _context32.t0 = _context32["catch"](0);
            console.log(_context32.t0);

          case 14:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, null, [[0, 11]]);
  }));

  return function createOrderCashFreeFunction(_x32, _x33, _x34) {
    return _ref32.apply(this, arguments);
  };
}();

var getPaymentOrderId = /*#__PURE__*/function () {
  var _ref33 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(req) {
    var orderCreated;
    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            _context33.next = 3;
            return createOrderCashFreeFunction(req.amount, req.userId, req.phoneNumber);

          case 3:
            orderCreated = _context33.sent;
            return _context33.abrupt("return", {
              message: "orderId generated successfully",
              code: 201,
              data: orderCreated
            });

          case 7:
            _context33.prev = 7;
            _context33.t0 = _context33["catch"](0);
            throw _context33.t0;

          case 10:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33, null, [[0, 7]]);
  }));

  return function getPaymentOrderId(_x35) {
    return _ref33.apply(this, arguments);
  };
}();

exports.getPaymentOrderId = getPaymentOrderId;

var getRazorpayDetails = /*#__PURE__*/function () {
  var _ref34 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(req) {
    var newPaymentDetails, paymentDetails, newPost, postDetails;
    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.prev = 0;
            newPaymentDetails = new _razorpayDetails["default"](_objectSpread({}, req));
            _context34.next = 4;
            return newPaymentDetails.save();

          case 4:
            paymentDetails = _context34.sent;
            newPost = new _post["default"](_objectSpread(_objectSpread({}, req), {}, {
              promoPlanTransactionId: newPaymentDetails._id
            }));
            _context34.next = 8;
            return newPost.save();

          case 8:
            postDetails = _context34.sent;
            return _context34.abrupt("return", {
              message: "payment details added successfully",
              code: 201,
              data: paymentDetails
            });

          case 12:
            _context34.prev = 12;
            _context34.t0 = _context34["catch"](0);
            throw _context34.t0;

          case 15:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34, null, [[0, 12]]);
  }));

  return function getRazorpayDetails(_x36) {
    return _ref34.apply(this, arguments);
  };
}();

exports.getRazorpayDetails = getRazorpayDetails;