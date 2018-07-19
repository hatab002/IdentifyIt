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

app.use(index); 


io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => console.log("User disconnected"));
  
}); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 
app.use(routes);

// mongoose.Promise = global.Promise
// let MONGO_URL
// 	mongoose.connect("mongodb://heroku_362284tg:vtakfrfl8o5qng8j4js1pgbu7e@ds141661.mlab.com:41661/heroku_362284tg"); // local mongo url
// 	var dbConnection = mongoose.connection

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/witt"); 


 
server.listen(PORT, function() {
  console.log(`API server listening on PORT ${PORT}!`);
});
  