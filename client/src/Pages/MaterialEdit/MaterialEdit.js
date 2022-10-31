/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";
import axios from "axios";
import './MaterialEdit.scss';
import Grid from "../../Components/Grid/Grid";
import Carousel from "../../Components/Carousel/Carousel";
import Button from "../../Components/Button/Button";
import OptionInput from "../../Components/OptionInput/OptionInput";

//exports
export default function MaterialEdit(props) {
	//properties
	const userName = props.pageData.userName; //string

	//states
    var [searchParams, setSearchParams] = useSearchParams();

	var [tools, setTools] = useState([]); //Array<obj>
	var [processes, setProcesses] = useState([]); //Array<obj>

	var [materialName, setmaterialName] = useState(""); //sting
    var [materialRef, setMaterialRef] = useState(""); //string
	var [materialForkedFromRef, setMaterialForkedFromRef] = useState(""); //string
	var [materialCreatorUserName, setMaterialCreatorUserName] = useState(""); //string
	var [materialPublished, setMaterialPublished] = useState(false); //bool 
	var [materialCreationDate, setMaterialCreationDate] = useState(""); //string
	var [materialUpdetedDate, setMaterialUpdetedDate] = useState(""); //string

	var [creatorFirstName, setCreatorFirstName] = useState(""); //string
	var [creatorLastName, setCreatorLastName] = useState(""); //string

	var [materialCoverImageSrc, setMaterialCoverImageSrc] = useState(""); //string

	var [materialAuthors, setMaterialAuthors] = useState([]) //Array<string>
	var [materialDescription, setMaterialDescription] = useState(""); //string
	var [materialLicense, setMaterialLicense] = useState(""); //string
	var [materialSources, setMaterialSources] = useState([]) //Array<string>
	var [materialDifficulty, setMaterialDifficulty] = useState(0) //number
	var [materialPrepTime, setMaterialPrepTime] = useState(0); //number
	var [materialTools, setMaterialTools] = useState([]); //Array<obj>
	var [materialProcesses, setMaterialProcesses] = useState([]) //Array<obj>

	//ref
	const coverImageRef = useRef(); //any
	const descriptionRef = useRef(); //any
	const licenseRef = useRef(); //any
	const prepTimeRef = useRef(); //any

	//functions
	const navigate = useNavigate();
	const handleSaveMaterial = () => {
		const postTo = "http://localhost:5000/materials/update/" + materialRef; //string
		const data = { //obj
			name : materialName,
			ref : materialRef,
			forkedFromRef : materialForkedFromRef,
			creatorUserName : materialCreatorUserName,
			published : materialPublished,

			coverImage : {
				source : materialCoverImageSrc
			},
			details : {
				description : materialDescription,
				authors : materialAuthors,
				license : materialLicense,
				sources : materialSources,
				difficulty : materialDifficulty,
				prepTime : materialPrepTime,
				tools : materialTools,
				processes : materialProcesses
			}
		};

		axios.post(postTo, data)
			.then((res) => { console.log("Material saved"); });
	};
	const handlePublishMaterial = () => {
		setMaterialPublished(true);

		const postTo = "http://localhost:5000/materials/update/" + materialRef; //string
		const data = { //obj
			name : materialName,
			ref : materialRef,
			forkedFromRef : materialForkedFromRef,
			creatorUserName : materialCreatorUserName,
			published : true,

			coverImage : {
				source : materialCoverImageSrc
			},
			details : {
				description : materialDescription,
				authors : materialAuthors,
				license : materialLicense,
				sources : materialSources,
				difficulty : materialDifficulty,
				prepTime : materialPrepTime,
				tools : materialTools,
				processes : materialProcesses
			}
		};

		axios.post(postTo, data)
			.then((res) => { console.log("Material Published"); });

		navigate("/");
	};
	const handleDeleteMaterial = () => {
		const postTo = "http://localhost:5000/materials/" + materialRef; //string

		axios.delete(postTo)
			.then((res) => { console.log("Material Deleted"); });

		navigate("/");
	};

	const handleCoverImageOnChange = () => {
		const newCoverImageSrc = coverImageRef.current.value;

        if (true) { //font-end validation here
            setMaterialCoverImageSrc(newCoverImageSrc);

        } else {
            //validation error handler here
        }
	};
	const handleDescriptionOnChange = () => {
		const newDescription = descriptionRef.current.value;

        if (true) { //font-end validation here
            setMaterialDescription(newDescription);

        } else {
            //validation error handler here
        }
	};
	const handleAuthorOnChange = (event) => {
		const elmt = event.currentTarget || event.target;

		if (elmt) {			
			const elmtValue = elmt.value; //string

			if (true) { //font-end validation here
				const authorArray = [...materialAuthors]; //Array<string>
				const elmtIndex = elmt.getAttribute("index"); //number
				
				authorArray[elmtIndex] = elmtValue;
				setMaterialAuthors(authorArray);

			} else {
            	//validation error handler here
			}
		}
	};
	const handleAddAuthor = () => {
		var authorArray = [...materialAuthors]; //Arra<string>

		if (authorArray[authorArray.length - 1]) {
			authorArray.push("");
			setMaterialAuthors(authorArray);

		} else {
			//will not add Author
		}
	};
	const handleLicenseOnChange = () => {
		const newLicense = licenseRef.current.value;

        if (true) { //font-end validation here
            setMaterialLicense(newLicense);

        } else {
            //validation error handler here
        }
	};
	const handleSourceOnChange = (event) => {
		const elmt = event.currentTarget || event.target;

		if (elmt) {		
			const elmtParent = elmt.parentElement;
			
			if (elmtParent.classList.contains("sourceInputs")) {
				const inputs = elmtParent.getElementsByTagName("INPUT");
				const inputValues = { //obj
					name : inputs[0].value,
					source : inputs[1].value
				};

				if (true) { //font-end validation here
					const sourceArray = [...materialSources]; //Array<obj>
					const elmtIndex = elmtParent.getAttribute("index"); //number
					
					sourceArray[elmtIndex] = inputValues;
					setMaterialSources(sourceArray);

				} else {
					//validation error handler here
				}
			}
		}
	};
	const handleAddSource = () => {
		var sourceArray = [...materialSources]; //Arra<string>

		if (sourceArray[sourceArray.length - 1].name && sourceArray[sourceArray.length - 1].source) {
			sourceArray.push({ name : "", source : "" });
			setMaterialSources(sourceArray);

		} else {
			//will not add Author
		}
	};
	const handleDifficultyOnChange = (event) => {
		const elmt = event.currentTarget || event.target; //any

		if (elmt) {
			const elmtIndex = parseInt(elmt.getAttribute("index")); //number

			if(true){ //handle validation here
				setMaterialDifficulty(elmtIndex);

			} else {
				//do error function

			}
		}
	};
	const handlePrepTimeOnChange = () => {
		const newMaterialPrepTime = prepTimeRef.current.value;

        if (true) { //font-end validation here
            setMaterialPrepTime(newMaterialPrepTime);

        } else {
            //validation error handler here
        }
	};
	const handleToolOnChange = (dataObj) => {
		if (dataObj) {
			const dataIndex = dataObj.index;

			if (materialTools[dataIndex]) {
				const newMaterialTools = materialTools; //Array<obj>
				const newTool = { //obj
					name : dataObj.name,
					ref : dataObj.ref,
					description : dataObj.description,
					link : dataObj.link
				};

				newMaterialTools[dataIndex] = newTool;

				setMaterialTools(newMaterialTools);
			}
		}
	};
	const handleProcessOnChange = (dataObj) => {
		if (dataObj) {
			const dataIndex = dataObj.index;

			if (materialProcesses[dataIndex]) {
				const newMaterialProcesses = materialProcesses; //Array<obj>
				const newProcess = { //obj
					name : dataObj.name,
					ref : dataObj.ref,
					description : dataObj.description,
					link : dataObj.link
				};

				newMaterialProcesses[dataIndex] = newProcess;

				setMaterialProcesses(newMaterialProcesses);
			}
		}
	};

	//variables
    const MaterialRef = searchParams.get("materialRef");
	const materialEditClassName = materialPublished ? "MaterialEdit published" : "MaterialEdit";

	//Effects
		//set material data
		useEffect(() => {
			const getURL = "http://localhost:5000/materials/findByRef/" + MaterialRef; //string

			axios.get(getURL)
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
						setMaterialLicense(resData.details.license);
						setMaterialSources(resData.details.sources);
						setMaterialDifficulty(resData.details.difficulty);
						setMaterialPrepTime(resData.details.prepTime);
						setMaterialTools(resData.details.tools);
						setMaterialProcesses(resData.details.processes);
					}
				});
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

		//get tool List
		useEffect(() => {
			const getURL = "http://localhost:5000/tools/"; //string
			
			axios.get(getURL)
				.then((res) => {
					const resData = res.data;

					if (resData) {
						setTools(resData);

					}
				})
		}, []);

		//get process List
		useEffect(() => {
			const getURL = "http://localhost:5000/processes/"; //string

			axios.get(getURL)
				.then((res) => {
					const resData = res.data;

					if (resData) {
						setProcesses(resData);

					}
				})
		}, []);

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

				<div className="coverImageContainer">
					<div className="inner">
						<h4>Cover Image</h4>

						<input
							ref={ coverImageRef }
							type="text"
							value={ materialCoverImageSrc }
							placeholder="Cover Image Source"
							onChange={ handleCoverImageOnChange }
						/>
					</div>

				</div>

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

				<div className="detailsCotnainer">
					<Grid componentData={ { customClass : "", numberOfColumns : 2} } >
						<div className="details">
							<div className="inner">
								<div>
									<div>
										<h6>Description</h6>

										<div className="descriptionContainer">
											<textarea
												ref={ descriptionRef }
												value={ materialDescription }
												placeholder="Enter a description"
												onChange={ handleDescriptionOnChange }
											/>
										</div>
									</div>
								</div>

								<div>
									<div>
										<h6>Author(s)</h6>

										<div className="authorContainer">
											{
												materialAuthors.map((author, key) => {
													return (
														<input
															key={ key }
															index={ key }
															type="text"
															value={ author }
															placeholder="Enter Author"
															onChange={ handleAuthorOnChange }
														/>
													)
												})
											}

											<div>
												<Button componentData={{
													class : "",
													copy : "Add",
													type : "function",
													link : "",
													function : handleAddAuthor
												} } />
											</div>
										</div>
									</div>
								</div>

								<div>
									<div>
										<h6>License</h6>

										<div className="licenseContainer">
											<input
												ref={ licenseRef }
												type="text"
												value={ materialLicense }
												placeholder="Enter License"
												onChange={ handleLicenseOnChange }
											/>
										</div>
									</div>
								</div>

								<div>
									<div>
										<h6>Source(s)</h6>

										<div className="sourceContainer">
											{
												materialSources.map((source, key) => {
													return (
														<div className="sourceInputs" key={ key } index={ key }>
															<input
																type="text"
																value={ source.name }
																placeholder="Enter Source Name"
																onChange={ handleSourceOnChange }
															/>

															<input
																type="text"
																value={ source.source }
																placeholder="Enter Source Link"
																onChange={ handleSourceOnChange }
															/>
														</div>
													)
												})
											}

											<div>
												<Button componentData={{
													class : "",
													copy : "Add",
													type : "function",
													link : "",
													function : handleAddSource
												} } />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="details">
							<div className="inner">
								<div>
									<div>
										<h6>Difficulty</h6>

										<div className="difficultyContainer">
											{
												[0,1,2,3,4].map((key) => {
													const difficultyClassName = key === materialDifficulty ? "difficultyButton active" : "difficultyButton";

													return (
														<div key={ key } index={ key } className={ difficultyClassName } onClick={ handleDifficultyOnChange }>
															<div className="inner" />
														</div>
													)
												})
											}
										</div>
									</div>
								</div>

								<div>
									<div>
										<h6>Preperation Time</h6>

										<div className="prepTimeContainer">
											<input
												ref={ prepTimeRef }
												type="number"
												value={ materialPrepTime }
												onChange={ handlePrepTimeOnChange }
											/>
											<p>Minutes</p>
										</div>
									</div>
								</div>

								<div>
									<div>
										<h6>Tools</h6>

										<div className="toolsContainer">
											{
												materialTools.map((materialTool, key) => {
													return (
														<OptionInput key={ key } componentData={{
															optionIndex : key, 
															initialOption : materialTool,
															options : tools,
															updateSelectedOption : handleToolOnChange
														}} />
													)
												})
											}
										</div>
									</div>
								</div>

								<div>
									<div>
										<h6>Processes</h6>

										<div className="processesContainer">
											{
												materialProcesses.map((materialProcess, key) => {
													return (
														<OptionInput key={ key } componentData={{
															optionIndex : key, 
															initialOption : materialProcess,
															options : processes,
															updateSelectedOption : handleProcessOnChange
														}} />
													)
												})
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Grid>
				</div>

				<div className="ingredientsContainer">

				</div>

				<div className="propertiesContainer">

				</div>

				<div className="methodContainer">

				</div>

				<div className="imageGalleryContainer">
					<Carousel componentData={ { customClass : "", numberOfColumns : 4 } }>
						<div className="item" />
					</Carousel>
				</div>
            </div>		
		</div>
	);
}
