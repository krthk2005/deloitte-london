var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route = require("./routes/route");

//Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/villalist");

// Successful or un-successfull connection
mongoose.connection.on("connected", () => {
  console.log("connected to DB @ 27017");
});
mongoose.connection.on("error", err => {
  if (err) {
    console.log("Error in DB connection : " + err);
  }
});

const port = 3000;

//middleware for using different port/domains
app.use(cors());

//parser
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", route);

//To test server
app.get("/", (req, res) => {
  res.send("getvillas");
});

app.listen(port, () => {
  console.log("Server started at: " + port);
});
