import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.routes.js";
import blogRoute from "./routes/blog.routes.js"
import commentRoute from "./routes/comment.routes.js"
import adminRoute from  "./routes/admin.routes.js"
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS middleware sabse pehle lagao
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser())
// ✅ Routes ko CORS ke baad define karo
app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);
 app.use("/api/v1/comment", commentRoute)
app.listen(PORT, () => {   console.log(process.env.MONGODB_URL)
  connectDB();
  console.log(`SERVER LISTEN AT PORT ${PORT}`);
});
