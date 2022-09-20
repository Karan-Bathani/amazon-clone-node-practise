const express = require("express");

const authRouter = express.Router();

authRouter.post("/api/signup",()=>{
    // GET THE DATA FROM THE CLIENT
    const {name, email, password} = req.body;
    // POST DATA IN THE DATABASE
    //RETURN THE DATA TO THE USER
});

module.exports = authRouter;