// import express
const express = require("express");

// import db for sync purposes
const db = require("./db/db");

// assign web server app constant
const app = express();

// import userRouter for use in web server
const userRouter = require("./routes/user");

// allow web server to pass json
app.use(express.json());

// .use is self explanatory - tell's 2nd param to use the first param
app.use("/user", userRouter);

// listen on port
app.listen(5001, async () => {
	await db.sync({ force: true });
	console.log(
		"Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you"
	);
});
