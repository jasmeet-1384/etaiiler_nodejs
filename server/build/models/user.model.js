"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  dateOfBirth: {
    type: String
  },
  bio: {
    type: String
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  pincode: {
    type: Number
  },
  gender: {
    type: String
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  fcmToken: {
    type: String,
    "default": ""
  },
  os: {
    type: String,
    "default": ""
  },
  role: {
    type: String
  },
  image: {
    type: String
  },
  followers: [{
    type: Mongoose.Types.ObjectId
  }],
  following: [{
    type: Mongoose.Types.ObjectId
  }],
  gpsAddress: {
    type: Mongoose.Types.ObjectId
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('User', userSchema); //User table name


exports["default"] = _default;