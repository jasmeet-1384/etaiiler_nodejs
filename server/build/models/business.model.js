"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var businessSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
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
  addressLine1: {
    type: String
  },
  addressLine2: {
    type: String
  },
  pincode: {
    type: Number
  },
  productCategory: {
    type: String
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  natureOfBusiness: {
    type: String
  },
  website: {
    type: String
  },
  role: {
    type: String
  },
  fcmToken: {
    type: String
  },
  os: {
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

var _default = (0, _mongoose.model)('Business', businessSchema); //User table name


exports["default"] = _default;