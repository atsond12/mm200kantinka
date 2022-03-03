const express = require('express');
const router = express.Router();
const database = require("../modules/db");
const db = new database();


/* GET users listing. */
router.get('/', function(req, res, next) {
  const name = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const user = db.addUser(name, email, password);
  res.status(200).send(JSON.stringify(user));
});


router.post("/", function (req, res, next) {
  const name = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const user = db.addUser(name, email, password);
  res.status(200).send(JSON.stringify(user));
});


router.post("/login", function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const user = db.findUser(email, password);
  if (user) {
    res.status(200).send(
        JSON.stringify({
          id: user.id,
          name: user.name,
        })
    );
  } else {
    res.status(404).end();
  }
});

router.put("/:id", function (req, res, next) {
  const userId = req.body.userId;
  const name = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  res.status(200).end();
});

router.delete("/:id", function (req, res, next) {
  const userId = req.params.userId;
  const name = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  res.status(200).end();
});

module.exports = router;
