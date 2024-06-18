const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://KBPV:<password>@cluster0.aythefx.mongodb.net/car-rental-service",
    {useUnifiedTopology: true , useNewUrlParser: true}
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}
connectDB();

module.exports = mongoose;
