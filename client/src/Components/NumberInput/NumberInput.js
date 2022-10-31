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

    //states
    var [isRange, setIsRange] = useState(false); //bool
    var [numberValue, setNumberValue] = useState(""); //number
    var [numberMinValue, setNumberMinValue] = useState(""); //number
    var [numberMaxValue, setNumberMaxValue] = useState(""); //number
    var [deviation, setDeviation] = useState(0); //number
    var [standardFormIndex, setStandardFormIndex] = useState(0); //number

    //refs
    const isRangeRef = useRef(); //any
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

        } else {
            //do nothing
        }
    };
    const handleNumberMinValueOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setNumberMinValue(elmtValue);

        } else {
            //do nothing
        }
    };
    const handleNumberMaxValueOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setNumberMaxValue(elmtValue);

        } else {
            //do nothing
        }
    };
    const handleStandardFormIndexOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setStandardFormIndex(elmtValue);

        } else {
            //do nothing
        }
    };
    const handleDeviationOnChange = (event) => {
        const targetElement = event.currenttarget ? event.currentTarget : event.target; //any

        if (targetElement) {
            const elmtValue = targetElement.value; //number

            setDeviation(elmtValue);

        } else {
            //do nothing
        }
    };

    //variables
    const componentClass = "NumberInput"; //string

	return (
		<div className={ componentClass }>
            <div className="inner">
                <input ref={ isRangeRef } type="hidden" value={ isRange } />
                <input ref={ numberValueRef } type="hidden" value={ numberValue ? numberValue : "" } />
                <input ref={ numberMinValueRef } type="hidden" value={ numberMinValue ? numberMinValue : "" } />
                <input ref={ numberMaxValueRef } type="hidden" value={ numberMaxValue ? numberMaxValue : "" } />
                <input ref={ deviationRef } type="hidden" value={ deviation ? deviation : "" } />
                <input ref={ standardFormIndexRef } type="hidden" value={ standardFormIndex ? standardFormIndex : "" } />

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
                                value={ numberMinValue ? numberMinValue : "" }
                                onChange={ handleNumberMinValueOnChange }
                            />

                            <p>-</p>

                            <input
                                type="number"
                                placeholder="Max"
                                value={ numberMaxValue ? numberMaxValue : "" }
                                onChange={ handleNumberMaxValueOnChange }
                            />
                        </div>

                    :
                        <div className="singleValueContainer">
                            <input
                                type="number"
                                placeholder="Enter Number"
                                value={ numberValue ? numberValue : "" }
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
