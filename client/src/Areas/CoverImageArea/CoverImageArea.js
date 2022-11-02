/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useState, useRef } from 'react';
import './CoverImageArea.scss';

//exports
export default function CoverImageArea(props) {
    //properties
    const customClass = props.componentData.customClass; //string
    const coverImage = props.componentData.coverImage; //obj
    const updateCoverImage = props.componentData.updateCoverImage; //any

    //states
    var [materialCoverImage, setMaterialCoverImage] = useState(coverImage); //obj
    var [coverImageSource, setCoverImageSource] = useState(coverImage.source) //string

    //refs
	const coverImageSourceRef = useRef(); //any

    //functions
    const handleCoverImageSourceChange = () => {
        const newCoverImageSource = coverImageSourceRef.current.value; //string

        if (true) { //font-end validation here
            var newCoverImage = materialCoverImage; //obj
    
            newCoverImage.source = newCoverImageSource;

            setCoverImageSource(newCoverImageSource);
            setMaterialCoverImage(newCoverImage);
            updateCoverImage(newCoverImage);

        } else {
            //validation error handler here
        }
    };

    //variables
    const componentClass = customClass ? "CoverImageArea " + customClass : "CoverImageArea"; //string

    return (
        <div className={ componentClass }>
            <div className="inner">
                <h4>Cover Image</h4>

                <input
                    ref={ coverImageSourceRef }
                    type="text"
                    value={ coverImageSource }
                    placeholder="Cover Image Source"
                    onChange={ handleCoverImageSourceChange }
                />
            </div>
        </div>
    )
}
