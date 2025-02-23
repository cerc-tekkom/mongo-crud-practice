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

const getDetailActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await activityService.getDetailActivityService(id);
    return res.status(200).json({
      message: "Detail activity retrieved successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve activities",
      error: error.message,
    });
  }
};

const updateActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const activityDataRequest = req.body;
    const data = await activityService.updateActivityService(
      activityDataRequest,
      id
    );
    return res.status(200).json({
      message: "Activity updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve activities",
      error: error.message,
    });
  }
};

const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await activityService.deleteActivityService(id);
    return res.status(200).json({
      message: "Activity deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve activities",
      error: error.message,
    });
  }
};

module.exports = {
  getAllActivity,
  createActivity,
  getDetailActivity,
  updateActivity,
  deleteActivity,
};
