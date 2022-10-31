/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const mongoose = require("mongoose"); //any
const Schema = mongoose.Schema; //any
const userSchema = new Schema( //any
    {
        userName : {
            type : String,
            required : true,
            unique : true,
            trim : true,
            minlength : 3
        },
        firstName : {
            type : String,
            required : true,
            unique : false,
            trim : true,
            minlength : 3
        },
        lastName : {
            type : String,
            required : true,
            unique : false,
            trim : true,
            minlength : 3
        },
    },
    {
        timestamps : true
    }
);
const User = mongoose.model("User", userSchema); //any

module.exports = User;