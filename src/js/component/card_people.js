import React from "react";
import { BsHeart } from "react-icons/bs";
import PropTypes from "prop-types";

const CardPeople = props => {
	return (
		<div className="col-sm-3 mt-2">
			<div className="card">
				<img
					className="card/-img-top w-100"
					src="https://lumiere-a.akamaihd.net/v1/images/skywalker-lightsaber-main_e9de18dc.jpeg?region=0%2C134%2C1281%2C720&width=1200"
					alt="Card image cap"
				/>
				<div className="card-body">
					<div>
						<div className="d-flex justify-content-center">
							<h5 className="card-title">{props.name}</h5>
						</div>
						<div className="d-flex flex-column p-0">
							<p className="p-0">
								Gender: {props.gender}
								<br />
								Hair Color: {props.hairColor}
								<br />
								Eye Color: {props.eyeColor}
							</p>
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
};

CardPeople.propTypes = {
	uid: PropTypes.number,
	name: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string
};

export default CardPeople;
