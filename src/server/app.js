const express = require("express");
const app = express();
const logger = require("./utilities/logger");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require("./api/index");
const auth = require("./api/auth");
const farmer = require("./api/farmer");
const adoption = require("./api/adoption");

app.use(require("morgan")("combined", { stream: logger.stream }));
app.use(express.static("public"));

// Routes
app.use("/", route);
app.use("/auth", auth);
app.use("/farmer", farmer);
app.use("/adoption", adoption);

// in development we are using a self signed certificate for SSL communication.
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

async function startServer() {
  app.listen(4000, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Server running on port 4000!");
  });
}

// Run the async function to start our server
startServer();
