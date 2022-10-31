/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import './Grid.scss';

//exports
export default function Grid(props) {
    //properties
    const customClass = props.componentData.customClass; //string
    const numberOfColumns = props.componentData.numberOfColumns; //number

    //variables
    const componentClass = "Grid"; //string
    const componentInnerClass = customClass ? "inner " + customClass : "inner"; //string

	return (
		<div className={ componentClass }>
            <div className={ componentInnerClass } style={ { gridTemplateColumns : "repeat(" + numberOfColumns + ", 1fr)" } }>
                { props.children }
            </div>
		</div>
	);
}
