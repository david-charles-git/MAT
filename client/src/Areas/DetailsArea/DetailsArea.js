/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './DetailsArea.scss';

import Button from '../../Components/Button/Button';
import OptionInput from '../../Components/OptionInput/OptionInput';

//exports
export default function DetailsArea(props) {
    //properties
    const customClass = props.componentData.customClass; //string
    const details = props.componentData.details; //obj
    const updateDetails = props.componentData.updateDetails; //any

    //states
    var [materialDetails, setMaterialDetails] = useState(details); //obj
    var [materialAuthors, setMaterialAuthors] = useState(details.authors) //Array<string>
    var [materialDescription, setMaterialDescription] = useState(details.description); //string
    var [materialLicense, setMaterialLicense] = useState(details.license); //string
    var [materialSources, setMaterialSources] = useState(details.sources) //Array<string>
    var [materialDifficulty, setMaterialDifficulty] = useState(details.difficulty) //number
    var [materialPrepTime, setMaterialPrepTime] = useState(details.prepTime); //number
    var [materialTools, setMaterialTools] = useState(details.tools); //Array<obj>
    var [materialProcesses, setMaterialProcesses] = useState(details.processes) //Array<obj>

    var [tools, setTools] = useState([]); //Array<obj>
	var [processes, setProcesses] = useState([]); //Array<obj>

    //refs
	const descriptionRef = useRef(); //any
	const licenseRef = useRef(); //any
    const sourcesRef = useRef(); //any
	const prepTimeRef = useRef(); //any

    //functions
    const handleDescriptionChange = () => {
        const newDescription = descriptionRef.current.value; //string

        if (true) { //font-end validation here
            var newDetails = materialDetails; //obj
    
            newDetails.description = newDescription;

            setMaterialDescription(newDescription);
            setMaterialDetails(newDetails);
            updateDetails(newDetails);

        } else {
            //validation error handler here
        }
    };
    const handleAuthorChange = (event) => {
        const elmt = event.currentTarget || event.target; //any

        if (elmt) {			
            const elmtValue = elmt.value; //string

            if (true) { //font-end validation here
                var newDetails = materialDetails; //obj
                var newAuthors = [...materialAuthors]; //Array<string>
                const elmtIndex = elmt.getAttribute("index"); //number
                
                newAuthors[elmtIndex] = elmtValue;
                newDetails.authors = newAuthors;

                setMaterialAuthors(newAuthors);
                setMaterialDetails(newDetails);
                updateDetails(newDetails);

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
    const handleLicenseChange = () => {
        const newLicense = licenseRef.current.value; //string

        if (true) { //font-end validation here
            var newDetails = materialDetails; //obj

            newDetails.license = newLicense;

            setMaterialLicense(newLicense);
            setMaterialDetails(newDetails);
            updateDetails(newDetails);

        } else {
            //validation error handler here
        }
    };
    const handleSourceChange = (event) => {
        const elmt = event.currentTarget || event.target; //any

        if (elmt) {		
            const elmtParent = elmt.parentElement; //any
            
            if (elmtParent.classList.contains("sourceInputs")) {
                const inputs = elmtParent.getElementsByTagName("INPUT"); //Array<any>
                const inputValues = { //obj
                    name : inputs[0].value,
                    source : inputs[1].value
                };

                if (true) { //font-end validation here
                    var newDetails = materialDetails; //obj
                    var newSources = [...materialSources]; //Array<obj>
                    const elmtIndex = elmtParent.getAttribute("index"); //number
                    
                    newSources[elmtIndex] = inputValues;
                    newDetails.sources = newSources;

                    setMaterialSources(newSources);
                    setMaterialDetails(newDetails);
                    updateDetails(newDetails);

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
    const handleDifficultyChange = (event) => {
        const elmt = event.currentTarget || event.target; //any

        if (elmt) {
            const newDifficulty = parseInt(elmt.getAttribute("index")); //number

            if(true){ //handle validation here
                var newDetails = materialDetails; //obj
        
                newDetails.difficulty = newDifficulty;

                setMaterialDifficulty(newDifficulty);
                setMaterialDetails(newDetails);
                updateDetails(newDetails);

            } else {
                //do error function

            }
        }
    };
    const handlePrepTimeChange = () => {
        const newPrepTime = parseInt(prepTimeRef.current.value); //number

        if (true) { //font-end validation here
            var newDetails = materialDetails; //obj
    
            newDetails.prepTime = newPrepTime;

            setMaterialPrepTime(newPrepTime);
            setMaterialDetails(newDetails);
            updateDetails(newDetails);


        } else {
            //validation error handler here
        }
    };
    const handleToolChange = (dataObj) => {
        if (dataObj) {
            const dataIndex = dataObj.index; //number

            if (materialTools[dataIndex]) {
                var newDetails = materialDetails; //obj
                var newTools = materialTools; //Array<obj>
                const newTool = { //obj
                    name : dataObj.name,
                    ref : dataObj.ref,
                    description : dataObj.description,
                    link : dataObj.link
                };

                newTools[dataIndex] = newTool;
                newDetails.tools = newTools;

                setMaterialTools(newTools);
                setMaterialDetails(newDetails);
                updateDetails(newDetails);
            }
        }
    };
    const handleAddTool = () => {
        var toolsArray = [...materialTools]; //Arra<obj>
        var tool = {
            name : "",
            ref : "",
            description : "",
            link : ""
        };

        if (toolsArray[toolsArray.length - 1].ref) {
            toolsArray.push(tool);

            setMaterialTools(toolsArray);

        } else {
            //will not add Tool
        }
    };
    const handleProcessChange = (dataObj) => {
        if (dataObj) {
            const dataIndex = dataObj.index; //number

            if (materialProcesses[dataIndex]) {
                var newDetails = materialDetails; //obj
                var newProcesses = materialProcesses; //Array<obj>
                const newProcess = { //obj
                    name : dataObj.name,
                    ref : dataObj.ref,
                    description : dataObj.description,
                    link : dataObj.link
                };

                newProcesses[dataIndex] = newProcess;
                newDetails.processes = newProcesses;

                setMaterialProcesses(newProcesses);
                setMaterialDetails(newDetails);
                updateDetails(newDetails);
            }
        }
    };
    const handleAddProcess = () => {
        var processesArray = [...materialProcesses]; //Arra<obj>
        var process = { //obj
            name : "",
            ref : "",
            description : "",
            link : ""
        };

        if (processesArray[processesArray.length - 1].ref) {
            processesArray.push(process);

            setMaterialProcesses(processesArray);

        } else {
            //will not add Process
        }
    };

    //variables
    const componentClass = customClass ? "DetailsArea " + customClass : "DetailsArea"; //string
    const difficultyOptions = [0, 1, 2, 3, 4]; //Array<number>

    //Effects
    //get tools list
    useEffect(() => {
        const getURL = "http://localhost:5000/tools/"; //string
        
        axios.get(getURL)
            .then((res) => {
                const resData = res.data; //Array<obj>

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
                const resData = res.data; //Array<obj>

                if (resData) {
                    setProcesses(resData);

                }
            })
    }, []);

    return (
        <div className={ componentClass }>
            <div className="inner">
                <div>
                    <div>
                        <h6>Description</h6>

                        <div className="descriptionContainer">
                            <textarea
                                ref={ descriptionRef }
                                value={ materialDescription }
                                placeholder="Enter a description"
                                onChange={ handleDescriptionChange }
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
                                            onChange={ handleAuthorChange }
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
                                onChange={ handleLicenseChange }
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h6>Source(s)</h6>

                        <div ref={ sourcesRef } className="sourceContainer">
                            {
                                materialSources.map((source, key) => {
                                    return (
                                        <div className="sourceInputs" key={ key } index={ key }>
                                            <input
                                                className='name'
                                                type="text"
                                                value={ source.name }
                                                placeholder="Enter Source Name"
                                                onChange={ handleSourceChange }
                                            />

                                            <input
                                                className='source'
                                                type="text"
                                                value={ source.source }
                                                placeholder="Enter Source Link"
                                                onChange={ handleSourceChange }
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

                <div>
                    <div>
                        <h6>Difficulty</h6>

                        <div className="difficultyContainer">
                            {
                                difficultyOptions.map((option, key) => {
                                    const difficultyClassName = key === materialDifficulty ? "difficultyButton active" : "difficultyButton";

                                    return (
                                        <div key={ key } index={ option } className={ difficultyClassName } onClick={ handleDifficultyChange }>
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
                                onChange={ handlePrepTimeChange }
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
                                            item : materialTool,
                                            options : tools,
                                            updateSelectedOption : handleToolChange
                                        }} />
                                    )
                                })
                            }
                        </div>

                        <div>
                            <Button componentData={{
                                class : "",
                                copy : "Add",
                                type : "function",
                                link : "",
                                function : handleAddTool
                            } } />
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
                                            item : materialProcess,
                                            options : processes,
                                            updateSelectedOption : handleProcessChange
                                        }} />
                                    )
                                })
                            }
                        </div>

                        <div>
                            <Button componentData={{
                                class : "",
                                copy : "Add",
                                type : "function",
                                link : "",
                                function : handleAddProcess
                            } } />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
