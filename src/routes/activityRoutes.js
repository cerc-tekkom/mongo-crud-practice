const express = require("express");
const activityController = require("../controllers/activityController");

const router = express.Router();

router.get("/", activityController.getAllActivity);
router.post("/", activityController.createActivity);
router.get("/:id", activityController.getDetailActivity);
router.put("/:id", activityController.updateActivity);
router.delete("/:id", activityController.deleteActivity);

module.exports = router;
