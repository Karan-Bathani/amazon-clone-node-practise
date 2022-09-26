// IMPORT FORM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const database = require("./const");
const adminRouter = require("./routes/admin");

//IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");

// INIT
const app = express();
const PORT = 3000;
// The MongoDB databse link is saved in another file called const which is added in .gitignore file
// It can be retrived from the mongodb website from one's own database account.
const DB = database;
// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);

// CONNECTIONS
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at PORT: ${PORT}`);
});
