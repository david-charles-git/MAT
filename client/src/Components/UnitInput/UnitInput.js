/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import './UnitInput.scss';

//exports
export default function UnitInput(props) {
    //properties
    const units = props.componentData.units; //Array<obj>
    const currentUnit = props.componentData.currentUnit; //obj

    //variables
    const componentClass = "UnitInput"; //string

    if (units.length > 0) {
        return (
            <div className={ componentClass }>
                <div className="inner">
                    <p>Unit</p>

                    <div className="inputContainer">
                        <SelectDropDown componentData={ { dropDownOptions : units, selectedOption : currentUnit } } />
                    </div>
                </div>
            </div>
        )

    } else {
        return <></>

    }
}
