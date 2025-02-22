import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import activityRoutes from "./routes/activityRoutes";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/api/activity", activityRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log("Express running in port" + PORT);
});
