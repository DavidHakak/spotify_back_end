const express = require('express');
const cors = require("cors");
const app = express();
const userRouter = require('./ROUTES/user.router')
const PORT = process.env.PORT || 3333;
const bcrypt = require("bcrypt");
//const middleware = require('./middleware')
app.use(cors());

//app.use("/user", middleware, userRouter);
app.use("/sign-up", (req, res) => {
    const { userName, password } = req.body
    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt)
    user = {
        userName,
        salt,
        hash
    }
    res.sendStatus(201)
})
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log("Connected to port 4000");
})
