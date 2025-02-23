const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const activityRoutes = require("./routes/activityRoutes");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/activity", activityRoutes);

app.listen(PORT, () => {
  console.log("Express running in port" + PORT);
});
