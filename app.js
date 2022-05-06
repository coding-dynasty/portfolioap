const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = `mongodb+srv://alieljerrari:HiVFzNG7iMXVYWa7@cluster0.inokl.mongodb.net/portfolioDB?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  autoIndex: false,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4,
};

mongoose
  .connect(MONGO_URL, options)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(cors());

mongoose.connection.on("error", (err) => {
  console.error(err);
});

mongoose.connection.once("open", () => {
  console.log("DB is open!");
});

app.use("/skills", require("./routes/skills/skills"));
app.use("/projects", require("./routes/projects/projects"));
app.use("/contact", require("./routes/contact/contact"));

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
