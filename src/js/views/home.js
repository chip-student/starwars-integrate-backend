import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CardPeople from "../component/card_people";
import CardPlanet from "../component/card_planet";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div>
				<div className="mt-3 mb-3">
					<h2 className="text-white">Characters</h2>
				</div>
				<div className="row">
					<div className="row flex-row flex-nowrap overflow-auto">
						{store.characters.map((item, index, myArry) => {
							// console.log(myArry);
							// console.log(item.result.properties.gender);
							return (
								<CardPeople
									key={item.result.uid}
									id={item.result.uid}
									name={item.result.properties.name}
									gender={item.result.properties.gender}
									hairColor={item.result.properties.hair_color}
									eyeColor={item.result.properties.eye_color}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div>
				<div className="mt-3 mb-3">
					<h2 className="text-white">Planets</h2>
				</div>
				<div className="row">
					<div className="row flex-row flex-nowrap overflow-auto">
						{store.planets.map((item, index, myArry) => {
							// console.log(myArry);
							// console.log(item.result.properties.name);
							return (
								<CardPlanet
									key={item.result.uid}
									id={item.result.uid}
									name={item.result.properties.name}
									population={item.result.properties.population}
									terrain={item.result.properties.terrain}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
