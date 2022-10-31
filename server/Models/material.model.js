/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const mongoose = require("mongoose"); //any
const { toolSchema } = require("./tool.model"); //any
const { processSchema } = require("./process.model"); //any
const Schema = mongoose.Schema; //any

//Cover Image Schema
const coverImageSchema = new Schema({ //any
    source : {
        type : String,
        trim : true,
    }
});

//Details Sources Schema
const detailsSourceSchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
    source : {        
        type : String,
        trim : true,
    }
});

//Details Schema
const detailsSchema = new Schema({ //any
    description : {
        type : String,
        trim : true,
    },
    authors : [String],
    license : {
        type : String,
        trim : true,
    },
    sources : [detailsSourceSchema],
    difficulty : {
        type : Number,
    },
    prepTime : {
        type : Number
    },
    tools : [toolSchema],
    processes : [processSchema]
});

//Ingredients Schema
const ingredientsSchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
});

//Method Schema
const methodSchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
});

//Properties Schema
const propertiesSchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
});

//Gallery Schema
const gallerySchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
});

//create Material Model
const materialSchema = new Schema( //any
    { 
        name : {
            type : String,
            required : true,
            unique : true,
            trim : true,
            minlength : 3
        },
        ref : {
            type : String,
            required : true,
            unique : true,
            trim : true,
            minlength : 3
        },
        forkedFromRef : {
            type : String,
            trim : true,
        },
        creatorUserName : {
            type : String,
            required : true,
            unique : false,
            trim : true,
            minlength : 3
        },
        published : {
            type : Boolean,
            required : true,
        },

        coverImage : coverImageSchema,
        details : detailsSchema,
        ingredients : ingredientsSchema,
        method : methodSchema,
        properties : propertiesSchema,
        gallery : gallerySchema
    },
    {
        timestamps : true
    }
);
const Material = mongoose.model("Material", materialSchema); //any

module.exports = Material;