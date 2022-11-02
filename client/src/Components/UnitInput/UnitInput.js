/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useState } from "react";
import OptionInput from "../OptionInput/OptionInput";
import './UnitInput.scss';

//exports
export default function UnitInput(props) {
    //properties
    const unitIndex = props.componentData.index; //number
    const units = props.componentData.units; //Array<obj>
    const unitItems = props.componentData.items; //Array<obj>
    const unitItem = props.componentData.item; //obj
    const updateItem = props.componentData.updateItem; //any

    //states
    var [item, setItem] = useState(unitItem); //obj

    //functions
    const handleUnitChange = (dataObj) => {
        if (dataObj) {
            console.log(dataObj);
        }
    };

    //variables
    const componentClass = "UnitInput"; //string

    if (units.length > 0) {
        return (
            <div className={ componentClass }>
                <div className="inner">
                    <p>Unit</p>

                    <div className="inputContainer">
                        <OptionInput componentData={{
                            optionIndex : 0, 
                            item : unitItem,
                            options : units,
                            updateSelectedOption : handleUnitChange
                        }} />
                    </div>
                </div>
            </div>
        )

    } else {
        return <></>

    }
}
