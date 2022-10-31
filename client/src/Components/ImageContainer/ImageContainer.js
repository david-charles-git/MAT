/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import './ImageContainer.scss';

//exports
export default function ImageContainer(props) {
    //properties
    const imageSource = props.componentData.imageSource; //string
    const imageAlt = props.componentData.imageAlt; //string

	return (
        <>
            {
                imageSource ? 
                    <div className="ImageContainer">
                        <div className="inner">
                            <img src={ imageSource } alt={ imageAlt } />
                        </div>
                    </div>
                :
                    <></>
            }
        </>
	);
}
