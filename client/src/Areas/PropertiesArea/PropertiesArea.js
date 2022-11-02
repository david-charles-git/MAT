/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useEffect, useState } from 'react';
import PropertyInput from '../../Components/PropertyInput/PropertyInput';
import './PropertiesArea.scss';

//exports
export default function PropertiesArea(props) {
    //properties
    const customClass = props.componentData.customClass; //string
    const property = props.componentData.property; //obj
    const updateProperty = props.componentData.updateProperty; //any

    //states
    var [materialProperty, setMaterialProperty] = useState(property);

    //functions
    const handlePropertiesChange = (updatedProperties) => {
        if (updatedProperties.length > 0) {
            const newProperties = materialProperty; //obj
            
            newProperties.properties = updatedProperties;

            setMaterialProperty(newProperties);
            updateProperty(newProperties);
        }
    };

    //variables
    const componentClass = customClass ? "PropertiesArea " + customClass : "PropertiesArea"; //string

    return (
        <div className={ componentClass }>
            <div className="inner">
                <h4>{ materialProperty.name }</h4>
                <p>{ materialProperty.description }</p>

                <div className='properties'>
                    <div className='inner'>
                        {
                            materialProperty.properties.length > 0 ?
                                materialProperty.properties.map((item, key) => {
                                    return <PropertyInput key={ key } componentData={ {
                                        index : key,
                                        items : materialProperty.properties,
                                        item : item,
                                        updateItems : handlePropertiesChange
                                    } } />
                                })
                            :
                                <></>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
