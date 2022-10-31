/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useRef, useState } from "react";
import './TextInput.scss';

//exports
export default function TextInput(props) {
    //properties
    const item = props.componentData.item;
    const currentValue = item ? item.value : ""; //string
    const updateTextValues = props.componentData.updateTextValues; //any

    //states
    var [TextInputValue, setTextInputValue] = useState(currentValue); //string

    //refs
    const TextInputValueRef = useRef(); //any

    //functions
    const handleTextInputOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //string
            const newItem = item;

            newItem.value = elmtValue;
            newItem.name = elmtValue;

            setTextInputValue(elmtValue);
            updateTextValues(newItem);

        } else {
            //do nothing
        }
    };

    //variables
    const componentClass = "TextInput"; //string
    
	return (
		<div className={ componentClass }>
            <div className="inner">
                <input ref={ TextInputValueRef } type="hidden" value={ TextInputValue } />

                <input
                    type="text"
                    placeholder="Enter Text"
                    value={ TextInputValue }
                    onChange={ handleTextInputOnChange }
                />
            </div>
		</div>
	);
}
