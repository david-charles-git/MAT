/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useState } from "react";
import './Carousel.scss';

//exports
export default function Carousel(props) {
    //properties
    const customClass = props.componentData.customClass; //string
    const numberOfColumns = props.componentData.numberOfColumns; //number
    const columnRatio = ( 100 / numberOfColumns ); //number
	const numberOfItems = props.children.length; //number
	const itemRatio = ( 100 / numberOfItems); //number

    //states
	var [carouselTranslateX, setCarouselTranslateX] = useState(0); //number
	var [carouselTouchValue, setCarouselTouchValue] = useState(-1); //number

    //functions
    const shiftCarouselRight = () => {
		const maxLeftValue = (-1) * itemRatio * (numberOfItems - numberOfColumns); //number
		const newLeftValue = carouselTranslateX - itemRatio; //number

		if (newLeftValue >= maxLeftValue) {
			setCarouselTranslateX(newLeftValue);

		}
	};
	const shiftCarouselLeft = () => {
		const maxRightValue = 0; //number
		const newRightValue = carouselTranslateX + itemRatio; //number

		if (newRightValue <= maxRightValue) {
			setCarouselTranslateX(newRightValue);

		}
	};
	const handleCarouselTouchStart = (event) => {
		const touchValue = event.touches[0].clientX; //number

		setCarouselTouchValue(touchValue);
	};
	const handleCarouselTouchEnd = (event) => {
		const touchValue = event.changedTouches[0].clientX; //number

		if (touchValue > carouselTouchValue) {
			shiftCarouselLeft();

		} else if (touchValue < carouselTouchValue) {
			shiftCarouselRight();
		}

		setCarouselTouchValue(touchValue);
	};

    //variables
    const componentClass = numberOfItems > numberOfColumns ? "Carousel active" : "Carousel"; //string
    const componentInnerClass = customClass ? "inner " + customClass : "inner"; //string

	return (
		<div className={ componentClass }>
            <div className={ componentInnerClass }>
                {
                    numberOfItems > numberOfColumns ? 
                        <div className="carouselButton">
                            <div className="inner" onClick={ shiftCarouselLeft }/>
                        </div>
                    :
                        <></>
                }

                <div className="outer" onTouchStart={ handleCarouselTouchStart } onTouchEnd={ handleCarouselTouchEnd } onTouchCancel={ handleCarouselTouchEnd } >
                    <div
                        className='inner'
                        style={ { 
                            gridTemplateColumns : "repeat(" + numberOfItems + ", 1fr)",
                            width : (numberOfItems * columnRatio) + "%",
                            transform : "translateX(" + carouselTranslateX + "%)"
                        }}
                    >
                        { props.children }
                    </div>
                </div>

                {
                    numberOfItems > numberOfColumns ? 
                        <div className="carouselButton">
                            <div className="inner" onClick={ shiftCarouselRight }/>
                        </div>
                    :
                        <></>
                }
            </div>
		</div>
	);
}
