/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useRef, useState } from "react";
import InfoIconWithPopUp from "../InfoIconWithPopUp/InfoIconWithPopUp";
import './SelectDropDown.scss';

//exports
export default function SelectDropDown(props) {
    //properties
    const dropDownOptions = props.componentData.dropDownOptions; //Array<obj>
    const selectedOption = props.componentData.selectedOption ? props.componentData.selectedOption : { ID : -1, name : "", value : "" }; //object

    //states
    var [selectDropDownIsOpen, setSelectDropDownIsOpen] = useState(false); //bool
    var [selectDropDownBodyStyle, setSelectDropDownBodyStyle] = useState({ height: "0px", opacity : 0, zIndex : 0 }); //obj   
    var [selectDropDownID, setSelectDropDownID] = useState(selectedOption.ID); //number
    var [selectDropDownValue, setSelectDropDownValue] = useState(selectedOption.value); //string
    var [selectDropDownName, setSelectDropDownName] = useState(selectedOption.name); //string

    //refs
    const selectDropDownBodyInnerRef = useRef(); //any
    const currentIDRef = useRef(); //any
    const currentValueRef = useRef(); //any
    const currentNameRef = useRef(); //any

    //functions
    const handleOpenCloseSelectDropDown = () => {
        const new_SelectDropDownIsOpen = !selectDropDownIsOpen; //bool
        const height = selectDropDownIsOpen ? 0 : selectDropDownBodyInnerRef.current.clientHeight; //number
        const opacity = selectDropDownIsOpen ? 0 : 1; //number
        const zIndex = selectDropDownIsOpen ? 0 : 1; //number
        const new_selectDropDownBodyStyle = { //obj
            height: height + "px",
            opacity : opacity,
            zIndex : zIndex
        };

        setSelectDropDownIsOpen(new_SelectDropDownIsOpen);
        setSelectDropDownBodyStyle(new_selectDropDownBodyStyle);
    };
    const handleUpdateSelectedValueAndName = (event) => {
        const targetElement = event.currentTarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtName = targetElement.getAttribute("optionname"); //string
            const elmtValue = targetElement.getAttribute("optionvalue"); //any
            const elmtID = targetElement.getAttribute("optionid"); //number

            setSelectDropDownID(elmtID);
            setSelectDropDownValue(elmtValue);
            setSelectDropDownName(elmtName);
            handleOpenCloseSelectDropDown();

        } else {
            //do nothing
        }
    };
    const generateSelectDropDown = () => {
        if (dropDownOptions.length === 1) {
            const optionID = dropDownOptions[0].ID; //number
            const optionName = dropDownOptions[0].name; //string
            const optionValue = dropDownOptions[0].value; //any
            const optionReference = dropDownOptions[0].reference; //string
            const optionInformation = dropDownOptions[0].information; //string

            return (
                <>
                    <input ref={ currentIDRef } className="currentID" type="hidden" value={ !isNaN(optionID) ? optionID : "" } />
                    <input ref={ currentValueRef } className="currentValue" type="hidden" value={ optionValue ? optionValue : "" } />
                    <input ref={ currentNameRef } className="currentName" type="hidden" value={ optionName ? optionName : "" } />

                    <p>{ optionValue ? optionValue : "Value Name not found" }</p>

                    <InfoIconWithPopUp componentData={ { reference : optionReference, information : optionInformation } } />
                </>
            )

        } else if (dropDownOptions.length > 1) {
            return (
                <>
                    <input ref={ currentIDRef } className="currentID" type="hidden" value={ !isNaN(selectDropDownID) ? selectDropDownID : "" } />
                    <input ref={ currentValueRef } className="currentValue" type="hidden" value={ selectDropDownValue ? selectDropDownValue : "" } />
                    <input ref={ currentNameRef } className="currentName" type="hidden" value={ selectDropDownName ? selectDropDownName : "" } />

                    <div className="head">
                        <div className="inner" onClick={ handleOpenCloseSelectDropDown } >
                            <p>{ selectDropDownName ? selectDropDownName : "Select an option" }</p>

                            <div className="openCloseButton">
                                <div className="inner" />
                            </div>
                        </div>
                    </div>

                    <div className="body" style={ selectDropDownBodyStyle }>
                        <div className="inner" ref={ selectDropDownBodyInnerRef } >
                            {
                                dropDownOptions.length > 0 ?
                                    dropDownOptions.map((option, key) => {
                                        return (
                                            <div key={ key } >
                                                <p
                                                    onClick={ handleUpdateSelectedValueAndName }
                                                    optionvalue={ option.value }
                                                    optionid={ option.ID }
                                                    optionname={ option.name }
                                                >
                                                    { option.name }
                                                </p>

                                                <InfoIconWithPopUp componentData={ { information : option.information, reference : option.reference } } />
                                            </div>
                                        )

                                    }) 
                                :
                                    <></> 
                            }
                        </div>
                    </div>
                </>
            )

        } else {
            return <></>
        }
    };

    //variables
    const componentClass = selectDropDownIsOpen ? "SelectDropDown active" : "SelectDropDown"; //string

	return (
		<div className={ componentClass }>
            <div className="inner">
                { generateSelectDropDown() }
            </div>
		</div>
	);
}
