const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const index = require("./routes/index");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);


const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




io.on("connection", (socket) => {
  socket.emit("message", `Welcome to IdentifyIt `)
  socket.broadcast.emit("new_comment", `New Comment: `)
  socket.on("disconnect", () => console.log("User disconnected"));
  
}); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.set('view engine', 'html');
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/witt"); 
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/witt";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


 
server.listen(PORT, function() {
  console.log(`API server listening on PORT ${PORT}!`);
});
  

module.exports = app;
