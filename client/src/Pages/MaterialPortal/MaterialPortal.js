/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './MaterialPortal.scss';

import Carousel from "../../Components/Carousel/Carousel";
import ImageContainer from "../../Components/ImageContainer/ImageContainer";
import Grid from "../../Components/Grid/Grid";
import Button from "../../Components/Button/Button";

export default function MaterialPortal(props) {
	//properties
	const userName = props.pageData.userName; //string

	//states
	var [firstName, setFirstName] = useState(""); //string
	var [lastName, setLastName] = useState(""); //string
	var [contributions, setContributions] = useState([]); //Array<obj>

	//variables
	var introContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum id libero vitae vehicula. Donec interdum nec purus eget condimentum. Nulla et porttitor turpis. Ut suscipit dolor eget sapien egestas mattis. Cras vehicula efficitur sem, id luctus arcu lobortis ut. Integer at laoreet massa. Quisque vitae nibh metus. Quisque pharetra porttitor arcu, eget mollis lectus dignissim id. Etiam eget nunc dignissim, scelerisque ligula et, sollicitudin nulla. Aliquam erat volutpat. Nulla efficitur blandit dui, nec auctor risus interdum a. Mauris aliquet ullamcorper massa, eget mattis mauris. Cras fringilla id risus quis fringilla. Vestibulum scelerisque blandit dolor non congue. Etiam et nisl vitae neque rutrum accumsan sit amet sed nisl."; //string

	//Effects
	//get user contributions
	useEffect(() => {
		axios.get("http://localhost:5000/materials/findByCreatorUserName/" + userName)
			.then((res) => { setContributions(res.data); })
	}, [userName]);

	//get user names
	useEffect(() => {
		axios.get("http://localhost:5000/users/findByUserName/" + userName)
			.then((res) => {
				const resData = res.data[0]; //obj

				if (resData) {
					setFirstName(resData.firstName);
					setLastName(resData.lastName);
				}
			})
	}, [userName]);

	return (
		<div className="MaterialPortal"> 
            <div className="inner">
                <div className='introContainer'>
					<div className='inner'>
						<h4>Welcome Back, { firstName } { lastName }</h4>

						<p>{ introContent }</p>	
					</div>	
				</div> 

				{
					contributions.length > 0 ?
						<div className='MaterialContribuitionsContainer'>
							<div className='inner'>
								<h4>Manage Your Contributions</h4>

								<Carousel componentData={ { customClass : "MaterialContribuitions", numberOfColumns : 4 } } >
									{
										contributions.map((contribution, key_1) => {
											const itemClassName = contribution.published ? "item published" : "item";

											return (
												<div key={ key_1 } className={ itemClassName }>
													<Link to={ "/materials/edit/?materialRef=" + contribution.ref } >
														<ImageContainer componentData={ {
															imageSource : contribution.coverImage.source,
															imageAlt : "Material: " + contribution.name
														} } />

														<p>{ contribution.name }</p>

														<p>{ contribution.ref }</p>

														<p>{ contribution.details.authors.map((author, key_2) => { return <span key={ key_2 }>{ author }</span> }) }</p>
													</Link>
												</div>
											)
										})
									}
								</Carousel>
							</div>
						</div>
					:
						<></>
				}

				<div className='MaterialCreationCotnainer'>
					<div className='inner'>
						<h4>Make New Contribution</h4>

						<Grid componentData={ { customClass : "MaterialCreation", numberOfColumns : 1 } }>
							<Button componentData={ {
								class : "createNewButton",
								copy : "Create New Recipe",
								type : "link",
								link : "materials/create",
								function : () => {}
							} } />
						</Grid>
					</div>
				</div>
            </div>		
		</div>
	);
}
