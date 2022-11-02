/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { coverImageDataStructure } from "./coverImage";
import { detailsDataStructure } from "./details";
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

export const materialDataStructure = { //obj
    name : "",
    ref : "",
    forkedFromRef : "",
    creatorUserName : "",
    published : false,

    coverImage : coverImageDataStructure,
    details : detailsDataStructure,
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