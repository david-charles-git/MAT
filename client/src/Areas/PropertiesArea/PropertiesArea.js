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
    var [areaProperties, setAreaProperties] = useState(propertyGroup);

    //functions
    const handlePropertyChange = (updatedProperties) => {
        if (updatedProperties.length > 0) {
            const newProperties = areaProperties;
            
            newProperties.properties = updatedProperties;

            setAreaProperties(newProperties);
            updatePropertyGroup(newProperties);
        }
    };

    //variables
    const componentClass = customClass ? "PropertiesArea " + customClass : "PropertiesArea"; //string

    //effects
        useEffect(() => {
            setAreaProperties(propertyGroup);
        });

    if (areaProperties.value) {
        return (
            <div className={ componentClass }>
                <div className="inner">
                    <h4>{ areaProperties.name }</h4>
                    <p>{ areaProperties.description }</p>

                    <div className='properties'>
                        <div className='inner'>
                            {
                                areaProperties.properties.length > 0 ?
                                    areaProperties.properties.map((property, key) => {
                                        return <PropertyInput key={ key } componentData={ {
                                            index : key,
                                            propertyGroup : areaProperties.properties,
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
