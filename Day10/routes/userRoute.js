const express = require("express")
const { getUser, addUser, updateUser, deleteUser } = require("../controllers/userControllers.js")

const userRouter = express.Router();

userRouter.route('/')
    .get(getUser)
    .post(addUser)
    .delete(deleteUser)
    .put(updateUser)

module.exports = userRouter
