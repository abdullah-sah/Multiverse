const express = require("express"); //import express package

// app is the webserver. created from return value of express()
const app = express();
// const port = 5001;

// adding functionality to our web server, using the use method
// and passing a route that this functionality is available on
// express.static is serving the contents of the ./public folder
app.use("/test", express.static("public"));

// listen takes 1 necessary argument. second (optional) is a callback that runs once when successfully listening
// quite common to see port variable defined above and passed into listen()
// can use 'netstat' terminal command to check which ports are in use
// app.listen does not stop... Server must always be running!!!
app.listen(5001, () => {
	console.log("Listening on port 5001");
});
