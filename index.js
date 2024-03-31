const express = require("express");
const app = express();

const userRoute = require("./scr/routes/user.route")


const port = 3000;


app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server is running in port ${port}`) );
