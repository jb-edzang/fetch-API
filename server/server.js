// creating the server: 

// 1. import "express" and "cors"
const express = require("express");
const cors = require("cors");

// 2.create an Express application
const app = express();
app.use(cors());
app.use(express.json());

// 3.create a GET route
app.get("/message", (req, res) =>{ // 2 arg
    res.json({message: "Hello from server !"});
});
//an endpoint '/message returns a JSON object with the message 'Hello from server!
// we are using 'app.get' to create a GET route with 2 arguments: 1) the path of the endpoint '/message; 2) the callback


// 4.start the server
app.listen(8000, () => { // 2 arg: port, collback
    console.log('Server is running on port 8000');
});