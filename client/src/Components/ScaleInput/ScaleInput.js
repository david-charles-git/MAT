/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import './ScaleInput.scss';

//exports
export default function ScaleInput(props) {
    //properties
    const scales = props.componentData.scales; //Array<obj>
    const currentScale = props.componentData.currentScale; //obj

    //variables
    const componentClass = "ScaleInput"; //string

    if (scales.length > 0) {
        return (
            <div className={ componentClass }>
                <div className="inner">
                    <p>Scale</p>

                    <div className="inputContainer">
                        <SelectDropDown componentData={ { dropDownOptions : scales, selectedOption : currentScale } } />
                    </div>
                </div>
            </div>
        )

    } else {
        return <></>
    }
}
