/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.scss';

import MaterialPortal from "./Pages/MaterialPortal/MaterialPortal";
import MaterialCreate from "./Pages/MaterialCreate/MaterialCreate";
import MaterialEdit from "./Pages/MaterialEdit/MaterialEdit";
import MaterialView from "./Pages/MaterialView/MaterialView";
import MaterialFork from "./Pages/MaterialFork/MaterialFork";

//exports
export default function App() {
	//states
	var [userName, setUserName] = useState("David.Charles"); //string

	return (
		<Router>
			<header>
				<Link to={ "/" }>
					<h4>Home</h4>
				</Link>
			</header>

			<main>
				<Routes>
					<Route path="/" exact element={
						<MaterialPortal pageData={ { userName : userName } } />
					} />

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
	);
}
