/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import InfoIconWithPopUp from "../InfoIconWithPopUp/InfoIconWithPopUp";
import PropertyGroup from "../PropertyGroup/PropertyGroup";
import './PropertyForm.scss';

//exports
export default function PropertyForm(props) {
    //properties
    const propertyData = props.componentData.propertyData; //obj

    if (propertyData) {
        //properties
        const propertyName = propertyData.name; //string
        const propertyDescription = propertyData.description; //string
        const propertyFileData = propertyData.propertyDataFiles; //obj
        const propertyDataGroups = propertyData.propertyDataGroups; //Array<obj>

        //variables
        const componentClass = "PropertyForm"; //string

        return (
            <div className={ componentClass }>  
                <div className="inner">
                    <div className="head">
                        { propertyName ? <h4>{ propertyName }</h4> : <></> }

                        <InfoIconWithPopUp componentData={ { information : propertyDescription, reference : null } } />
                    </div>

                    <div className="body">
                        { Object.keys(propertyFileData).length > 0 ? <p>Add File component here</p> : <></> }

                        {
                            propertyDataGroups.length > 0 ?
                                propertyDataGroups.map((dataGroup, key) => {
                                    return <PropertyGroup key={ key } componentData={ dataGroup } />
                                })
                            :
                                <></>
                        }
                    </div>
                </div>
            </div>
        )

    } else {
        return <p>No Property Data Found</p>

    }
}
