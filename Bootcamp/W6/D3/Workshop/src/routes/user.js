// 2 most common ways of making a router

// 1. Object destructured import
const { Router } = require("express");
const userRouter = Router();

// 2. Immediately invoke an imported function
// const userRouter = require('express').Router();

// import user model for manipulation
const User = require("../models/User");

// add GET route to router
userRouter.get("/health", (req, res) => {
	res.sendStatus(200);
});

userRouter.post("/", async (req, res) => {
	try {
		const user = await User.create(req.body);
		// send and sendStatus will end controller - code within same block after them will not run unless chained as below
		res.status(200).send({ user });
	} catch (error) {
		// .status is for editing the status code for the error
		res.status(500).send(error);
	}
});

module.exports = userRouter;
