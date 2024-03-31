const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Connecting to database...");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.mwrnhk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() =>
      console.log("Connected to database")).catch((error) => console.log(error)
    );
};

module.exports = connectDatabase;
