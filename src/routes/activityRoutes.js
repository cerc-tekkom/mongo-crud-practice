const express = require("express");
const activityController = require("../controllers/activityController");

const router = express.Router();

router.get("/", activityController.getAllActivity);
router.post("/", activityController.createActivity);

module.exports = router;
