/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './MaterialFork.scss';
import { useEffect, useState } from "react";
import Grid from "../../Components/Grid/Grid";

//exports
export default function MaterialFork(props) {
	//properties
	const userName = props.pageData.userName; //string

	//states
    var [searchParams, setSearchParams] = useSearchParams();

	var [materials, setMaterials] = useState([]); //Array<obj>
    var [materialName, setmaterialName] = useState(""); //sting
    var [materialRef, setMaterialRef] = useState(""); //string
	var [materialCreatorUserName, setMaterialCreatorUserName] = useState(""); //string

	var [materialAuthors, setMaterialAuthors] = useState([]) //Array<string>

	//functions
    const navigate = useNavigate();
    const habdleForkItem = (event) => {
        const elmt = event.currentTarget || event.target; //any
        const elmtRef = elmt.getAttribute("materialref"); //string

        axios.get("http://localhost:5000/materials/findByRef/" + elmtRef)
            .then((res) => {
                const resData = res.data[0]; //obj

                if (resData) {
                    const newCoverImageSrc = resData.coverImage.source; //string

                    const newDescription = resData.details.description; //string
                    var newAuthors = materialAuthors; //Array<string>
                    const newLicense = resData.details.license; //string
                    const newSources = resData.details.sources; //Array<obj>
                    const newDifficulty = resData.details.difficulty; //number
                    const newPrepTime = resData.details.prepTime; //number
                    const newTools = resData.details.tools; //Array<obj>
                    const newProcesses = resData.details.processes; //Array<obj>

                    for (var a = 0; a < resData.details.authors.length; a++) {
                        if (newAuthors.indexOf(resData.details.authors[a]) === -1) {
                            newAuthors.push(resData.details.authors[a]);

                        }
                    }

                    const navigationTo = "/materials/edit/?materialRef=" + MaterialRef; //string
                    const postTo = "http://localhost:5000/materials/update/" + MaterialRef; //string
                    const data = { //obj
                        name : materialName,
                        ref : materialRef,
                        forkedFromRef : elmtRef,
                        creatorUserName : materialCreatorUserName,

                        coverImage : {
                            source : newCoverImageSrc
                        },
                        details : {
                            description : newDescription,
                            authors : newAuthors,
                            license : newLicense,
                            sources : newSources,
                            difficulty : newDifficulty,
                            propTime : newPrepTime,
                            tools : newTools,
                            processes : newProcesses
                        }
                    };
                    
                    axios.post(postTo, data)
                        .then((res) => { console.log("Material Forked"); });
                    
                    navigate(navigationTo);
                }
            });
    };

	//variables
    const MaterialRef = searchParams.get("materialRef");

	//Effects
        //get materials
        useEffect(() => {
            axios.get("http://localhost:5000/materials/")
                .then((res) => {
                    setMaterials(res.data);

                })
        }, []);
        //get currentMaterial
        useEffect(() => {
            axios.get("http://localhost:5000/materials/findByRef/" + MaterialRef)
                .then((res) => {
                    const resData = res.data[0];

                    if(resData) {
                        setmaterialName(resData.name);
                        setMaterialRef(resData.ref);
                        setMaterialCreatorUserName(resData.creatorUserName);
                        setMaterialAuthors(resData.details.authors);
                    }
                });
        }, [MaterialRef]);

	return (
		<div className="MaterialFork"> 
            <div className="inner">
                <Grid componentData={ { customClass : "", numberOfColumns : 4 } }>
                    {
                        materials.map((material, key_1) => {
                            if (MaterialRef ===  material.ref) {
                                return <div key={ key_1 } className="item" style={ { display: "none" } }/>

                            } else {
                                return (
                                    <div key={ key_1 } className="item">
                                        <div className="inner" materialref={ material.ref } onClick={ habdleForkItem } >
                                            <h4>{ material.name }</h4>

                                            <p>{ material.ref }</p>

                                            <p>
                                                {
                                                    material.details.authors.map((author, key_2) => {
                                                        return (
                                                            <span key={ key_2 }>{ author }</span>
                                                        )
                                                    })
                                                }
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Grid>
            </div>		
		</div>
	);
}