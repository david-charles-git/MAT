/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { toolDataStrcuture } from "./tool"; 
import { processDataStrcuture } from "./process";

export const detailsDataStructure = { //obj
    description : "",
    authors : [ "" ],
    license : "",
    sources : [ { name : "", source : "" } ],
    difficulty : 0,
    prepTime : 0,
    tools : [ toolDataStrcuture ],
    processes : [ processDataStrcuture ],
};