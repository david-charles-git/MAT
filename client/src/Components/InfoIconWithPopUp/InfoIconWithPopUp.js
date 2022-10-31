/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useEffect, useRef, useState } from "react";
import './InfoIconWithPopUp.scss';

//exports
export default function InfoIconWithPopUp(props) {
    //properties
    const information = props.componentData.information; //string
    const reference = props.componentData.reference; //string

    //states
    var [popUpIsActive, setPopUpIsActive] = useState(false); //bool
    var [infoIconContent, setInfoIconContent] = useState("i"); //string

    //refs
    const popUpRef = useRef(); //any

    //functions
    const handlePopUpOpenClose = (event) => {
        const elmt = event.currentTarget ? event.currentTarget : event.target; //any
        
        if (popUpIsActive) {
            closePopUp(elmt);

        } else {
            openPopUp(elmt);

        }
    };
    const openPopUp = (elmt) => {
        const popUp = popUpRef.current; //any

        if (popUp && elmt) {
            const elmtHeight = elmt.clientHeight; //number
            const bodyRectangle = document.body.getBoundingClientRect(); //any
            const elemRectangle = elmt.getBoundingClientRect(); //any
            const offsetTop = elemRectangle.top - bodyRectangle.top; //number
            const offsetRight = Math.abs(elemRectangle.right - bodyRectangle.right); //number
            const windowScrollY = window.scrollY; //number
            
            popUp.style.top = (offsetTop + elmtHeight + 15 - windowScrollY) + "px";
            popUp.style.right = (offsetRight - 10) + "px";

            setInfoIconContent("x");
            setPopUpIsActive(true);
        }
    };
    const closePopUp = (elmt) => {
        const popUp = popUpRef.current; //any

        if (popUp && elmt) {
            popUp.style.top = "unset";
            popUp.style.right = "unset";

            setInfoIconContent("i");
            setPopUpIsActive(false);
        }
    };

    //Effects
        //add scroll listener
        useEffect(() => {
            window.addEventListener("scroll", closePopUp);

        }, []);

    //variables
    const popUpClass = popUpIsActive ? "infoPopUp active" : "infoPopUp"; //string

	return (
		<>
            {
                information || reference ?
                    <>
                        <div className="infoIcon" onClick={ handlePopUpOpenClose }>
                            <p>{ infoIconContent }</p>
                        </div>

                        <div ref={ popUpRef } className={ popUpClass }>
                            <div className="inner">
                                {
                                    information ?
                                        <p>{ information }</p>
                                    :
                                        <></>
                                }

                                {
                                    reference ?
                                        <p>
                                            <a href={ reference } rel="noreferrer" target="_blank">Documentiaion</a>
                                        </p>
                                    :
                                        <></>
                                }
                            </div>
                        </div>
                    </>
                :

                    <></>
            }
        </>
	);
}
