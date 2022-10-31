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
    //dataObject
    const dataObject = props.componentData.dataObject; //obj

    if (dataObject) {
        //properties
        const allowMultiple = dataObject.allowMultiple; //bool
        const duplicateFields = dataObject.duplicateFields; //Array<string>
        const dataName = dataObject.name; //string
        const description = dataObject.description; //string
        const dataType = dataObject.type; //string
        const values = dataObject.values; //Array<obj>
        const units = dataObject.units; //Array<obj>
        const scales = dataObject.scales; //Array<obj>
        const items = dataObject.items; //Array<obj>

        //functions
        const generateBodyClass = () => {
            var bodyClass = "body"; //string

            if (units.length > 0 && scales.length > 0) {
                bodyClass += " threeColumn";

            } else if (units.length > 0 || scales.length > 0) {
                bodyClass += " twoColumn";

            }

            return bodyClass;
        };

        //variables
        const componentClass = "PropertyInput"; //string
        
        return (
            <div className={ componentClass }>
                <div className="inner">
                    <div className="head">
                        { dataName ? <h6>{ dataName }</h6> : <></> }

                        <InfoIconWithPopUp componentData={ { information : description, reference : null } } />
                    </div>

                    {
                        items.length > 0 ? 
                            items.map((item, key) => {
                                return (
                                    <div key={ key } className={ generateBodyClass() }>
                                        <ValueInput componentData={
                                            {
                                                dataType : dataType,
                                                values : values,
                                                currentIsRange : item.isRange,
                                                currentValue : item.value,
                                                currentMinValue : item.minValue,
                                                currentMaxValue : item.maxValue,
                                                currentDeviation : item.deviation,
                                                currentStandardFormIndex : item.standardFormIndex
                                            }
                                        } />

                                        <UnitInput componentData={ { units : units, currentUnit : item.unit } } />

                                        <ScaleInput componentData={ { scales : scales, currentScale : item.scale } } />
                                    </div>
                                )
                            })
                        :
                            <div className={ generateBodyClass() }>
                                <ValueInput componentData={
                                    {
                                        dataType : dataType,
                                        values : values,
                                        currentIsRange : null,
                                        currentValue : null,
                                        currentMinValue : null,
                                        currentMaxValue : null,
                                        currentDeviation : null,
                                        currentStandardFormIndex : null
                                    }
                                } />

                                <UnitInput componentData={ { units : units, currentUnit : null } } />

                                <ScaleInput componentData={ { scales : scales, currentScale : null } } />
                            </div>
                    }

                    {
                        allowMultiple ? 
                            <Button componentData={ 
                                {
                                    class : "",
                                    copy : "Add Property",
                                    type : "function",
                                    link : "",
                                    function : (event) => { console.log(event.currentTarget, "Dup Fields: " + duplicateFields) }
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
