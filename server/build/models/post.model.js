"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Mongoose = require('mongoose');

var postSchema = new _mongoose.Schema({
  user_id: {
    type: Mongoose.Types.ObjectId
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  role: {
    type: String
  },
  likes: [{
    likedBy: Mongoose.Types.ObjectId,
    createdAt: {
      type: Date,
      "default": Date.now
    }
  }],
  comments: [{
    text: String,
    postedBy: Mongoose.Types.ObjectId,
    createdAt: {
      type: Date,
      "default": Date.now
    }
  }],
  tags: [{
    taggedPerson: Mongoose.Types.ObjectId
  }],
  share: [{
    sharedBy: Mongoose.Types.ObjectId
  }],
  postType: {
    type: String
  },
  promoFromhrs: {
    type: String
  },
  promoTohrs: {
    type: String
  },
  promoFromDate: {
    type: String
  },
  promoToDate: {
    type: String
  },
  promoOfferDetails: {
    type: String
  },
  promoLink: {
    type: String
  },
  promoTotalPayable: {
    type: String
  },
  homeScreen: {
    type: Boolean
  },
  range: {
    type: String
  },
  promoPlanState: {
    type: String
  },
  promoPlanTransactionId: {
    type: Mongoose.Types.ObjectId
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Post', postSchema); //Post table name


exports["default"] = _default;