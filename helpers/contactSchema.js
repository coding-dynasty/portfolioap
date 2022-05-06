const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  message: {
    type: String,
    require: true,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
