const router = require("express").Router();
const Contact = require("../../helpers/contactSchema");

router.post("/", (req, res) => {
  const { name, email, message } = req.body.contact;
  if (name && email && message) {
    const newContact = new Contact({ name, email, message });
    newContact
      .save()
      .then((contact) => res.status(201).send(contact))
      .catch((err) => res.status(500).send(err));
  } else {
    res.status("403").send({ message: "please fill all the given fields!" });
  }
});

module.exports = router;
