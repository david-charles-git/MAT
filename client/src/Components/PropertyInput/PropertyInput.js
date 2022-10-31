/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import Button from "../Button/Button";
import InfoIconWithPopUp from "../InfoIconWithPopUp/InfoIconWithPopUp";
import ScaleInput from "../ScaleInput/ScaleInput";
import UnitInput from "../UnitInput/UnitInput";
import ValueInput from "../ValueInput/ValueInput";
import './PropertyInput.scss';

//exports
export default function PropertyInput(props) {
    //property
    const propertyGroup = props.componentData.propertyGroup; //Array<obj>
    const property = props.componentData.property; //obj
    const handlePropertyChange = props.componentData.handlePropertyChange; //any

    if (property) {
        //properties
        const propertyName = property.name; //string
        const propertyValue = property.value; //string
        const propertyDescription = property.description; //string
        const propertyType = property.type; //string
        const propertyAllowMultipleItems = property.allowMultipleItems; //bool
        const propertyOptions = property.options; //Array<obj>
        const propertyUnits = property.units; //Array<obj>
        const propertyScales = property.scales; //Array<obj>
        const propertyItems = property.items; //Array<obj>

        //functions
        // const generateBodyClass = () => {
        //     var bodyClass = "body"; //string

        //     if (propertyUnits.length > 0 && propertyScales.length > 0) {
        //         bodyClass += " threeColumn";

        //     } else if (propertyUnits.length > 0 || propertyScales.length > 0) {
        //         bodyClass += " twoColumn";

        //     }

        //     return bodyClass;
        // };

        //variables
        const componentClass = "PropertyInput"; //string
        
        return (
            <div className={ componentClass }>
                <div className="inner">
                    <div className="head">
                        { propertyName ? <h6>{ propertyName }</h6> : <></> }

                        <InfoIconWithPopUp componentData={ { information : propertyDescription, reference : null } } />
                    </div>

                    {
                        propertyItems.length > 0 ? 
                        propertyItems.map((item, key) => {
                                return (
                                    <div key={ key } className={ "generateBodyClass" }>
                                        <ValueInput componentData={
                                            {
                                                index : key,
                                                type : propertyType,
                                                options : propertyOptions,
                                                propertyGroup : propertyGroup,
                                                item : item,
                                                updateValue : handlePropertyChange
                                            }
                                        } />

                                        <UnitInput componentData={ {
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
                                        } } />
                                    </div>
                                )
                            })
                        :
                            <div className={ "generateBodyClass" }>
                                <ValueInput componentData={
                                    {
                                        index : 0,
                                        type : propertyType,
                                        options : propertyOptions,
                                        propertyGroup : propertyGroup,
                                        item : {},
                                        updateItem : handlePropertyChange
                                    }
                                } />

                                <UnitInput componentData={ {
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
                                } } />
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

    } else {
        return (
            <p>Data Object Does Not exist</p>
        )
    }
}
