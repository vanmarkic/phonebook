const router = require("express").Router();

const Entry = require("../models/Entry");

// Get all entries
router.get("/", (req, res) => {
  Entry.find((err, contacts) => {
    if (err) console.log(err);
    res.status(200).send(contacts);
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