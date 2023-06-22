"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var hashTagSchema = new _mongoose.Schema({
  postId: {
    type: Mongoose.Types.ObjectId
  },
  hashTag: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('hashTag', hashTagSchema);

exports["default"] = _default;