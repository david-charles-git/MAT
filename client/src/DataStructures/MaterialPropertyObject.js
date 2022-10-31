/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const MaterialPropertyObject = {
    name : "", //string
    description : "", //string
    created : "", //date (d M Y)
    edits : [ //Array<MaterialPropertyEditsObject>
        //MaterialPropertyEditsObject
    ],
    authors : [ //Array<MaterialPropertyAuthorObject>
        //MaterialPropertyAuthorObject
    ],
    contributers : [ //Array<MaterialPropertyAuthorObject>
        //MaterialPropertyAuthorObject
    ],

    propertyDataFiles : { //obj
        name : "", //string
        allowFiles : false, //bool
        fileTemplate : "", //file
        files : [ /* input file objects */ ], //Array<obj>
        fileTypes : [ //Array<MaterialPropertyValueObject>
            //MaterialPropertyValueObject
        ],
       generateFieldsFromCSV : false, //bool
    },

    propertyDataGroups : [ //Array<MaterialPropertyGroupObject>
        //MaterialPropertyGroupObject
    ],
};