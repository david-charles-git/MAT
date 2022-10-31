/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

require('dotenv').config();

const express = require('express'); //any
const cors = require('cors'); //any
const mongoose = require('mongoose'); //any
const app = express(); //any
const port = process.env.PORT || 5000; //number

//mongoose conntection setup
const uri = process.env.ATLAS_URI; //string
mongoose.connect(uri,
    {
        useNewUrlParser: true
    }
);

//mongoose establish connection
const connection = mongoose.connection; //any
connection.once('open', () => { console.log("mongoDB database connection established successfully"); });

//routes
const materialsRouter = require("./Routes/materials"); //any
const usersRouter = require("./Routes/users"); //any
const toolsRouter = require("./Routes/tools"); //any
const processessRouter = require("./Routes/processes"); //any

//create app
app.use(cors());
app.use(express.json());
app.use("/materials", materialsRouter);
app.use("/users", usersRouter);
app.use("/tools", toolsRouter);
app.use("/processes", processessRouter);

//start server on port
app.listen(port, () => {
    console.log(`server is running on port: ${ port }`);

});