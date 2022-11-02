/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './MaterialCreate.scss';

import { materialDataStructure } from "../../DataStructures/material";
import Grid from "../../Components/Grid/Grid";
import Button from "../../Components/Button/Button";

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
    
    const handleCreateMaterial_new = () => {
        const navigationTo = "/materials/edit/?materialRef=" + materialRef; //string
        var newMaterial = materialDataStructure; //obj

        newMaterial.name = materialName;
        newMaterial.ref = materialRef;
        newMaterial.creatorUserName = userName;
        newMaterial.details.authors = [ userName ];

		axios.post("http://localhost:5000/materials/add", newMaterial)
			.then((res) => { console.log("Material Created - edit"); navigate(navigationTo); });
    };
    const handleCreateMaterial_fork = () => {
        const navigationTo = "/materials/fork/?materialRef=" + materialRef; //string
        var newMaterial = materialDataStructure; //obj

        newMaterial.name = materialName;
        newMaterial.ref = materialRef;
        newMaterial.creatorUserName = userName;
        newMaterial.details.authors = [ userName ];

		axios.post("http://localhost:5000/materials/add", newMaterial)
			.then((res) => { console.log("Material Created - fork"); navigate(navigationTo);; });
    };
    const handleMaterialNameChange = () => {
        const newMaterialName = materialNameRef.current.value; //string

        if (true) { //font-end validation here
            setmaterialName(newMaterialName);

        } else {
            //validation error handler here
        }
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
                                onChange={ handleMaterialNameChange }
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
                                    function : handleCreateMaterial_new
                                } } />

                                {/* <Button componentData={ {
                                    class : "option",
                                    copy : "Fork Existing",
                                    type : "function",
                                    link : "",
                                    function : handleCreateMaterial_fork
                                } } /> */}
                            </Grid>
                        </div>
                    </div>		
                </form>
            </div>		
		</div>
	);
}