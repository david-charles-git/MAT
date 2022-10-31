/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const MaterialPropertyItemEditsObject = {
    ID : 0, //number
    date : "", //date (d M Y)
    name : "", //string
    reference : "", //string
    previousValue : { //obj
        isRange : false, //bool
        value : null, //any
        minValue : 0, //number 
        maxValue : 0, //number
        deviation : 0, //number
        standardFormIndex : 0, //number
        units : "", //string 
        scale : "", //string
    }
}