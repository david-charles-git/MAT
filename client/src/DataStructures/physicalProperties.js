/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/
 
export const physicalPropertiesDataStructure = { //obj
    name : "Physical Properties",
    value : "physicalProperties",
    description : "",
    properties : [
        {
            name : "Color",
            value : "color",
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
            name : "Texture",
            value : "texture",
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
            name : "Odour",
            value : "odour",
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
            name : "Density",
            value : "Density",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
              {
                    name : "g/cm3",
                    value : "g/cm3",
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
                    unit : "g/cm3",
                    scale : ""
                }
            ]
          },
          {
            name : "Size",
            value : "size",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "cm",
                    value : "cm",
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
                    unit : "cm",
                    scale : ""
                }
            ]
          },
          {
            name : "Thickness",
            value : "thickness",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "cm",
                    value : "cm",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "mm",
                    value : "mm",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "um",
                    value : "um",
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
                    unit : "cm",
                    scale : ""
                }
            ]
          },
          {
            name : "Cross Section",
            value : "crossSection",
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
            name : "Length",
            value : "length",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "cm",
                    value : "cm",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "mm",
                    value : "mm",
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
                    unit : "cm",
                    scale : ""
                }
            ]
          },
          {
            name : "Crystalinity",
            value : "crystalinity",
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
            name : "Viscosity",
            value : "viscosity",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "MPa",
                    value : "MPa",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Pa.s",
                    value : "Pa.s",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "mPa.s",
                    value : "mPa.s",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "cP",
                    value : "cP",
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
                    unit : "MPa",
                    scale : ""
                }
            ]
          },
          {
            name : "Boiling Point",
            value : "boilingPoint",
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
                    unit : "degC",
                    scale : ""
                }
            ]
          },
          {
            name : "Melting Point",
            value : "meltingPoint",
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
                    unit : "degC",
                    scale : ""
                }
            ]
          },
          {
            name : "Water Solubility",
            value : "waterSolubility",
            description :" a description",
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
            name : "Moisture Content",
            value : "moistureContent",
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
            name : "Gel Content",
            value : "gelContent",
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
            name : "Gel Point",
            value : "gelPoint",
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
            name : "Rockwell Hardness Test",
            value : "rockwellHardnessTest",
            description : "a description",
            type : "number",
            allowMultipleItems : false,
            options : [],
            units : [
                {
                    name : "HR",
                    value : "HR",
                    description : "description",
                    link : "a link"
                }
            ],
            scales : [
                {
                    name : "A",
                    value : "A",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "B",
                    value : "B",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "C",
                    value : "C",
                    description : "description",
                    link : "a link"	
                },
                {
                    name : "D",
                    value : "D",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "E",
                    value : "E",
                    description : "description",
                    link : "a link"	
                },
                {
                    name : "F",
                    value : "F",
                    description : "description",
                    link : "a link	"
                },
                {
                    name : "G",
                    value : "G",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "K",
                    value : "K",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "L",
                    value : "L",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "M",
                    value : "M",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "P",
                    value : "P",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "R",
                    value : "R",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "S",
                    value : "S",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "Y",
                    value : "Y",
                    description : "description",
                    link : "a link"
                },
                {
                    name : "V",
                    value : "V",
                    description : "description",
                    link : "a link"
                }
            ],
            items : [
                {
                    isRange : false,
                    minValue : 0,
                    maxValue : 0,
                    deviation : 0,
                    standardFormIndex : 0,
                    value : "",
                    unit : "HR",
                    scale : "A"
                }
            ]
          }
    ]
};