// import express
const express = require("express");

// import db for sync purposes
const db = require("./db/db");

// assign web server app constant
const app = express();

// import userRouter for use in web server
const userRouter = require("./routes/user");

// middleware. ALWAYS PLACE IN MIDDLEWARE FOLDER!!
function middle(req, res, next) {
	try {
		if (req.body.name) {
			req.body.name = req.body.name.toUpperCase();
		}
		next();
	} catch (error) {
		// two ways of handling the error:
		// next() allows error handling in Express app, res.send(error) affords error handling in the client
		// next(error); // pass the error along the chain of functions/controllers on the endpoint
		res.status(404).send(error); // Stop progress on the endpoint and send an error from this location
	}
}

function passLength(req, res, next) {
	try {
		if (req.body.password && req.body.password.length < 8) {
			throw new Error("Password not long enough");
		}
		next();
	} catch (error) {
		res.status(500).send(error);
	}
}

// allow web server to pass json
app.use(express.json()); //express.json() returns a function, that's why you need the parentheses

// adding middleware to all endpoints
// app.use(middle);

// .use is self explanatory - tell's 2nd param to use the first param
app.use("/user", passLength, userRouter);

// endpoint to sync db
app.get("/sync", async (req, res) => {
	await db.sync({ force: true });
	res.sendStatus(200);
});

// listen on port
app.listen(5001, async () => {
	await db.sync({ force: true });
	console.log(
		"Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you"
	);
});
