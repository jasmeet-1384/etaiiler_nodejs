"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var followSchema = new _mongoose.Schema({
  followId: {
    type: Mongoose.Types.ObjectId
  },
  user_id: {
    type: Mongoose.Types.ObjectId
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Follow', followSchema);

exports["default"] = _default;