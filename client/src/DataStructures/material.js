/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { toolDataStrcuture } from "./tool";
import { processDataStrcuture } from "./process";
import { physicalPropertiesDataStructure } from "./physicalProperties";

export const materialCoverImageDataStructure = { //obj
    source : ""
};
export const materialDetailsDataStructure = { //obj
    description : "",
    authors : [],
    license : "",
    sources : [ { name : "", source : "" } ],
    difficulty : 0,
    prepTime : 0,
    tools : [ toolDataStrcuture ],
    processes : [ processDataStrcuture ],
};
export const materialDataStructure = { //obj
    name : "",
    ref : "",
    forkedFromRef : "",
    creatorUserName : "",
    published : false,

    coverImage : materialCoverImageDataStructure,
    details : materialDetailsDataStructure,
    physicalProperties : physicalPropertiesDataStructure
};