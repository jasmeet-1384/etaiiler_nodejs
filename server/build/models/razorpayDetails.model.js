"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var razorpaydetailsSchema = new _mongoose.Schema({
  razorpay_payment_id: {
    type: String
  },
  razorpay_order_id: {
    type: String
  },
  razorpay_signature: {
    type: String
  },
  amount: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Razorpaydetails', razorpaydetailsSchema);

exports["default"] = _default;