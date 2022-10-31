/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.scss';
//import PropertyForm from './Components/PropertyForm/PropertyForm';
import MaterialPortal from "./Pages/MaterialPortal/MaterialPortal";
import MaterialCreate from "./Pages/MaterialCreate/MaterialCreate";
import MaterialEdit from "./Pages/MaterialEdit/MaterialEdit";
import MaterialView from "./Pages/MaterialView/MaterialView";
import MaterialFork from "./Pages/MaterialFork/MaterialFork";

//exports
export default function App() {
	//variables
	/*const allMaterialProperties = [
		//physical properties
		{
			name : "Physical Properties",
			description : "some description",
			created : "",
			edits : [
				
			],
			authors : [],
			contributers : [],
			
			propertyDataFiles : {
				name : "",
				allowFiles : false,
				fileTemplate : "",
				files : [],
				fileTypes : [],
				geratefieldsFromCSV : false,
			},
			
			propertyDataGroups : [
				{
					ID : 0,
					name : "Physical Properties",
					description : "some description",
					allowMultiple : true,
					duplicateFields : [],
					dataGroup : [
						{
							ID : 0,
							color : {
								allowMultiple : true,
								duplicateFields : [],
								name : "color",
								description : "this is a description",
								type : "text",
								values : [],
								units : [],
								scales : [],        
								items : [
									{
										ID : 0, 
										isRange : false,
										value : {
											ID : 0,
											name : "Dark Green",
											value :"Dark Green"
										},
										minValue : 0,
										maxValue : 0,
										deviation : 0,
										standardFormIndex : 0,
										unit : {},
										scale : {},
										edits : [],
									}
								] 
							},
							texture : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Texture", 
								description : "this is a description",
								type : "text",           
								values : [],
								units : [],
								scales : [],        
								items : [],
							},
							odour : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Odour", 
								description : "this is a description",
								type : "text",           
								values : [],
								units : [],
								scales : [],        
								items : [],
							},
							density : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Density",
								description : "this is a description",
								type : "number", 
								values : [],
								units : [
									{
										ID : 0,
										name : "g/cm3",
										value : "g/cm3",
										reference : "reference",
										information : "some information",
									}
								],
								scales : [],       
								items : [],
							},
							size : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Size",
								description : "this is a description",
								type : "number", 
								values : [],
								units : [
									{
										ID : 0,
										name : "cm",
										value : "cm",
										reference : "",
										information : "",
									}
								],
								scales : [],       
								items : [],
							},
							thickness : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Thickness",
								description : "a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "cm",
										value : "cm",
										reference : "ref",
										information : "infomation",
									},
									{
										ID : 1,
										name : "mm",
										value : "mm",
										reference : "",
										information : "",
									},
									{
										ID : 2,
										name : "um",
										value : "um",
										reference : "",
										information : "",
									},
								],
								scales : [], 
								items : [],
							},
							crossSection : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Cross Section",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "%",
										value : "%",
										reference : "",
										information : "",
									}
								],
								scales : [],     
								items : [],
							},
							length : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Length",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "cm",
										value : "cm",
										reference : "",
										information : "",
									},
									{
										ID : 1,
										name : "mm",
										value : "mm",
										reference : "",
										information : "",
									}
								],
								scales : [],    
								items : [],
							},
							crystalinity : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Crystalinity",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "%",
										value : "%",
										reference : "",
										information : "",
									}
								],
								scales : [],    
								items : [],
							},
							viscosity : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Viscosity",
								description : "this is a description",
								type : "number",
								values : [],
								valueOptions : {},
								units : [
									{
										ID : 0,
										name : "MPa",
										value : "MPa",
										reference : "",
										information : "",		
									},
									{
										ID : 1,
										name : "Pa.s",
										value : "Pa.s",
										reference : "",
										information : "",		
									},
									{
										ID : 2,
										name : "mPa.s",
										value : "mPa.s",
										reference : "",
										information : "",
									},
									{
										ID : 3,
										name : "cP",
										value : "cP",
										reference : "",
										information : "",
									}
								],
								scales : [],   
								items : [],
							},
							boilingPoint : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Boiling Point",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "degC",
										value : "degC",
										reference : "",
										information : "",
									}
								],
								scales : [], 
								items : [],
							},
							meltingPoint : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Melting Point",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "degC",
										value : "degC",
										reference : "",
										information : "",
									}
								],
								scales : [], 
								items : [],
							},
							waterSolubility : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Water Solubility",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "%",
										value : "%",
										reference : "",
										information : "",
									}
								],
								scales : [], 
								items : [],
							},
							moistureContent : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Moisture Content",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "%",
										value : "%",
										reference : "",
										information : "",
									}
								],
								scales : [], 
								items : [],
							},
							gelContent : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Gel Content",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "%",
										value : "%",
										reference : "",
										information : "",
									}
								],
								scales : [], 
								items : [],
							},
							gelPoint : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Gel Point",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "%",
										value : "%",
										reference : "",
										information : "",
									}
								],
								scales : [], 
								items : [],
							},
							rockwellHardnessTest : {
								allowMultiple : false,
								duplicateFields : [],
								name : "Rockwell Hardness Tast",
								description : "this is a description",
								type : "number",
								values : [],
								units : [
									{
										ID : 0,
										name : "HR",
										value : "HR",
										reference : "",
										information : "",
									}
								],
								scales : [
									{
										ID : 0,
										name : "A",
										value : "A",
										reference : "",
										information : "",		
									},
									{
										ID : 1,
										name : "B",
										value : "B",
										reference : "",
										information : "",		
									},
									{
										ID : 2,
										name : "C",
										value : "C",
										reference : "",
										information : "",		
									},
									{
										ID : 3,
										name : "D",
										value : "D",
										reference : "",
										information : "",		
									},
									{
										ID : 4,
										name : "E",
										value : "E",
										reference : "",
										information : "",		
									},
									{
										ID : 5,
										name : "F",
										value : "F",
										reference : "",
										information : "",		
									},
									{
										ID : 6,
										name : "G",
										value : "G",
										reference : "",
										information : "",		
									},
									{
										ID : 7,
										name : "H",
										value : "H",
										reference : "",
										information : "",		
									},
									{
										ID : 8,
										name : "K",
										value : "K",
										reference : "",
										information : "",		
									},
									{
										ID : 9,
										name : "L",
										value : "L",
										reference : "",
										information : "",		
									},
									{
										ID : 10,
										name : "M",
										value : "M",
										reference : "",
										information : "",		
									},
									{
										ID : 11,
										name : "P",
										value : "P",
										reference : "",
										information : "",		
									},
									{
										ID : 12,
										name : "R",
										value : "R",
										reference : "",
										information : "",
									},
									{
										ID : 13,
										name : "S",
										value : "S",
										reference : "",
										information : "",
									},
									{
										ID : 14,
										name : "Y",
										value : "Y",
										reference : "",
										information : "",		
									},
									{
										ID : 15,
										name : "V",
										value : "V",
										reference : "",
										information : "",
									},
								],
								items : []
							},
						},
					],
				}
			],
		},
		// //mechanical Properties - Tension
		// {
		// 	name : "Mechanical Properties - Tension",
		// 	description : "some description",
		// 	created : "",
		// 	edits : [],
		// 	authors : [],
		// 	contributers : [],
			
		// 	propertyDataFiles : {
		// 		name : "Upload Raw Data & Sample Files",
		// 		allowFiles : true,
		// 		fileTemplate : "",
		// 		files : [],
		// 		fileTypes : [],
		// 		geratefieldsFromCSV : false,
		// 	},
			
		// 	propertyDataGroups : [
		// 		{
		// 			ID : 0,
		// 			name : "Mechanical Properties - Tension",
		// 			description : "some description",
		// 			allowMultiple : false,
		// 			duplicateFields : [
		// 				"teperatureDuringTest",
		// 				"humidityDuringTest"
		// 			],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					teperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "this is a description", 
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						scales : [],
		// 						items : [],
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "this is a description",   
		// 						type : "number",            
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						scalea : [],
		// 						items : []
		// 					},
		// 					loadCell : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Load Cell",     
		// 						description : "this is a description", 
		// 						type : "number",             
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "mV / V",
		// 								value : "mV / V",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					geometryOfSample : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Geometry of Sample",  
		// 						description : "this is a description",  
		// 						type : "select",         
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Dog Bone",
		// 								value : "dogBone",										
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Strip",
		// 								value : "strip",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used",  
		// 						description : "this is a description", 
		// 						type : "string",          
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied",  
		// 						description : "this is a description", 
		// 						type : "select",          
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					tensileStrengthUltimate : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Tensile Strength, Ultimate",
		// 						description : "this is a description",     
		// 						type : "number",        
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "Mpa",
		// 								value : "Mpa",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					yieldStrength : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Yield Strength",    
		// 						description : "this is a description",         
		// 						type : "number",        
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "Mpa",
		// 								value : "Mpa",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					youngsModulus : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Toung's Modulus",    
		// 						description : "this is a description",         
		// 						type : "number",        
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "Mpa",
		// 								value : "Mpa",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Gpa",
		// 								value : "Gpa",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					elongationAtBreak : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Elongation At Break",  
		// 						description : "this is a description",           
		// 						type : "number",        
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "%",
		// 								value : "%",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					elongationAtYield : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Elongation At Yield",   
		// 						description : "this is a description",            
		// 						type : "number",        
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "%",
		// 								value : "%",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// },
		// //mechanical Properties - Compression
		// {
		// 	name : "Mechanical Properties - Compression",
		// 	description : "some description",
		// 	created : "",
		// 	edits : [],
		// 	authors : [],
		// 	contributers : [],
			
		// 	propertyDataFiles : {
		// 		name : "Upload Raw Data & Sample Files",
		// 		allowFiles : true,
		// 		fileTemplate : "",
		// 		files : [],
		// 		fileTypes : [],
		// 		geratefieldsFromCSV : false,
		// 	},
			
		// 	propertyDataGroups : [
		// 		{
		// 			ID : 0,
		// 			name : "Mechanical Properties - Compression",
		// 			description : "some description",
		// 			allowMultiple : false,
		// 			duplicateFields : [
		// 				"teperatureDuringTest",
		// 				"humidityDuringTest"
		// 			],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					teperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test",  
		// 						description : "this is a description", 
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						scales : [],
		// 						items : [],
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test",    
		// 						description : "this is a description", 
		// 						type : "number",            
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						scalea : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used",  
		// 						description : "this is a description", 
		// 						type : "string",          
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : [],
		// 						reference : "",
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied",  
		// 						description : "this is a description", 
		// 						type : "select",          
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					geometryOfTestingTool : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Geometry of Testing Tool", 
		// 						description : "this is a description", 
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales: [],
		// 						items : []
		// 					},
		// 					geometryOfSample : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Geometry of Sample",   
		// 						description : "this is a description", 
		// 						type : "select",         
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Dog Bone",
		// 								value : "dogBone",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Strip",
		// 								value : "strip",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					strainRate : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Strain Rate", 
		// 						description : "this is a description", 
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "%",
		// 								value : "%",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					wasPreStrainDone : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Was A Pre-Strain Done?",
		// 						description : "this is a description", 
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "True",
		// 								value : true,
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 1,
		// 								name : "False",
		// 								value : false,
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					loadOfTheTestingTool : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Load of the Testing Tool",  
		// 						description : "this is a description",   
		// 						type : "number",        
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "N",
		// 								value : "N",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					displacementOfTheSample : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Displacement of the Sample",  
		// 						description : "this is a description", 
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "m",
		// 								value : "m",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					forceVsDisplacement : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Force vs Displacement",  
		// 						description : "this is a description", 
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "%",
		// 								value : "%",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					forceVsStrain : {
		// 						allowMultiple : true,
		// 						duplicateFields : [],
		// 						name : "Force vs Strain",  
		// 						description : "this is a description", 
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "%",
		// 								value : "%",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// },
		// //chemical Properties
		// {
		// 	name : "Chemical Properties",
		// 	description : "some description",
		// 	created : "",
		// 	edits : [],
		// 	authors : [],
		// 	contributers : [],
			
		// 	propertyDataFiles : {
		// 		name : "Upload Raw Data & Sample Files",
		// 		allowFiles : true,
		// 		fileTemplate : "",
		// 		files : [],
		// 		fileTypes : [],
		// 		geratefieldsFromCSV : false,
		// 	},
			
		// 	propertyDataGroups : [
		// 		{
		// 			ID : 0,
		// 			name : "Ecotoxicity",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					ecotoxicity : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Ecotoxicity",  
		// 						description : "this is a description", 
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "ppm",
		// 								value : "ppm",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "this is a description", 
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "this is a description", 
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "this is a description", 
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "this is a description", 
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								ref : "",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "this is a description", 
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 1,
		// 			name : "Swelling Ration",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					swellingRation : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Swelling Ration", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "%",
		// 								value : "%",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 2,
		// 			name : "Flammability",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					flammability : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Flammability",   
		// 						description : "some description",
		// 						type : "number",         
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "% vol",
		// 								value : "% vol",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						info : "",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 3,
		// 			name : "Resistivity to Conductivity",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					resistivityToConductivity : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Resistivity to Conductivity",  
		// 						description : "some description",
		// 						type : "number",         
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "Ohms",
		// 								value : "Ohms",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// },
		// //thermal Properties
		// {
		// 	name : "Thermal Properties",
		// 	description : "some description",
		// 	created : "",
		// 	edits : [],
		// 	authors : [],
		// 	contributers : [],
			
		// 	propertyDataFiles : {
		// 		name : "Upload Raw Data & Sample Files",
		// 		allowFiles : true,
		// 		fileTemplate : "",
		// 		files : [],
		// 		fileTypes : [],
		// 		geratefieldsFromCSV : false,
		// 	},
			
		// 	propertyDataGroups : [
		// 		{
		// 			ID : 0,
		// 			name : "Degradation Temperature",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					degradationTemperature : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Degradation Temperature",  
		// 						description : "some description",
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 1,
		// 			name : "Glass Transition Temperature",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					glassTransitionTemperature : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Glass Transition Temperature",  
		// 						description : "some description",
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 2,
		// 			name : "Melting Temperature",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					meltingTemperature : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Melting Temperature", 
		// 						description : "some description", 
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						type : "number",     
		// 						description : "some description", 
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 3,
		// 			name : "Additional Phase Change",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					additionalPhaseChange : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Additional Phase Change",  
		// 						description : "some description",
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 4,
		// 			name : "Thermal Stability",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					thermalStability : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Thermal Stability",  
		// 						description : "some description",
		// 						type : "number",          
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// },
		// //optical Properties
		// {
		// 	name : "Optical Properties",
		// 	description : "some description",
		// 	created : "",
		// 	edits : [],
		// 	authors : [],
		// 	contributers : [],
			
		// 	propertyDataFiles : {
		// 		name : "Upload Raw Data & Sample Files",
		// 		allowFiles : true,
		// 		fileTemplate : "",
		// 		files : [],
		// 		fileTypes : [],
		// 		geratefieldsFromCSV : false,
		// 	},
			
		// 	propertyDataGroups : [
		// 		{
		// 			ID : 0,
		// 			name : "Opacity",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					oapcity : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Opacity",  
		// 						description : "some description",
		// 						type : "select",          
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Opaque",
		// 								value : "opaque",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 1,
		// 								name : "Translucent",
		// 								value : "translucent",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 2,
		// 								name : "Transparent",
		// 								value : "transparent",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					PH : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "pH",      
		// 						description : "some description",
		// 						type : "number",      
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "pH",
		// 								value : "pH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// },
		// //barrier Properties
		// {
		// 	name : "Barrier Properties",
		// 	description : "some description",
		// 	created : "",
		// 	edits : [],
		// 	authors : [],
		// 	contributers : [],
			
		// 	propertyDataFiles : {
		// 		name : "Upload Raw Data & Sample Files",
		// 		allowFiles : true,
		// 		fileTemplate : "",
		// 		files : [],
		// 		fileTypes : [],
		// 		geratefieldsFromCSV : false,
		// 	},
			
		// 	propertyDataGroups : [
		// 		{
		// 			ID : 0,
		// 			name : "Water Vapour Permeability",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					waterVapourPermeability : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Water Vapour Permeability",   
		// 						description : "some description",
		// 						type : "number",         
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "g.m / m2.Pa.s",
		// 								value : "g.m / m2.Pa.s",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			ID : 1,
		// 			name : "Relative Gas Permeability",
		// 			description : "some description",
		// 			allowMultiple : true,
		// 			duplicateFields : [],
		// 			dataGroup : [
		// 				{
		// 					ID : 0,
		// 					relativeGasPermeability : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Relative Gas Permeability",   
		// 						description : "some description",
		// 						type : "number",         
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "g.mm / m2h.kPa",
		// 								value : "g.mm / m2h.kPa",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					temperatureDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Temperature During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						valueOptions : {},
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "degC",
		// 								value : "degC",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					humidityDuringTest : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Humidity During Test", 
		// 						description : "some description",
		// 						type : "number",           
		// 						values : [],
		// 						units : [
		// 							{
		// 								ID : 0,
		// 								name : "RH",
		// 								value : "RH",
		// 								reference : "reference",
		// 								information : "some information",
		// 							}
		// 						],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					machineUsed : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Machine Used", 
		// 						description : "some description",
		// 						type : "string",           
		// 						values : [],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 					standardApplied : {
		// 						allowMultiple : false,
		// 						duplicateFields : [],
		// 						name : "Standard Applied", 
		// 						description : "some description",
		// 						type : "select",           
		// 						values : [
		// 							{
		// 								ID : 0,
		// 								name : "Standard One",
		// 								value : "s1",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Two",
		// 								value : "s2",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 							{
		// 								ID : 0,
		// 								name : "Standard Three",
		// 								value : "s3",
		// 								reference : "reference",
		// 								information : "some information",
		// 							},
		// 						],
		// 						units : [],
		// 						scales : [],
		// 						items : []
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// },
	];*/
	const userName = "David.Charles";

	return (
		<div className="App"> 
			<Router>
				<header>
					<Link to={ "/" }>
						<h4>Home</h4>
					</Link>
				</header>

				<main>
					{/* {
						allMaterialProperties.length > 0 ?
							allMaterialProperties.map((materialProperty, key) => {
								return (
									<PropertyForm key={ key } componentData={ { propertyData : materialProperty } } />
								)
							})
						:
							<></>
					} */}
					<Routes>
						<Route path="/" exact element={
							<MaterialPortal pageData={ { userName : userName } } />
						} />

						{/* <Route path="/materials" element={
							<Materials pageData={ {
								userUserName : currentUserName,
							} } />
						} /> */}

						<Route path="/materials/view" element={
							<MaterialView pageData={ { userName : userName } } />
						} />

						<Route path="/materials/create" element={
							<MaterialCreate pageData={ { userName : userName } } />
						} />

						<Route path="/materials/edit" element={
							<MaterialEdit pageData={ { userName : userName } } />
						} />

						<Route path="/materials/fork" element={
							<MaterialFork pageData={ { userName : userName } } />
						} />
					</Routes>
				</main>

				<footer />		
			</Router>	
		</div>
	);
}
