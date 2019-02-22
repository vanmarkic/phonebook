const mongoose = require("mongoose");

const EntriesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
});

module.exports = Entry = mongoose.model("entries", EntriesSchema);
