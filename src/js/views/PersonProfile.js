import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/personprofile.scss";

export const PersonProfile = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	return (
		<div className="row">
			<div className="col-12 mt-3">
				{store.characters.map(item => {
					// console.log(item.id);
					// console.log("<<ID-People>> " + id);
					if (item.id === parseInt(id, 10)) {
						console.log("existe");
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
											Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to
											become one of the greatest Jedi the galaxy has ever known. Along with his
											friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered
											the truth of his parentage, and ended the tyranny of the Sith. A generation
											later, the location of the famed Jedi master was one of the galaxy’s
											greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the
											Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s
											pleas for help. But his solitude would be interrupted – and Luke Skywalker
											had one final, momentous role to play in the struggle between good and evil.
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
											Bith Year <br />
											{item.birth_year}
										</p>
									</div>
									<div className="p-2 text-danger">
										<p>
											Gender <br />
											{item.gender}
										</p>
									</div>
									<div className="p-2 text-danger">
										<p>
											Height <br />
											{item.height}
										</p>
									</div>
									<div className="p-2 text-danger">
										<p>
											Skin Color
											<br />
											{item.skin_color}
										</p>
									</div>
									<div className="p-2 mr-2 text-danger ">
										<p>
											Eye Color
											<br />
											{item.eye_color}
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
