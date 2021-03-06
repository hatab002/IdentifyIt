const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require("http");
const socketIo = require("socket.io");

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/witt"); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

app.use(routes);

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  socket.emit("message", `Welcome to IdentifyIt `)
  socket.broadcast.emit("new_comment", `Someone submitted a new comment! Why don't you check out some pics and do the same!`)
  socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(PORT, function() {
  console.log(`API server listening on PORT ${PORT}!`);
});
