const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  res.status(200).send({
    connect: "ok",
    message: "success",
  });
});

module.exports = router;
