const mongoose = require("mongoose");
const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  progress: {
    type: Number,
    require: true,
  },
});

const Skill = mongoose.model("Skill", SkillSchema);
module.exports = Skill;
