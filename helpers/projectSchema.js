const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },

  title: {
    type: String,
    require: true,
  },

  language: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  link: {
    type: String,
    require: true,
  },

  github: {
    type: String,
    require: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
