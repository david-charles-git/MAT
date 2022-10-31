/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useState } from "react";
import NumberInput from "../NumberInput/NumberInput";
import OptionInput from "../OptionInput/OptionInput";
import TextInput from "../TextInput/TextInput";
import './ValueInput.scss';

//exports
export default function ValueInput(props) {
    //properties
    const valueIndex = props.componentData.index; //number
    const valueType = props.componentData.type; //sting
    const valueOptions = props.componentData.options; //Array<obj> 
    const valueItems = props.componentData.items; //Array<obj>
    const valueItem = props.componentData.item; //obj
    const updateValue = props.componentData.updateValue;

    var [item, setItem] = useState(valueItem);

    //functions
    const handleUpdateSelectedOption = () => {

    };
    const handleUpdateTextValue = (newItem) => {
        if (newItem.value && valueItems[valueIndex]) {
            var newitems = valueItems;

            newitems[valueIndex] = newItem;
            setItem(newItem);
            updateValue(newitems);
        }

    };
    const handleUpdateNumberValue = () => {

    };
    const generateValueInput = () => {
        if (valueType === "select") {
            return (
                <OptionInput componentData={ {
                    optionIndex : 1,
                    item : item,
                    options : valueOptions,
                    updateSelectedOption : handleUpdateSelectedOption
                } } />
            )

        } else if (valueType === "text") {
            return <TextInput componentData={ {  item : item, updateTextValues : handleUpdateTextValue } } />

        } else if (valueType === "number") {
            return (
                <NumberInput componentData={ {  item : item, updateNumberValues : handleUpdateNumberValue } } />
            )
        }
    };

    //variables
    const componentClass = "ValueInput"; //string
    
    return (
        <div className={ componentClass }>
            <div className="inner">
                <p>Value</p>

                <div className="inputContainer">
                    { generateValueInput() }
                </div>
            </div>
        </div>
    )
}
