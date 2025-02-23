const activityService = require("../services/activityService");

const getAllActivity = async (req, res) => {
  try {
    const data = await activityService.getAllActivityService();
    return res.status(200).json({
      message: "Activity retrieved successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve activities",
      error: error.message,
    });
  }
};

const createActivity = async (req, res) => {
  try {
    const activityDataRequest = req.body;
    const data = await activityService.createActivityService(
      activityDataRequest
    );
    return res.status(201).json({
      message: "Activity created successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve activities",
      error: error.message,
    });
  }
};

module.exports = { getAllActivity, createActivity };
