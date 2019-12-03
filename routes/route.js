const express = require("express");
const router = express.Router();
const Villa = require("../models/villas");

//retriving
router.get("/villas", (req, res, next) => {
  //res.send("getting constact");
  Villa.find(function(err, villas) {
    res.json(villas);
  });
});

//adding
router.post("/villa", (req, res, next) => {
  let newVilla = new Villa({
    villa_name: req.body.villa_name,
    city_name: req.body.city_name,
    price: req.body.price
  });
  newVilla.save((err, villa) => {
    if (err) {
      res.json({ msg: "Failed to add Villa" });
    } else {
      res.json({ msg: "success" });
    }
  });
});

//deleting
router.delete("/villa/:id", (req, res, next) => {
  Villa.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
