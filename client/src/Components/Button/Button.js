/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { Link } from 'react-router-dom';
import './Button.scss';

//exports
export default function Button(props) {
    //properties
    const buttonClass = props.componentData.class; //string
    const buttonCopy = props.componentData.copy; //string
    const buttonType = props.componentData.type; //string
    const buttonLink = props.componentData.link; //string
    const buttonFunction = props.componentData.function; //any

    //functions
    const generateButton = () => {
        if (buttonType === "link") {
            return (
                <Link to={ buttonLink } >{ buttonCopy }</Link>
                
            )

        } else if (buttonType === "function") {
            return (
                <p onClick={ buttonFunction }>{ buttonCopy }</p>

            )
        } else {
            return <></>
        }
    };

    //variables
    const componentClass = "Button"; //string
    const componentInnerClass = buttonClass ? "inner " + buttonClass : "inner"; //string

    return (
        <div className={ componentClass }> 
            <div className={ componentInnerClass }>
                { generateButton() }
            </div>
        </div>
    )
}
