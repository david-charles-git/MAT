/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const mongoose = require("mongoose"); //any
const Schema = mongoose.Schema; //any
const toolSchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
    ref : {        
        type : String,
        trim : true,
    },
    description : {
        type : String,
        trim : true,
    },
    link : {
        type : String,
        trim : true,
    }
});
const Tool = mongoose.model("Tool", toolSchema); //any

exports.toolSchema = toolSchema;
exports.Tool = Tool;