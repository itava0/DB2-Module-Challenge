const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("car")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to get accounts from database" });
    });
});

router.get("/:id", (req, res) => {
  db.select("*")
    .from("car")
    .where("id", "=", req.params.id)
    .first()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to get account from database" });
    });
});

router.post("/", (req, res) => {
  db.insert(req.body, "id")
    .into("car")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to insert accounts" });
    });
});

module.exports = router;
