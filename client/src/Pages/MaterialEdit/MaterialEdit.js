/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";
import axios from "axios";
import './MaterialEdit.scss';

import { materialDataStructure } from "../../DataStructures/material";
import Grid from "../../Components/Grid/Grid";
import Carousel from "../../Components/Carousel/Carousel";
import Button from "../../Components/Button/Button";
import PropertiesArea from "../../Areas/PropertiesArea/PropertiesArea";
import DetailsArea from "../../Areas/DetailsArea/DetailsArea";
import CoverImageArea from "../../Areas/CoverImageArea/CoverImageArea";

//exports
export default function MaterialEdit(props) {
	//properties
	const userName = props.pageData.userName; //string

	//states
    var [searchParams, setSearchParams] = useSearchParams(); //any
	var [material, setMaterial] = useState({}); //obj
	var [materialName, setmaterialName] = useState(""); //sting
    var [materialRef, setMaterialRef] = useState(""); //string
	var [materialForkedFromRef, setMaterialForkedFromRef] = useState(""); //string
	var [materialCreatorUserName, setMaterialCreatorUserName] = useState(""); //string
	var [materialPublished, setMaterialPublished] = useState(false); //bool 
	var [materialCreationDate, setMaterialCreationDate] = useState(""); //string
	var [materialUpdetedDate, setMaterialUpdetedDate] = useState(""); //string
	var [creatorFirstName, setCreatorFirstName] = useState(""); //string
	var [creatorLastName, setCreatorLastName] = useState(""); //string
	var [materialCoverImage, setMaterialCoverImage] = useState({}); //obj
	var [materialDetails, setMaterialDetails] = useState({}); //obj
	var [materialIngredieants, setMaterialIngredients] = useState({}); //obj
	var [materialMethods, setMaterialMethods] = useState({}); //obj
	var [materialPhysicalProperties, setMaterialPhysicalProperties] = useState({}); //obj
	var [materialMechanicalTensionProperties, setMaterialMechanicalTensionProperties] = useState({}); //obj
	var [materialMechanicalCompressionProperties, setMaterialMechanicalCompressionProperties] = useState({}); //obj
	var [materialChemicalProperties, setMaterialChemicalProperties] = useState({}); //obj
	var [materialTermalProperties, setMaterialThermalProperties] = useState({}); //obj
	var [materialOpticalProperties, setMaterialOpticalProperties] = useState({}); //obj
	var [materialBarrierProperties, setMaterialBarrierProperties] = useState({}); //obj
	var [materialGallery, setMaterialGallery] = useState({}); //obj

	//functions
	const navigate = useNavigate();

	const handleSaveMaterial = () => {
		const postTo = "http://localhost:5000/materials/update/" + materialRef; //string
		var newMaterial = materialDataStructure; //obj

		newMaterial.name = materialName;
		newMaterial.ref = materialRef;
		newMaterial.forkedFromRef = materialForkedFromRef;
		newMaterial.creatorUserName = materialCreatorUserName;
		newMaterial.published = materialPublished;
		newMaterial.coverImage = materialCoverImage;
		newMaterial.details = materialDetails;
		newMaterial.ingredients = materialIngredieants;
		newMaterial.methods = materialMethods;
		newMaterial.physicalProperties = materialPhysicalProperties;

		newMaterial.gallery = materialGallery;

		axios.post(postTo, newMaterial)
			.then((res) => { console.log("Material saved"); });
	};
	const handlePublishMaterial = () => {
		const postTo = "http://localhost:5000/materials/update/" + materialRef; //string
		var newMaterial = materialDataStructure; //obj

		newMaterial.name = materialName;
		newMaterial.ref = materialRef;
		newMaterial.forkedFromRef = materialForkedFromRef;
		newMaterial.creatorUserName = materialCreatorUserName;
		newMaterial.published = materialPublished;
		newMaterial.coverImage = materialCoverImage;
		newMaterial.details = materialDetails;
		newMaterial.ingredients = materialIngredieants;
		newMaterial.methods = materialMethods;
		newMaterial.physicalProperties = materialPhysicalProperties;

		newMaterial.gallery = materialGallery;
		
		setMaterialPublished(true);

		axios.post(postTo, newMaterial)
			.then((res) => { console.log("Material Published"); });

		navigate("/");
	};
	const handleDeleteMaterial = () => {
		const postTo = "http://localhost:5000/materials/" + materialRef; //string

		axios.delete(postTo)
			.then((res) => { console.log("Material Deleted"); });

		navigate("/");
	};

	const handleCoverImageChange = (updatedCoverImage) => {
		if (Object.keys(updatedCoverImage).length > 0) {
			setMaterialCoverImage(updatedCoverImage);
		}
	};
	const handleDetailsChange = (updatedDetails) => {
		if (Object.keys(updatedDetails).length > 0) {
			setMaterialDetails(updatedDetails);
		}
	};
	const handlePhysicalPropertiesChange = (updatedPhysicalProperties) => {
		if (Object.keys(updatedPhysicalProperties).length > 0) {
			setMaterialPhysicalProperties(updatedPhysicalProperties);
		}
	};
	

	//variables
    const MaterialRef = searchParams.get("materialRef"); //string
	const materialEditClassName = materialPublished ? "MaterialEdit published" : "MaterialEdit"; //string

	//Effects
	//set material data
	useEffect(() => { 
		if (MaterialRef) {
			const getURL = "http://localhost:5000/materials/findByRef/" + MaterialRef; //string

			axios.get(getURL)
				.then((res) => {
					const resData = res.data[0]; //obj

					if (resData) {
						setMaterial(resData);
						setmaterialName(resData.name);
						setMaterialRef(resData.ref);
						setMaterialForkedFromRef(resData.forkedFromRef);
						setMaterialCreatorUserName(resData.creatorUserName);
						setMaterialPublished(resData.published);
						setMaterialCreationDate(resData.createdAt);
						setMaterialUpdetedDate(resData.updatedAt);

						setMaterialCoverImage(resData.coverImage);
						setMaterialDetails(resData.details);
						setMaterialPhysicalProperties(resData.physicalProperties);
					}
				});
		}
	}, [MaterialRef]);

	//set user data
	useEffect(() => {
		if (materialCreatorUserName) {
			const getURL = "http://localhost:5000/users/findByUserName/" + materialCreatorUserName; //string

			axios.get(getURL)
				.then((res) => {
					const resData = res.data[0]; //obj

					if (resData) {
						setCreatorFirstName(resData.firstName);
						setCreatorLastName(resData.lastName);
					}

				});
		}
	}, [materialCreatorUserName]);
	
	return (
		<div className={ materialEditClassName }> 
			<div className="inner">
				<Grid componentData={ { customClass : "functionalButtonsContainer", numberOfColumns : 3 } } >
					<Button componentData={ {
						class : "functionalButton",
						copy : "Save",
						type : "function",
						link : "",
						function : handleSaveMaterial
					} } />

					<Button componentData={ {
						class : "functionalButton",
						copy : "Publish",
						type : "function",
						link : "",
						function : handlePublishMaterial
					} } />

					<Button componentData={ {
						class : "functionalButton",
						copy : "Delete",
						type : "function",
						link : "",
						function : handleDeleteMaterial
					} } />
				</Grid>

				{
					Object.keys(materialCoverImage).length > 0 ? 
						<CoverImageArea componentData={{
							customClass : "",
							coverImage : materialCoverImage,
							updateCoverImage : handleCoverImageChange
						}} />
					:
						<></>
				}

				<Grid componentData={ { customClass : "infoContainer", numberOfColumns : 1 } } >
					<h4>{ materialName }</h4>

					<p>Created By: { creatorFirstName + " " + creatorLastName }</p>

					<p>Date Created: { materialCreationDate }</p>

					<p>Last Updated: { materialUpdetedDate }</p>

					<p>REF: { materialRef }</p>

					{
						materialForkedFromRef ? 
							<p>Forked From : { materialForkedFromRef }</p>
						:
							<></>
					}
				</Grid>

				{
					Object.keys(materialDetails).length > 0 ? 
						<DetailsArea componentData={{
							customClass : "",
							details : materialDetails,
							updateDetails : handleDetailsChange
						}} />
					:	
						<></>
				}
				
				<div className="ingredientsContainer">

				</div>

				<Grid componentData={ { customClass : "propertiesContainer", numberOfColumns : 1 } } >
					{
						Object.keys(materialPhysicalProperties).length > 0 ?
							<PropertiesArea componentData={{
								customClass : "physicalProperties",
								property : materialPhysicalProperties,
								updateProperty : handlePhysicalPropertiesChange
							}} />
						:
							<></>
					}
				</Grid>

				<div className="methodContainer">

				</div>

				<div className="imageGalleryContainer">
					<Carousel componentData={ { customClass : "", numberOfColumns : 4 } }>
						<div className="item" />
					</Carousel>
				</div>
			</div>		
		</div>
	)
}
