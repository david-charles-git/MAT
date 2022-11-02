/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

export const chemicalPropertiesDataStructure = { //obj
    name : "Chemical Properties",
    value : "chemicalProperties",
    description : "",
    properties : [
        {
            name : "Ecotoxicity",
            value : "ecotoxicity",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "ppm",
                    value : "ppm",
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
                    unit : "ppm",
                    scale : ""
                }
            ]
        },
        {
            name : "Ecotoxicity - Tempertaure During Test",
            value : "ecotoxicityTemperatureDuringTest",
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
            name : "Ecotoxicity - Humidity During Test",
            value : "ecotoxicityHumidityDuringTest",
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
            name : "Ecotoxicity - Machine Used",
            value : "ecotoxicityMachineUsed",
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
            name : "Ecotoxicity - Standard Applied",
            value : "ecotoxicityStandardApplied",
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
            name : "Ecotoxicity - pH",
            value : "ecotoxicityPH",
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
        
        {
            name : "Swelling Ration",
            value : "swellingRation",
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
            name : "Swelling Ration - Tempertaure During Test",
            value : "swellingRationTemperatureDuringTest",
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
            name : "Swelling Ration - Humidity During Test",
            value : "swellingRationHumidityDuringTest",
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
            name : "Swelling Ration - Machine Used",
            value : "swellingRationMachineUsed",
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
            name : "Swelling Ration - Standard Applied",
            value : "swellingRationStandardApplied",
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
            name : "Swelling Ration - pH",
            value : "swellingRationPH",
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

        {
            name : "Flammability",
            value : "flammability",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "% vol",
                    value : "%vol",
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
                    unit : "%vol",
                    scale : ""
                }
            ]
        },
        {
            name : "Flammability - Tempertaure During Test",
            value : "flammabilityTemperatureDuringTest",
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
            name : "Flammability - Humidity During Test",
            value : "flammabilityHumidityDuringTest",
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
            name : "Flammability - Machine Used",
            value : "flammabilityMachineUsed",
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
            name : "Flammability - Standard Applied",
            value : "flammabilityStandardApplied",
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
            name : "Flammability - pH",
            value : "flammabilityPH",
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

        {
            name : "Resistivity to Conductivity",
            value : "resistivityToConductivity",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "Ohms",
                    value : "ohms",
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
                    unit : "ohms",
                    scale : ""
                }
            ]
        },
        {
            name : "Resistivity to Conductivity - Tempertaure During Test",
            value : "resistivityToConductivityTemperatureDuringTest",
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
            name : "Resistivity to Conductivity - Humidity During Test",
            value : "resistivityToConductivityHumidityDuringTest",
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
            name : "Resistivity to Conductivity - Machine Used",
            value : "resistivityToConductivityMachineUsed",
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
            name : "Resistivity to Conductivity - Standard Applied",
            value : "resistivityToConductivityStandardApplied",
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
            name : "Resistivity to Conductivity - pH",
            value : "resistivityToConductivityPH",
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