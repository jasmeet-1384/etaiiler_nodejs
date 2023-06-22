"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var postController = _interopRequireWildcard(require("../controllers/post.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = _express["default"].Router();

router.post('/addPost', postController.addPost);
router.post('/getAllPosts', postController.getAllPosts);
router.post('/getAllPostsHome', postController.getAllPostsHome);
router.post('/getOwnPosts', postController.getOwnPosts);
router.post('/getOwnPostsCounts', postController.getOwnPostsCounts);
router.post('/removePost', postController.removePost);
router.post('/getRelatedPosts', postController.relatedPosts);
router.post('/addPostLike', postController.addPostLike);
router.post('/removePostLike', postController.removePostLike);
router.post('/getPostLikes', postController.getPostLikes);
router.post('/getAllPostLikes', postController.getAllPostLikes);
router.post('/getPostLikeCount', postController.getPostLikeCount);
router.post('/addComment', postController.addPostComment);
router.post('/getPostComment', postController.getPostComment);
router.post('/getPostCommentCount', postController.getPostCommentCount);
router.post('/removePostComment', postController.removePostComment);
router.post('/getLikesByUser', postController.getLikesByUser);
router.post('/sharePosts', postController.sharePosts);
router.post('/getPostShares', postController.getPostShares);
router.post('/getPostTags', postController.getPostTags);
router.post('/addHidePost', postController.addHidePost);
router.post('/getHiddenPosts', postController.getHiddenPosts);
router.post('/reportPosts', postController.reportPosts);
router.post('/deletePosts', postController.deletePosts);
router.post('/getPromoPosts', postController.getPromoPosts);
router.post('/getPromoPlans', postController.getPromoPlans);
router.post('/getDiscountPlans', postController.getDiscountPlans);
router.post('/getPayment', postController.getPayment);
router.post('/getPaymentOrderId', postController.getPaymentOrderId);
router.post('/getRazorpayDetails', postController.getRazorpayDetails);
router.post('/getPostById', postController.getPostById);
router.get('/sharePost/post/:id', postController.sharePost);
var _default = router;
exports["default"] = _default;