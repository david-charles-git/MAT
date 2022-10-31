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

//Property File Type Schema
// const propertyFileTypeSchema = new Schema({ //any
//     name : {
//         type : String,
//         trim : true,
//         unique : true,
//         required : true
//     },
//     value : {
//         type : String,
//         trim : true,
//         unique : true,
//         required : true
//     },
// });

//Property File Schema
// const propertyFileSchema = new Schema({ //any
//     name : {
//         type : String,
//         trim : true,
//         required : true,
//         unique : true
//     },
//     source : {
//         type : String,
//         trim : true,
//         required : true,
//         unique : true
//     }
// });

//Property Data Groups Schema
// const propertyDataGroupsSchema = new Schema({ //any

// });

//Property Value Schema 
const propertyValueSchema = new Schema({ //any
    name : {
        type  : String,
        trim : true
    },
    value : {
        type : Schema.Types.Mixed
    },
    description : {
        type : String,
        trim : true
    },
    link : {
        type : String
    },
});

//Property Unit Schema 
const propertyUnitSchema = new Schema({ //any
    name : {
        type  : String,
        trim : true
    },
    value : {
        type : Schema.Types.Mixed
    },
    description : {
        type : String,
        trim : true
    },
    link : {
        type : String
    },
});

//Property Scale Schema 
const propertyScaleSchema = new Schema({ //any
    name : {
        type  : String,
        trim : true
    },
    value : {
        type : Schema.Types.Mixed
    },
    description : {
        type : String,
        trim : true
    },
    link : {
        type : String
    },
});

//Property Item Schema
const propertyItemSchema = new Schema({ //any
    isRange : {
        type : Boolean
    },
    minValue : {
        type : Number
    },
    maxValue : {
        type : Number
    },
    deviation : {
        type : Number
    },
    standardFormIndex : {
        type : Number
    },
    value : {
        type : Schema.Types.Mixed
    },
    unit : {
        type : Schema.Types.Mixed
    },
    scale : {
        type : Schema.Types.Mixed
    },
});

//Property Schema
const propertySchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
    value : {
        type : String,
        trim : true,
    },
    description : {
        type : String,
        trim : true
    },
    type : {
        type : String,
        trim : true
    },
    allowMultipleItems : {
        type : Boolean
    },
    options : [propertyValueSchema],
    units : [propertyUnitSchema],
    scales : [propertyScaleSchema],
    items : [propertyItemSchema]
});

//Property Groups Schema
const physicalPropertiesSchema = new Schema({ //any
    name : {
        type : String,
        trim : true,
    },
    value : {
        type : String,
        trim : true,
    },
    description : {
        type : String,
        trim : true
    },
    properties : [propertySchema]
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
        // ingredients : ingredientsSchema,
        // method : methodSchema,
        physicalProperties : physicalPropertiesSchema,
        // gallery : gallerySchema
    },
    {
        timestamps : true
    }
);
const Material = mongoose.model("Material", materialSchema); //any

module.exports = Material;