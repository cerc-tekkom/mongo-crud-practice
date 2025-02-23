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

module.exports = { getAllActivity };
