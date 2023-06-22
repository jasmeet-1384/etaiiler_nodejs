"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = require("firebase-admin");

var serviceAccount = require("../../src/secure/etaiiler-firebase-adminsdk-w2lwv-db3f406d29.json");

var notifier = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var notificationTypeFunction = function notificationTypeFunction(name, notificationType) {
  var notificationData = {
    like: {
      title: "Your post has been liked by " + name,
      body: "Hey!" + name + " has liked your post"
    },
    follow: {
      title: name + " started following you",
      body: "Hey!" + name + " started following you"
    },
    comment: {
      title: name + " commented on your post",
      body: "Hey!" + name + " commented on your post"
    },
    tag: {
      title: name + " tagged you",
      body: "Hey!" + name + " tagged you in a post"
    },
    share: {
      title: name + " shared your post",
      body: "Hey!" + name + " shared your post "
    }
  };
  return notificationData[notificationType];
};

var notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};

var fetchPayload = function fetchPayload(token, typeOfNotification, name) {
  var updated_token = token;
  var message = notificationTypeFunction(name, typeOfNotification);
  var payload = {
    notification: message,
    // apns: {
    //     headers: {
    //         "apns-priority": "5"
    //     },
    //     payload: {
    //         aps: {
    //             category: "CJN"
    //         }
    //     }
    // },
    token: updated_token
  };
  return payload;
};

var sendNotification = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(registrationToken, notificationType, name) {
    var messagePayload;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("sending notification => ", registrationToken, notificationType);
            messagePayload = fetchPayload(registrationToken, notificationType, name);
            console.log("Message payload => ", JSON.stringify(messagePayload));
            notifier.messaging().send(messagePayload).then(function (response) {
              console.log("Successfully sent message:", response);
            })["catch"](function (error) {
              console.log("Error sending message:", error);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendNotification(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  notify: sendNotification
};