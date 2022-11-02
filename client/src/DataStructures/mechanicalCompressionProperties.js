/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

export const mechanicalCompressionPropertiesDataStructure = { //obj
    name : "Mechanical Properties - Compression",
    value : "mechanicalCompressionProperties",
    description : "",
    properties : [
        {
            name : "Teperature During Test",
            value : "teperatureDuringTest",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "Deg C",
                    value : "degC",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Humidity During Test",
            value : "humidityDuringTest",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "RH",
                    value : "RH",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Machine Used",
            value : "machineUsed",
            description : "a description",
            type : "text",
            allowMultipleItems : false,
            options : [],
            units : [],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Standard Applied",
            value : "standardApplied",
            description : "a description",
            type : "select",
            allowMultipleItems : false,
            options : [
                {
                    name : "Standard One",
                    value : "s1",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Standard Two",
                    value : "s2",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Standard Three",
                    value : "s3",
                    description : "description",
                    link : "a link"
                },
            ],
            units : [],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "s1",
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Geometry of Testing Tool",
            value : "geometryOfTestingTool",
            description : "a description",
            type : "text",
            allowMultipleItems : false,
            options : [],
            units : [],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Geometry of Sample",
            value : "geometryOfSample",
            description : "a description",
            type : "select",
            allowMultipleItems : false,
            options : [
                {
                    name : "Dog Bone",
                    value : "dogBone",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Strip",
                    value : "strip",
                    description : "description",
                    link : "a link"
                }
            ],
            units : [],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "dogBone",
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Strain Rate",
            value : "strainRate",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "%",
                    value : "%",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "%",
                    scale : ""
                }
            ]
        },
        {
            name : "Was a Pre-Strain Done?",
            value : "wasPreStrainDone",
            description : "a description",
            type : "select",
            allowMultipleItems : false,
            options : [ 
                {
                    name : "False",
                    value : false,
                    description : "description",
                    link : "a link"
                },
                {
                    name : "True",
                    value : true,
                    description : "description",
                    link : "a link"
                }
            ],
            units : [],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : false,
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Load of the Testing Tool",
            value : "loadOfTheTestingTool",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "N",
                    value : "N",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "N",
                    scale : ""
                }
            ]
        },
        {
            name : "Displacement of the Sample",
            value : "displacementOfTheSample",
            description : "a description",
            type : "number",
            allowMultipleItems : true,
            options : [],
            units : [
                {
                    name : "m",
                    value : "m",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "m",
                    scale : ""
                }
            ]
        },
        {
            name : "Force Vs Displacement",
            value : "forceVsDisplacement",
            description : "a description",
            type : "number",
            allowMultipleItems : true,
            options : [],
            units : [
                {
                    name : "%",
                    value : "%",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "%",
                    scale : ""
                }
            ]
        },
        {
            name : "Force Vs Strain",
            value : "forceVsStrain",
            description : "a description",
            type : "number",
            allowMultipleItems : true,
            options : [],
            units : [
                {
                    name : "%",
                    value : "%",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "%",
                    scale : ""
                }
            ]
        },
    ]
};