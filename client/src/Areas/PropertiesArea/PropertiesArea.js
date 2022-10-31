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
    const propertyGroup = props.componentData.propertyGroup; //obj
    const updatePropertyGroup = props.componentData.updatePropertyGroup; //any

    //states
    var [properties, setProperties] = useState({});

    //functions
    const handlePropertyChange = (updatedProperties) => {
        
        if (updatedProperties.length > 0) {
            const newProperties = {
                name : propertyGroup.name,
                value : propertyGroup.value,
                description : propertyGroup.description,
                properties : updatedProperties
            };

            setProperties(newProperties);
            updatePropertyGroup(newProperties);
        }
    };

    //variables
    const componentClass = customClass ? "PropertiesArea " + customClass : "PropertiesArea"; //string

    //effects
        useEffect(() => {
            setProperties(propertyGroup);
        }, [propertyGroup]);

    if (properties.value) {
        return (
            <div className={ componentClass }>
                <div className="inner">
                    <h4>{ properties.name }</h4>
                    <p>{ properties.description }</p>

                    <div className='properties'>
                        <div className='inner'>
                            {
                                properties.properties.length > 0 ?
                                    properties.properties.map((property, key) => {
                                        return <PropertyInput key={ key } componentData={ {
                                            propertyGroup : properties.properties,
                                            property : property,
                                            handlePropertyChange : handlePropertyChange
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
    } else {
        return <></>
    }
}
