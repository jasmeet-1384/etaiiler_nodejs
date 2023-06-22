"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var addressSchema = new _mongoose.Schema({
  user_id: {
    type: String
  },
  role: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  },
  active: {
    type: String
  },
  addressLine1: {
    type: String
  },
  addressLine2: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Address', addressSchema); //User table name


exports["default"] = _default;