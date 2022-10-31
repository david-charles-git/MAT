/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useRef, useState } from 'react';
import './OptionInput.scss';

//exports
export default function OptionInput(props) {
    //properties
    const optionIndex = props.componentData.optionIndex; //number
    const initialOption = props.componentData.initialOption; //obj
    const options = props.componentData.options; //Array<obj>
    const updateSelectedOption = props.componentData.updateSelectedOption; //any

    //states
    var [selectedOptionName, setSelectedOptionName] = useState(initialOption.name);
    var [selectedOptionRef, setSelectedOptionRef] = useState(initialOption.ref);
    var [selectedOptionDescription, setSelectedOptionDescription] = useState(initialOption.description);
    var [selectedOptionLink, setSelectedOptionLink] = useState(initialOption.link);
    var [optionInputIsOpen, setOptionInputIsOpen] = useState(false);
    var [optionBodyHeight, setOptionBodyHeight] = useState(0); //number

    //refs
    const optionBodyInnerRef = useRef();

    //functions
    const handleOptionOnChange = (event) => {
        const option = event.currentTarget || event.target; //any
        const optionName = option.getAttribute("optionname"); //string
        const optionRef = option.getAttribute("optionref"); //string
        const optionDescription = option.getAttribute("optiondescription"); //string
        const optionLink = option.getAttribute("optionlink"); //string
        const optiondata = {
            index : optionIndex,
            name : optionName,
            ref : optionRef,
            description : optionDescription,
            link : optionLink
        };

        setSelectedOptionName(optionName);
        setSelectedOptionRef(optionRef);
        setSelectedOptionDescription(optionDescription);
        setSelectedOptionLink(optionLink);
        handleOpenCloseOptionInput();
        updateSelectedOption(optiondata);

    };
    const handleOpenCloseOptionInput = () => {
        const newOptionBodyInnerHeight = optionInputIsOpen ? 0 : optionBodyInnerRef.current.offsetHeight; //number
        const newOptionInputIsOpen = !optionInputIsOpen;

        setOptionInputIsOpen(newOptionInputIsOpen);
        setOptionBodyHeight(newOptionBodyInnerHeight);
    };

    //variables
    const componentClass = optionInputIsOpen ? "OptionInput active" : "OptionInput"; //string

	return (
		<div className={ componentClass }>
            <div className="inner">
                <div className="head" onClick={ handleOpenCloseOptionInput }>
                    <p>{ selectedOptionName || "Select an option" }</p>
                </div>

                <div className="body" style={ { height : optionBodyHeight + "px" }}>
                    <div ref={ optionBodyInnerRef } className="inner"> 
                        {
                            options.map((option, key) => {
                                const optionClass = selectedOptionRef === option.ref ? "option active" : "option";

                                return (
                                    <p
                                        key={ key }
                                        className={ optionClass }
                                        onClick={ handleOptionOnChange }
                                        optionname={ option.name }
                                        optionref={ option.ref }
                                        optiondescription={ option.description }
                                        optionlink={ option.link }
                                    >
                                        { option.name }
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
	);
}
