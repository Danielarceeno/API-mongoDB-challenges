import express from "express";
import connectDatabase from "./scr/database/db.js";
import dotenv from "dotenv";

import userRoute from "./scr/routes/user.route.js";
import authRoute from "./scr/routes/auth.route.js";
import newsRoute from "./scr/routes/news.route.js"; 

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
app.listen(port, () => console.log(`Server is running in port ${port}`) );
