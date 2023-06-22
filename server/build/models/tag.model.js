"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var tagSchema = new _mongoose.Schema({
  user_id: {
    type: Mongoose.Types.ObjectId
  },
  postId: {
    type: Mongoose.Types.ObjectId
  },
  role: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Tag', tagSchema);

exports["default"] = _default;