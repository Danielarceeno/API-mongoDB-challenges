const express = require("express");
const connectDatabase = require("./scr/database/db");
const userRoute = require("./scr/routes/user.route");

const app = express();
const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server is running in port ${port}`) );
