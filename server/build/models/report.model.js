"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var reportSchema = new _mongoose.Schema({
  user_id: {
    type: Mongoose.Types.ObjectId
  },
  postId: {
    type: String
  },
  postedBy: {
    type: Mongoose.Types.ObjectId
  },
  remarks: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Report', reportSchema); //User table name


exports["default"] = _default;