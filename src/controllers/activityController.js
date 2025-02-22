import { getAllActivityService } from "../services/activityService";

export const getAllActivity = async (req, res) => {
  try {
    const data = await getAllActivityService();
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
