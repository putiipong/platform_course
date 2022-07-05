const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const infoRoute = require("./routes/info.router");
const courseRoute = require("./routes/course.routes");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api", infoRoute);
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", courseRoute);

module.exports = app;
