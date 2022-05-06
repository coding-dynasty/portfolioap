const router = require("express").Router();
const Skill = require("../../helpers/skillSchema");

router.get("/", (req, res) => {
  Skill.find()
    .then((skills) => res.status(200).send(skills))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
