/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useRef, useState } from "react";
import './Accordian.scss';

//exports
export default function Accordian(props) {
    //properties
    const customClass = props.componentData.customClass; //string
    const title = props.componentData.title; //string

    //states
    var [accordianIsOpen, setAccordianIsOpen] = useState(false); //bool
    var [accordianBodyHeight, setAccordianBodyHeight] = useState(0); //number

    //refs
    const accordianBodyInnerRef = useRef(); //any

    //functions
    const openCloseAccordian = () => {
        const new_accordianIsOpen = !accordianIsOpen; //bool
        const new_accordianBodyHeight = accordianIsOpen ? 0 : accordianBodyInnerRef.current.clientHeight; //number

        setAccordianIsOpen(new_accordianIsOpen);
        setAccordianBodyHeight(new_accordianBodyHeight)
    };

    //variables
    const componentClass = accordianIsOpen ? "Accordian active" : "Accordian"; //string
    const componentInnerClass = customClass ? "inner " + customClass : "inner"; //string
    const accordianBodyStyle = { //obj
        height : accordianBodyHeight + "px"
    };

	return (
		<div className={ componentClass }>
            <div className={ componentInnerClass }>
                <div className="head">
                    <div className="inner" onClick={ openCloseAccordian } >
                        <p>{ title }</p>

                        <div className="openCloseButton">
                            <div className="inner" />
                        </div>
                    </div>
                </div>

                <div className="body" style={ accordianBodyStyle }>
                    <div className="inner" ref={ accordianBodyInnerRef } >
                        { props.children }
                    </div>
                </div>
            </div>
		</div>
	);
}
