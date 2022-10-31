/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const mongoose = require("mongoose"); //any
const Schema = mongoose.Schema; //any
const processSchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
    ref : {        
        type : String,
        trim : true,
    }
});
const Process = mongoose.model("Process", processSchema); //any

exports.processSchema = processSchema;
exports.Process = Process;