/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

export const opticalPropertiesDataStructure = { //obj
    name : "Optical Properties",
    value : "opticalProperties",
    description : "",
    properties : [
        {
            name : "Opacity",
            value : "opacity",
            description : "a description",
            type : "select",
            allowMultipleItems : false,
            options : [
                {
                    name : "Opaque",
                    value : "opaque",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Translucent",
                    value : "translucent",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Transparent",
                    value : "transparent",
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
                    value : "opaque",
                    unit : "",
                    scale : ""
                }
            ]
        },
        {
            name : "Tempertaure During Test",
            value : "temperatureDuringTest",
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
            name : "pH",
            value : "pH",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "pH",
                    value : "pH",
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
                    unit : "pH",
                    scale : ""
                }
            ]
        },
    ]
};