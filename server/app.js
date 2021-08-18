require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const server = express();
const port = process.env.PORT || 3000;
require("./database/config")();

const activitiesRoute = require('./routes/activityRoute');
const registrationRoute = require('./routes/registerRoute');

server.use(logger("dev"));
server.use(cors());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: false,
  })
);

server.get("/", (req, res) => {
  res.send("Mockinsta");
});

server.use('/api', activitiesRoute);
server.use('/api/signin', registrationRoute);

server.all("*", (req, res) => {
  res.status(404).json({
    statusText: "Not Found",
    message: "You Have Trying Reaching A Route That Doesn't Exist",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
