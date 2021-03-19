import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/card";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h2 className="text-white">Characters</h2>
			<div className="row">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
};
