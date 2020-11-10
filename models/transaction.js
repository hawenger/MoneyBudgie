const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://hawenger:waffles@pinkwizard.nje1c.mongodb.net/budgetDB", { useNewUrlParser: true }, { useUnifiedTopology: true });

//const newSchema = new mongoose.Schema ({
//  name: String,
//  rating: Number,
//  review: String
//});
//const Fruit = mongoose.model("Fruit", newSchema);

const transactionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

//transaction.save();

module.exports = Transaction;
