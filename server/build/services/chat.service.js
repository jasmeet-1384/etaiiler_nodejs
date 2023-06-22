"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParticularConversationId = exports.getMyMessages = exports.getMyConversation = exports.addConversation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _business = _interopRequireDefault(require("../models/business.model"));

var _conversation = _interopRequireDefault(require("../models/conversation.model"));

var _messages = _interopRequireDefault(require("../models/messages.model"));

var _socket = _interopRequireDefault(require("socket.io"));

var Mongoose = require('mongoose');

var addConversation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var conversationData, newConversation, conversationDetails, newMessage, _conversationData, _conversationDetails, _newMessage;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _conversation["default"].find({
              users: {
                $all: [req.from, req.to]
              }
            });

          case 2:
            conversationData = _context.sent;

            if (conversationData.length) {
              _context.next = 14;
              break;
            }

            newConversation = new _conversation["default"]({
              users: [req.from, req.to],
              recentMessage: req.text,
              read: false
            });
            _context.next = 7;
            return newConversation.save();

          case 7:
            conversationDetails = _context.sent;
            newMessage = new _messages["default"]({
              conversation_id: newConversation._id,
              text: req.text,
              to: req.to,
              from: req.from,
              read: [req.from]
            });
            _context.next = 11;
            return newMessage.save();

          case 11:
            return _context.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: conversationDetails
            });

          case 14:
            _context.next = 16;
            return _conversation["default"].updateOne({
              users: {
                $all: [req.from, req.to]
              }
            }, {
              $set: {
                recentMessage: req.text,
                read: false
              }
            });

          case 16:
            _conversationData = _context.sent;
            _context.next = 19;
            return _conversation["default"].findOne({
              users: {
                $all: [req.from, req.to]
              }
            });

          case 19:
            _conversationDetails = _context.sent;
            _newMessage = new _messages["default"]({
              conversation_id: _conversationDetails._id,
              text: req.text,
              to: req.to,
              from: req.from,
              read: [req.from]
            });
            _context.next = 23;
            return _newMessage.save();

          case 23:
            return _context.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: _conversationData
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addConversation(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addConversation = addConversation;

var getMyConversation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var conversationsUser, conversationsBusiness, j, i, _conversationsBusines, data, index, element, messages;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _conversation["default"].find({
              users: {
                $in: [req.from]
              }
            }).populate('users', null, 'User').sort({
              _id: -1
            }).exec();

          case 2:
            conversationsUser = _context2.sent;
            _context2.next = 5;
            return _conversation["default"].find({
              users: {
                $in: [req.from]
              }
            }).populate('users', null, 'Business').sort({
              _id: -1
            }).exec();

          case 5:
            conversationsBusiness = _context2.sent;

            for (j = 0; j < conversationsUser.length; j++) {
              for (i = 0; i < 2; i++) {
                if ((_conversationsBusines = conversationsBusiness[j].users[i]) !== null && _conversationsBusines !== void 0 && _conversationsBusines._id) {
                  conversationsUser[j].users.push(conversationsBusiness[j].users[i]);
                }
              }
            } //let conversations = await ConversationModel.find()


            data = [];
            index = 0;

          case 9:
            if (!(index < conversationsUser.length)) {
              _context2.next = 19;
              break;
            }

            element = conversationsUser[index];
            _context2.next = 13;
            return _messages["default"].find({
              conversation_id: Mongoose.Types.ObjectId(element._id),
              read: {
                $nin: [req.from]
              }
            });

          case 13:
            messages = _context2.sent;
            console.log(JSON.stringify(messages), "1MESSAGES<<<<<<<<<<<<<");
            data.push({
              conversation_id: element._id,
              unreadLength: messages.length
            });

          case 16:
            index++;
            _context2.next = 9;
            break;

          case 19:
            console.log(conversationsUser, "USER<<<<<<<<<<<<<<<<<");
            console.log(data, "<<<<<<<<<<<<<<<<<<<<");
            return _context2.abrupt("return", {
              message: "fetched conversations successfully",
              code: 201,
              data: conversationsUser,
              unreadCounts: data
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMyConversation(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMyConversation = getMyConversation;

var getMyMessages = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var messages;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _messages["default"].find({
              conversation_id: Mongoose.Types.ObjectId(req.conversation_id)
            });

          case 2:
            messages = _context3.sent;
            _context3.next = 5;
            return _messages["default"].updateMany({
              conversation_id: Mongoose.Types.ObjectId(req.conversation_id),
              read: {
                "$nin": [req.userId]
              }
            }, {
              $push: {
                read: req.userId
              }
            });

          case 5:
            return _context3.abrupt("return", {
              message: "fetched messages successfully",
              code: 201,
              data: messages
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMyMessages(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMyMessages = getMyMessages;

var getParticularConversationId = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var conversationData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _conversation["default"].find({
              users: {
                $all: [req.from, req.to]
              }
            });

          case 2:
            conversationData = _context4.sent;
            return _context4.abrupt("return", {
              message: "fetched particular conversation successfully",
              code: 201,
              data: conversationData
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getParticularConversationId(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getParticularConversationId = getParticularConversationId;