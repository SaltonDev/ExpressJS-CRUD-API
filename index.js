const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const port = process.env.PORT || 8000;
const db =process.env.DB;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//routes
app.use("/api/products",productRoute)

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});


//mongoose connection
mongoose
  .connect(db)
  .then(() => {
    console.log("connected");
  })

  .catch(() => {
    console.log("connection failed");
  });
