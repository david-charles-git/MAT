/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const MaterialPropertyItemObject = {
    ID : 0, //number
    isRange : false, //bool
    value : { //obj
        ID : 0, //number,
        name : "", //string,
        value : "" //string
    },
    minValue : 0, //number
    maxValue : 0, //number
    deviation : 0, //number
    standardFormIndex : 0, //number
    unit : { //obj
        ID : 0, //number,
        name : "", //string,
        value : "" //string
    },
    scale : { //obj
        ID : 0, //number,
        name : "", //string,
        value : "" //string
    },
    edits : [ //Array<MaterialPropertyItemEditsObject>
        //MaterialPropertyItemEditsObject 
    ],
}