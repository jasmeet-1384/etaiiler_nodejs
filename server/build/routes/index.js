"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _business = _interopRequireDefault(require("./business.route"));

var _post = _interopRequireDefault(require("./post.route"));

var _follow = _interopRequireDefault(require("./follow.route"));

var _notification = _interopRequireDefault(require("./notification.route"));

var _chat = _interopRequireDefault(require("./chat.route"));

var router = _express["default"].Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.use('/users', _user["default"]);
  router.use('/business', _business["default"]);
  router.use('/post', _post["default"]);
  router.use('/follow', _follow["default"]);
  router.use('/notification', _notification["default"]);
  router.use('/chat', _chat["default"]);
  router.get('/serverTest', function (req, res) {
    console.log("hi server started");
    return res.json({
      message: "server started jasmeet"
    });
  });
  return router;
};

var _default = routes;
exports["default"] = _default;