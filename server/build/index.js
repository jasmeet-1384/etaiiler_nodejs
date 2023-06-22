"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _s = require("./services/s3.service");

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireWildcard(require("socket.io"));

var _routes = _interopRequireDefault(require("./routes"));

var _database = _interopRequireDefault(require("./config/database"));

var _error = require("./middlewares/error.middleware");

var _logger = _interopRequireWildcard(require("./config/logger"));

var _morgan = _interopRequireDefault(require("morgan"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var host = process.env.APP_HOST;
var port = process.env.APP_PORT;
var api_version = process.env.API_VERSION;

var server = _http["default"].createServer(app);

app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('combined', {
  stream: _logger.logStream
}));
(0, _database["default"])();
app.use("/", (0, _routes["default"])());
app.use(_error.appErrorHandler);
app.use(_error.genericErrorHandler);
app.use(_error.notFound); //socket connection

var io = (0, _socket["default"])(server);
io.on("connection", function (socket) {
  console.log("socket connected");
  socket.on("setup", function (userData) {
    console.log(userData, "<=== USER DATA");
    socket.join(userData);
    socket.emit("connected");
  });
  socket.on("join chat", function (room) {
    socket.join(room);
    console.log("user joined conversation", room);
  });
  socket.on("new message", function (newMessageReceived) {
    var userData = newMessageReceived;
    console.log(userData.to, "<============= new message receiveed");
    socket["in"](userData.to).emit("message received", newMessageReceived);
  });
});
server.listen(port, function () {
  _logger["default"].info("Server started at ".concat(host, ":").concat(port, "/"));
});
var _default = app;
exports["default"] = _default;