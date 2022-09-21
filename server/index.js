// IMPORT FORM PACKAGES
const express = require('express');
const mongoose = require("mongoose");

//IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://Karan:qwerty123@cluster0.oxrmvya.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);

// CONNECTIONS
mongoose.connect(DB)
    .then(() => {
        console.log(("Connection Successful!"));
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at PORT: ${PORT}`);
});