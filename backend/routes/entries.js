const router = require("express").Router();

const Entry = require("../models/Entry");

// Get all entries
router.get("/", (req, res) => {
  Entry.find((err, entries) => {
    if (err) console.log(err);
    res.status(200).send(entries);
  });
});

router.get("/:id", (req, res) => {
  Entry.findById(req.params.id, (err, entries) => {
    if (err) console.log(err);
    res.status(200).send(entries);
  });
});



router.post("/", (req, res) => { {
    const newEntry = new Entry({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    });

    newEntry.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
  }

});

router.put("/:id", (req, res) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err) res.status(200).send({ msg: "Error " + err });
    entry.firstName = req.body.firstName;
    entry.lastName = req.body.lastName;
    entry.number = req.body.number;
    entry.save();
    res.status(400).send(entry);
  });
});

module.exports = router;