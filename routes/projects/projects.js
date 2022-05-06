const router = require("express").Router();
const Project = require("../../helpers/projectSchema");

router.get("/", (req, res) => {
  Project.find()
    .then((projects) => res.status(200).send(projects))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
