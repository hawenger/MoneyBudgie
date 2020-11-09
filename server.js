const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/budgetDB";
const db = mongoose.connection;

const compression = require("compression");



const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});