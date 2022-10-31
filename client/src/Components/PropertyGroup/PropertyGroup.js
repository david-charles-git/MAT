/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

//imports
import Button from "../Button/Button";
import InfoIconWithPopUp from "../InfoIconWithPopUp/InfoIconWithPopUp";
import PropertyInput from "../PropertyInput/PropertyInput";
import './PropertyGroup.scss';

//exports
export default function PropertyGroup(props) {
    //properties
    const groupID = props.componentData.ID;
    const groupName = props.componentData.name;
    const groupAllowMultiple = props.componentData.allowMultiple;
    const groupDescription = props.componentData.description;
    const dataGroup = props.componentData.dataGroup; //Array<obj>

    if (dataGroup) {
        //variables
        const componentClass = "PropertyGroup"; //string
        
        return (
            <div className={ componentClass }>
                <div className="inner">
                    {/* <div className="head">
                        { groupName ? <h4>{ groupName }</h4> : <></> }

                        <InfoIconWithPopUp componentData={ { information : groupDescription, reference : null } } />
                    </div> */}

                    <div className="body"> 
                        {
                            dataGroup.length > 0 ?
                                dataGroup.map((group, key) => {
                                    const dataGroupKeys = Object.keys(group); //Array<string>
                
                                    if (dataGroupKeys.length > 0) {
                                        return (
                                            <div key={ key } className="group">
                                                {
                                                    dataGroupKeys.map((dataKey, index) => {
                                                        if (dataKey === "ID") {
                                                            return null
                            
                                                        } else {
                                                            const dataObject = group[dataKey]; //obj

                                                            return <PropertyInput key={ index } componentData={ { dataObject : dataObject } } />
                                                        }
                                                    })
                                                }
                                            </div>
                                        )

                                    } else {
                                        return null
                                    }
                                })
                            :
                                <p>No Data Groups</p>
                        }
                    </div>

                    {
                        groupAllowMultiple ? 
                            <Button componentData={
                                {
                                    class : "",
                                    copy : "Add Group",
                                    type : "function",
                                    link : "",
                                    function : (event) => { console.log(event.currentTarget) }
                                }
                            }/>
                        :
                            <></>
                    }
                </div>
            </div>
        )

    } else {
        return (
            <p>Data Group Does Not exist</p>
        )
    }
}
