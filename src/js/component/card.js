import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

export function Cards() {
	return (
		<div className="col-sm mt-2">
			<div className="card">
				<img
					className="card/-img-top w-100"
					src="https://lumiere-a.akamaihd.net/v1/images/skywalker-lightsaber-main_e9de18dc.jpeg?region=0%2C134%2C1281%2C720&width=1200"
					alt="Card image cap"
				/>
				<div className="card-body">
					<div>
						<div className="d-flex justify-content-center">
							<h5 className="card-title">Card title</h5>
						</div>
						<div className="d-flex flex-column">
							<p>Gender:</p>
							<p>Hair Color:</p>
							<p>Eye Color:</p>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div>
							<button type="button" className="btn btn-outline-primary">
								Learn more!
							</button>
						</div>
						<div>
							<button type="button" className="btn btn-outline-warning">
								<BsHeart />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
