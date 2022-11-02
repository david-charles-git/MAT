/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/
 
export const mechanicalTensionPropertiesDataStructure = { //obj
    name : "Mechanical Properties - Tension",
    value : "mechanicalTensionProperties",
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
            name : "Load Cell",
            value : "loadCell",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "mV / V",
                    value : "mV/V",
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
            name : "Tensile Strength - Ultimate",
            value : "tensileStrengthUltimate",
            description : "a description",
            type : "number",
            allowMultipleItems : true,
            options : [],
            units : [
                {
                    name : "Mpa",
                    value : "Mpa",
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
                    unit : "Mpa",
                    scale : ""
                }
            ]
        },
        {
            name : "Yield Strength",
            value : "yieldStrength",
            description : "a description",
            type : "number",
            allowMultipleItems : true,
            options : [],
            units : [
                {
                    name : "Mpa",
                    value : "Mpa",
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
                    unit : "Mpa",
                    scale : ""
                }
            ]
        },
        {
            name : "Youngs Modulus",
            value : "youngsModulus",
            description : "a description",
            type : "number",
            allowMultipleItems : true,
            options : [],
            units : [
                {
                    name : "Mpa",
                    value : "Mpa",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Gpa",
                    value : "Gpa",
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
                    unit : "Mpa",
                    scale : ""
                }
            ]
        },
        {
            name : "Elongation at Break",
            value : "elongationAtBreak",
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
            name : "Elongation at Yield",
            value : "elongationAtYield",
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