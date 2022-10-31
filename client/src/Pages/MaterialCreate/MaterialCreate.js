/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useNavigate } from "react-router-dom";
import axios from "axios";
import './MaterialCreate.scss';
import { useEffect, useRef, useState } from "react";
import Grid from "../../Components/Grid/Grid";
import Button from "../../Components/Button/Button";

//exports
export default function MaterialCreate(props) {
	//properties
	const userName = props.pageData.userName; //string

	//states
    var [materialName, setmaterialName] = useState(""); //sting
    var [materialRef, setMaterialRef] = useState(""); //string 

	//refs
    const materialNameRef = useRef(); //any
    const materialRefRef = useRef(); //any

	//functions
    const navigate = useNavigate();
    const handleMaterialNameOnChange = () => {
        const newMaterialName = materialNameRef.current.value;

        if (true) { //font-end validation here
            setmaterialName(newMaterialName);

        } else {
            //validation error handler here
        }
    };
    const handleCreateFromSubmissionForm = () => {
        const navigationTo = "/materials/edit/?materialRef=" + materialRef; //string
        const data = { //obj
			name : materialName,
			ref : materialRef,
            forkedFromRef : "",
			creatorUserName : userName,
            published : false,

            coverImage : {
                source : ""
            },
            details : {
                description : "",
                authors : [ userName ],
                license : "",
                sources : [ { name : "", source : "" } ],
                difficulty : 0,
                prepTime : 0,
                tools : [ { name : "", ref : "" } ],
                processes : [ { name : "", ref : "" } ],
            }
		};

		axios.post("http://localhost:5000/materials/add", data)
			.then((res) => { console.log("Material Created"); });
        
        navigate(navigationTo);
    };
    const handleCreateFromFork = () => {
        const navigationTo = "/materials/fork/?materialRef=" + materialRef; //string
        const data = { //obj
			name : materialName,
			ref : materialRef,
            forkedFromRef : "",
			creatorUserName : userName,
            published : false,

            coverImage : {
                source : ""
            },
            details : {
                description : "",
                authors : [ userName ],
                license : "",
                sources : [ { name : "", source : "" } ],
                difficulty : 0,
                prepTime : 0,
                tools : [ { name : "", ref : "" } ],
                processes : [ { name : "", ref : "" } ],
            }
		};

		axios.post("http://localhost:5000/materials/add", data)
			.then((res) => { console.log("Material Created - Fork"); });
        
        navigate(navigationTo);
    };

	//Effects
        //create Material Ref
        useEffect(() => {
            const generateMaterialRef = () => {
                const referencePartOne = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //string
                const referencePartTwo = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //string
                const referencePartThree = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //string
                const reference = referencePartOne  + "-" + referencePartTwo  + "-" + referencePartThree; //string
            
                return reference;
            };
            const getRefExists = (reference) => {
                axios.get("http://localhost:5000/materials/findByRef/" + reference)
                    .then((res) => { return res.data.length > 0 ? true : false });
            };

            var materialRef = generateMaterialRef(); //string
            var refExists = getRefExists(materialRef); //bool

            while (refExists) {
                materialRef = generateMaterialRef();
                refExists = getRefExists(materialRef);
            }

            setMaterialRef(materialRef);

        }, []);

	return (
		<div className="MaterialCreate"> 
            <div className="inner">
                <div className='infoContainer'>
                    <div className='inner'>
                        <h4>New recipe</h4>

                        <p>To get started, give your recipe a name and choose how you'd to input data.</p>	
                    </div>	
                </div> 

                <form>
                    <div className='materialName'>
                        <div className="inner">
                            <h4 className="required">Recipe Title</h4>

                            <input
                                ref={ materialNameRef }
                                type="text"
                                placeholder="Enter recipe title"
                                value={ materialName }
                                onChange={ handleMaterialNameOnChange }
                            />
                        </div>
                    </div>	

                    <div className='materialRef'>
                        <div className="inner">
                            <h4>Recipe Code</h4>

                            <p ref={ materialRefRef }>{ materialRef }</p>
                        </div>
                    </div>

                    <div className='materialCreationOptions'>
                        <div className="inner">
                            <h4>Create new recipe from:</h4>

                            <Grid componentData={ { customClass : "", numberOfColumns : 3 } }>
                                <Button componentData={ {
                                    class : "option",
                                    copy : "Submission Form",
                                    type : "function",
                                    link : "",
                                    function : handleCreateFromSubmissionForm
                                } } />

                                <Button componentData={ {
                                    class : "option",
                                    copy : "Fork Existing",
                                    type : "function",
                                    link : "",
                                    function : handleCreateFromFork
                                } } />
                            </Grid>
                        </div>
                    </div>		
                </form>
            </div>		
		</div>
	);
}