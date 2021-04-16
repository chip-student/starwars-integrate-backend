import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/planetprofile.scss";

export const PlanetProfile = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	return (
		<div className="row">
			<div className="col-12 mt-3">
				{store.planets.map(item => {
					if (item.id === parseInt(id, 10)) {
						// console.log(item.result.id);
						return (
							<div key={item.id} className="card">
								<div className="card-horizontal">
									<div className="img-square-wrapper mt-2">
										<img
											className=""
											src="http://via.placeholder.com/400x300"
											alt="Card image cap"
										/>
									</div>
									<div className="card-body">
										<h4 className="card-title">{item.name}</h4>

										<p>
											Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim.
											In the days of the Empire and the Republic, many settlers scratched out a
											living on moisture farms, while spaceport cities such as Mos Eisley and Mos
											Espa served as home base for smugglers, criminals, and other rogues. Anakin
											Skywalker and Luke Skywalker both once called Tatooine home, and Obi-Wan
											Kenobi spent years in hiding there. Once known as a hive of scum and
											villainy, Tatooine has become quieter since the end of the Galactic Civil
											War.
										</p>
									</div>
								</div>

								<hr className="bg-danger h-25" />
								<div className="d-flex justify-content-between mt-3">
									<div className="p-2 ml-2 text-danger">
										<p>
											Name <br />
											{item.name}
										</p>
									</div>
									<div className="p-2 text-danger">
										<p>
											Climate <br />
											{item.climate}
										</p>
									</div>
									<div className="p-2 text-danger">
										<p>
											Population <br />
											{item.population}
										</p>
									</div>
									<div className="p-2 text-danger">
										<p>
											Orbital Period <br />
											{item.orbital_period}
										</p>
									</div>
									<div className="p-2 text-danger">
										<p>
											Rotation Period
											<br />
											{item.rotation_period}
										</p>
									</div>
									<div className="p-2 mr-2 text-danger ">
										<p>
											Diameter
											<br />
											{item.diameter}
										</p>
									</div>
								</div>
								<div className="p-2">
									<Link to="/">
										<button className="btn btn-primary m-1">Back home</button>
									</Link>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};
