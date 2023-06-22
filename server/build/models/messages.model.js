"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var messagesSchema = new _mongoose.Schema({
  conversation_id: Mongoose.Types.ObjectId,
  text: String,
  to: Mongoose.Types.ObjectId,
  from: Mongoose.Types.ObjectId,
  read: [Mongoose.Types.ObjectId]
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Messages', messagesSchema); //User table name


exports["default"] = _default;