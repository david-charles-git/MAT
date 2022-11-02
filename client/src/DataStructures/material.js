/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { toolDataStrcuture } from "./tool"; 
import { processDataStrcuture } from "./process";
import { ingredientsDataStructure } from "./ingredients";
import { methodsDataStructure } from "./methods";
import { physicalPropertiesDataStructure } from "./physicalProperties";
import { mechanicalTensionPropertiesDataStructure } from "./mechanicalTensionProperties";
import { mechanicalCompressionPropertiesDataStructure } from "./mechanicalCompressionProperties";
import { chemicalPropertiesDataStructure } from "./chemicalProperties";
import { thermalPropertiesDataStructure } from "./thermalProperties";
import { opticalPropertiesDataStructure } from "./opticalProperties";
import { barrierPropertiesDataStructure } from "./barrierProperties";
import { galleryDataStructure } from "./gallery";

export const materialCoverImageDataStructure = { //obj
    source : ""
};
export const materialDetailsDataStructure = { //obj
    description : "",
    authors : [ "" ],
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
    ingredients : ingredientsDataStructure,
    methods : methodsDataStructure,
    physicalProperties : physicalPropertiesDataStructure,
    mechanicalTensionProperties : mechanicalTensionPropertiesDataStructure,
    mechanicalCompressionProperties : mechanicalCompressionPropertiesDataStructure,
    chemicalProperties : chemicalPropertiesDataStructure,
    thermalProperties : thermalPropertiesDataStructure,
    opticalProperties : opticalPropertiesDataStructure,
    barrierProperties : barrierPropertiesDataStructure,
    gallery : galleryDataStructure
};