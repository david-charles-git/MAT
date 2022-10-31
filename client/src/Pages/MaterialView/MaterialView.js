/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useSearchParams  } from "react-router-dom";
import axios from "axios";
import './MaterialView.scss';
import { useEffect, useState } from "react";

//exports
export default function MaterialView(props) {
	//properties	
	const userName = props.pageData.userName; //string

	//states
    var [searchParams, setSearchParams] = useSearchParams();
	var [materialName, setmaterialName] = useState(""); //sting
    var [materialRef, setMaterialRef] = useState(""); //string
	var [materialForkedFromRef, setMaterialForkedFromRef] = useState(""); //string
	var [materialCreatorUserName, setMaterialCreatorUserName] = useState(""); //string
	var [materialPublished, setMaterialPublished] = useState(false); //bool 
	var [materialCreationDate, setMaterialCreationDate] = useState(""); //string
	var [materialUpdetedDate, setMaterialUpdetedDate] = useState(""); //string
	var [creatorFirstName, setCreatorFirstName] = useState(""); //string
	var [creatorLastName, setCreatorLastName] = useState(""); //string

	var [materialAuthors, setMaterialAuthors] = useState([]) //Array<string>
	var [materialDescription, setMaterialDescription] = useState(""); //string
	var [materialCoverImageSrc, setMaterialCoverImageSrc] = useState(""); //string

	//variables
    const materialSearchRef = searchParams.get("materialRef");

	//Effects
		//set material data
		useEffect(() => {
			axios.get("http://localhost:5000/materials/findByRef/" + materialSearchRef)
				.then((res) => {
					const resData = res.data[0]; //obj
					
					if (resData) {
						setmaterialName(resData.name);
						setMaterialRef(resData.ref);
						setMaterialForkedFromRef(resData.forkedFromRef);
						setMaterialCreatorUserName(resData.creatorUserName);
						setMaterialPublished(resData.published);
						setMaterialCreationDate(resData.createdAt);
						setMaterialUpdetedDate(resData.updatedAt);

						setMaterialCoverImageSrc(resData.coverImage.source);
						setMaterialDescription(resData.details.description);
						setMaterialAuthors(resData.details.authors);
					}
				});

		}, [materialSearchRef]);
		//set user data
		useEffect(() => {
			if (materialCreatorUserName) {
				axios.get("http://localhost:5000/users/findByUserName/" + materialCreatorUserName)
					.then((res) => {
						const resData = res.data[0]; //obj

						setCreatorFirstName(resData.firstName);
						setCreatorLastName(resData.lastName)

					});
			}
		}, [materialCreatorUserName]);

	return (
		<div className="MaterialView"> 
            <div className="inner">
                <div className="infoContainer">
					<div className="inner">
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
					</div>
				</div>
            </div>		
		</div>
	);
}
