"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var conversationSchema = new _mongoose.Schema({
  users: [Mongoose.Types.ObjectId],
  recentMessage: String,
  read: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Conversation', conversationSchema); //User table name


exports["default"] = _default;