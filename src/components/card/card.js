import React from "react";

import DropDown from "../dropdown/dropdown";

import { favouriteActiveIcon, favouriteInactiveIcon } from "../../assets/svg";

import { getDateTimeRange } from "../utils/helper";

import "./card.scss";

const Card = ({ info }) => {
	const {
		thumbnail,
		title,
		updated_at,
		description,
		favourite,
		allow_actions,
	} = info;

	const showFavouriteIcon = () => {
		if (favourite === false || favourite === true) return true;
	};

	return (
		<div className="card_container">
			{thumbnail && (
				<img className="card_thumbnail" src={thumbnail} alt="Card Thumbnail" />
			)}
			<div className="card_info">
				{title && <h1 className="card_heading">{title}</h1>}
				{updated_at && (
					<h6 className="card_sub_heading">
						Last edited {getDateTimeRange(updated_at)}
					</h6>
				)}
				{description && <p className="card_description">{description}</p>}
				{(showFavouriteIcon() || allow_actions) && (
					<div className="card_flex">
						{showFavouriteIcon() && (
							<img
								src={favourite ? favouriteActiveIcon : favouriteInactiveIcon}
								className="card_favourite_icon"
								alt="User favourite"
							/>
						)}
						{allow_actions && (
							<DropDown>
								<button className="dropdown-item" aria-label="Save">
									Save
								</button>
								<button className="dropdown-item" aria-label="Edit">
									Edit
								</button>
								<button className="dropdown-item" aria-label="Preview">
									Preview
								</button>
							</DropDown>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
