// import express
const express = require("express");

// create web server using express return value
const app = express();

// add a JSON parser to the web server
app.use(express.json());

// adding a POST route to the web server
app.post("/", (req, res) => {
	// POST is CREATE - POSTING information to my API
	console.log(req.body.name);
	// User.create(req.body) <--- example usage to create new user in a dummy User db
	res.sendStatus(200);
});

// adding a GET route to the web server
app.get("/:name", (req, res) => {
	// GET is READ - GETTING information from my API
	// GET cannot receive body
	console.log(req.params.name);
	res.sendStatus(200);
});

// adding a PATCH route to the web server
app.patch("/", (req, res) => {
	// PATCH is UPDATE - PATCHING part of an item in my API
});

// adding a PUT route to the web server
app.put("/", (req, res) => {
	// PUT is UPDATE - PUTTING something new in the place of something old
});
// adding a DELETE route to the web server
app.delete("/:id", (req, res) => {
	// DELETE is DELETE - DELETE information from my API
	// DELETE cannot receive body
	// User.destroyByPk(req.params.id) <--- example usage to destroy user in a dummy  User db
	res.sendStatus(200);
});

// listen on a port
app.listen(5001, () => {
	console.log(
		"Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you"
	);
});
