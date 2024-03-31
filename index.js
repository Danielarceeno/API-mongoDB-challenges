import express from "express";
import connectDatabase from "./scr/database/db.js";
import userRoute from "./scr/routes/user.route.js";

const app = express();
const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server is running in port ${port}`) );
