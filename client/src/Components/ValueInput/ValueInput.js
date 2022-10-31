/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import NumberInput from "../NumberInput/NumberInput";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import TextInput from "../TextInput/TextInput";
import './ValueInput.scss';

//exports
export default function ValueInput(props) {
    //properties
    const dataType = props.componentData.dataType; //sting
    const values = props.componentData.values; //Array<obj> 
    const currentIsRange = props.componentData.currentIsRange; //bool
    const currentValue = props.componentData.currentValue; //obj
    const currentMinValue = props.componentData.currentMinValue; //number
    const currentMaxValue = props.componentData.currentMaxValue; //number
    const currentDeviation = props.componentData.currentDeviation; //number
    const currentStandardFormIndex = props.componentData.currentStandardFormIndex; //number

    //functions
    const generateValueInput = () => {
        if (dataType === "select") {
            return <SelectDropDown componentData={ { dropDownOptions : values, selectedOption : currentValue } } />

        } else if (dataType === "text") {
            return <TextInput componentData={ {  currentValue : currentValue } } />

        } else if (dataType === "number") {
            return (
                <NumberInput componentData={
                    {
                        currentIsRange : currentIsRange,
                        currentValue : currentValue,
                        currentMinValue : currentMinValue,
                        currentMaxValue : currentMaxValue,
                        currentDeviation : currentDeviation,
                        currentStandardFormIndex : currentStandardFormIndex
                    }
                } />
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
