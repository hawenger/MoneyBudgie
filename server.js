const express = require("express");
const logger = require("morgan");
const compression = require("compression");

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/budgetDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const PORT = 3300;

// routes
app.use(require("./routes/api.js"));

app.listen(process.env.PORT || 3300);