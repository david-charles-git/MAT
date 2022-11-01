/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useRef, useState } from "react";
import './NumberInput.scss';

//exports
export default function NumberInput(props) {
    //properties
    const item = props.componentData.item; //obj
    const updateNumberValues = props.componentData.updateNumberValues; //any

    //states
    var [isRange, setIsRange] = useState(item.isRange); //bool
    var [numberValue, setNumberValue] = useState(item.value); //number
    var [numberMinValue, setNumberMinValue] = useState(item.minValue); //number
    var [numberMaxValue, setNumberMaxValue] = useState(item.maxValue); //number
    var [deviation, setDeviation] = useState(item.deviation); //number
    var [standardFormIndex, setStandardFormIndex] = useState(item.standardFormIndex); //number

    //refs
    const numberValueRef = useRef(); //any
    const numberMinValueRef = useRef(); //any
    const numberMaxValueRef = useRef(); //any
    const deviationRef = useRef(); //any
    const standardFormIndexRef = useRef(); //any

    //functions
    const handleNumberValueOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setNumberValue(elmtValue);
            handleupdateNumberValues();

        } else {
            //do nothing
        }
    };
    const handleNumberMinValueOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setNumberMinValue(elmtValue);
            handleupdateNumberValues();

        } else {
            //do nothing
        }
    };
    const handleNumberMaxValueOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setNumberMaxValue(elmtValue);
            handleupdateNumberValues();

        } else {
            //do nothing
        }
    };
    const handleStandardFormIndexOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setStandardFormIndex(elmtValue);
            handleupdateNumberValues();

        } else {
            //do nothing
        }
    };
    const handleDeviationOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setDeviation(elmtValue);
            handleupdateNumberValues();

        } else {
            //do nothing
        }
    };
    const handleupdateNumberValues = () => {
        const itemIsRange = isRange;
        const itemValue = parseInt(numberValueRef.current.value); //number
        const itemMinValue = parseInt(numberMinValueRef.current.value); //number
        const itemMaxValue = parseInt(numberMaxValueRef.current.value); //number
        const itemDeviation = parseInt(deviationRef.current.value); //number
        const itemStandardFormIndex = parseInt(standardFormIndexRef.current.value); //number
        const newItem = item;

        newItem.isRange = itemIsRange;
        newItem.value = itemValue;
        newItem.minValue = itemMinValue;
        newItem.maxValue = itemMaxValue;
        newItem.deviation = itemDeviation;
        newItem.standardFormIndex = itemStandardFormIndex;
        updateNumberValues(newItem);
    };

    //variables
    const componentClass = "NumberInput"; //string

	return (
		<div className={ componentClass }>
            <div className="inner">
                <input ref={ numberValueRef } type="hidden" value={ numberValue } />
                <input ref={ numberMinValueRef } type="hidden" value={ numberMinValue ? numberMinValue : 0 } />
                <input ref={ numberMaxValueRef } type="hidden" value={ numberMaxValue ? numberMaxValue : 0 } />
                <input ref={ deviationRef } type="hidden" value={ deviation ? deviation : 0 } />
                <input ref={ standardFormIndexRef } type="hidden" value={ standardFormIndex ? standardFormIndex : 0 } />

                <div className="isRangeContainer">
                    <p>Value is range?</p>
                    <input type="checkbox" checked={ isRange } onChange={ () => { setIsRange(!isRange) } } />
                </div>

                {
                    isRange ?
                        <div className="rangeContainer">
                            <input
                                type="number"
                                placeholder="Min"
                                value={ numberMinValue ? numberMinValue : 0 }
                                onChange={ handleNumberMinValueOnChange }
                            />

                            <p>-</p>

                            <input
                                type="number"
                                placeholder="Max"
                                value={ numberMaxValue ? numberMaxValue : 0 }
                                onChange={ handleNumberMaxValueOnChange }
                            />
                        </div>

                    :
                        <div className="singleValueContainer">
                            <input
                                type="number"
                                placeholder="Enter Number"
                                value={ numberValue ? numberValue : 0 }
                                onChange={ handleNumberValueOnChange }
                            />
                        </div>
                }
                
                <div className="standardFormContainer">
                    <p>E</p>

                    <input
                        type="number"
                        placeholder="Index"
                        value={ standardFormIndex ? standardFormIndex : 0 }
                        onChange={ handleStandardFormIndexOnChange }
                    />
                </div>

                <div className="deviationContainer">
                    <p>±</p>

                    <input
                        type="number"
                        placeholder="Deviation"
                        value={ deviation ? deviation : 0 }
                        onChange={ handleDeviationOnChange }
                    />
                </div>
            </div>
		</div>
	)
}
