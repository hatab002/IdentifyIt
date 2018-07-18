const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

// mongoose.Promise = global.Promise
// let MONGO_URL
// 	mongoose.connect("mongodb://heroku_362284tg:vtakfrfl8o5qng8j4js1pgbu7e@ds141661.mlab.com:41661/heroku_362284tg"); // local mongo url
// 	var dbConnection = mongoose.connection

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/witt");

app.listen(PORT, function() {
  console.log(`API server listening on PORT ${PORT}!`);
});
