const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT | 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/authRoutes");
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload');
const ticketRoute = require("./Routes/ticketRoutes");
const roleRoute = require("./Routes/RoleRoutes");
const teamRoute = require("./Routes/TeamRoute");

//Middleware
app.use(express.json());
express.urlencoded({ extended: true });
dotenv.config();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use("/", authRoute);
app.use("/", ticketRoute);
app.use("/", roleRoute);
app.use("/", teamRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect("mongodb://localhost:27017/ticket-managment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
