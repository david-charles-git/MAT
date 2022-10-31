/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InfoIconWithPopUp from "../InfoIconWithPopUp/InfoIconWithPopUp";
import ScaleInput from "../ScaleInput/ScaleInput";
import UnitInput from "../UnitInput/UnitInput";
import ValueInput from "../ValueInput/ValueInput";
import './PropertyInput.scss';

//exports
export default function PropertyInput(props) {
    //property
    const propertyIndex = props.componentData.index; //number
    const propertyGroup = props.componentData.propertyGroup; //Array<obj>
    const property = props.componentData.property; //obj
    const handlePropertyChange = props.componentData.handlePropertyChange; //any

    const propertyName = property.name; //string
    const propertyValue = property.value; //string
    const propertyDescription = property.description; //string
    const propertyType = property.type; //string
    const propertyAllowMultipleItems = property.allowMultipleItems; //bool
    const propertyOptions = property.options ? property.options : []; //Array<obj>
    const propertyUnits = property.units ? property.units : []; //Array<obj>
    const propertyScales = property.scales ? property.scales : []; //Array<obj>
    const propertyItems = property.items ? property.items : []; //Array<obj>

    //states
    var [inputPropertyItems, setInputPropertyitems] = useState([]); //Array<obj>

    //functions
    const generateBodyClass = () => {
        var bodyClass = "body"; //string

        if (propertyUnits.length > 0 && propertyScales.length > 0) {
            bodyClass += " threeColumn";

        } else if (propertyUnits.length > 0 || propertyScales.length > 0) {
            bodyClass += " twoColumn";

        }

        return bodyClass;
    };
    const handlePropertyUpdate = (newItems) => {
        if (newItems.length > 0 && propertyGroup[propertyIndex]) {
            var newPropertyGroup = propertyGroup;
    
            newPropertyGroup[propertyIndex].items = newItems;
            setInputPropertyitems(newItems);
            handlePropertyChange(newPropertyGroup);
        }
    }

    //variables
    const componentClass = "PropertyInput"; //string

    //Effects
        useEffect(() => {
            setInputPropertyitems(propertyItems);
        }, []);
    
    return (
        <div className={ componentClass }>
            <div className="inner">
                <div className="head">
                    { propertyName ? <h6>{ propertyName }</h6> : <></> }

                    <InfoIconWithPopUp componentData={ { information : propertyDescription, reference : null } } />
                </div>

                {
                    inputPropertyItems.length > 0 ? 
                        inputPropertyItems.map((item, key) => {
                            return (
                                <div key={ key } className={ generateBodyClass() }>
                                    <ValueInput componentData={
                                        {
                                            index : key,
                                            type : propertyType,
                                            options : propertyOptions,
                                            items : inputPropertyItems,
                                            item : item,
                                            updateValue : handlePropertyUpdate
                                        }
                                    } />

                                    {/* <UnitInput componentData={ {
                                        index : key,
                                        units : propertyUnits,
                                        propertyGroup : propertyGroup,
                                        item : item,
                                        updateItem : handlePropertyChange
                                    } } />

                                    <ScaleInput componentData={ {
                                        index : key,
                                        scales : propertyScales,
                                        propertyGroup : propertyGroup,
                                        item : item,
                                        updateItem : handlePropertyChange
                                    } } /> */}
                                </div>
                            )
                        })
                    :
                        <div className={ generateBodyClass() }>
                            <ValueInput componentData={
                                {
                                    index : 0,
                                    type : propertyType,
                                    options : propertyOptions,
                                    propertyGroup : propertyGroup,
                                    item : {},
                                    updateItem : handlePropertyUpdate
                                }
                            } />

                            {/* <UnitInput componentData={ {
                                index : 0,
                                units : propertyUnits,
                                propertyGroup : propertyGroup,
                                item : {},
                                updateItem : handlePropertyChange
                            } } />

                            <ScaleInput componentData={ {
                                index : 0,
                                scales : propertyScales,
                                propertyGroup : propertyGroup,
                                item : {},
                                updateItem : handlePropertyChange
                            } } /> */}
                        </div>
                }

                {
                    propertyAllowMultipleItems ? 
                        <Button componentData={ 
                            {
                                class : "",
                                copy : "Add " + propertyName,
                                type : "function",
                                link : "",
                                function : (event) => { console.log(event.currentTarget); }
                            }
                        } />
                    :
                        <></>
                }
            </div>
        </div>
    )

}
