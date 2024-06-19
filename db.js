const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://KBPV:ParvathyKVidhyaB@cluster0.aythefx.mongodb.net/car-rental-system",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("MongoDB Connection Successful");
  } catch (error) {
    console.error("MongoDB Connection Error: ", error.message);
  }
}

connectDB();

module.exports = mongoose;
