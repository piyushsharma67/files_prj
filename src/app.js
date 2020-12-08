const express = require("express");
const cors = require("cors");



const formRoute = require('./routes/formRoute')

//Connection to db setup
require("./db/connection");

// Importing environment configurations
require("dotenv").config();


const app = express();
const port = process.env.PORT; //check the existence of .env file, values could be found there.

app.use(express.json()); //To recieve json object in the request payload.
app.use(cors()); // To enable access for cross-origin-request.

app.get('/health',(request,response)=>{
    return response.sendStatus(200);
});

app.use('/form',formRoute);



// Server connection setup
app.listen(port, () => console.log(`Server listening on port ${port}`));
