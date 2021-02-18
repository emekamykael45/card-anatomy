import React from "react";

import Card from "../../components/card/card";

import { cardData } from "../../mock-data";

import "./components-page.scss";

const ComponentsPage = () => (
	<div className="page components_page">
		<section className="cards_section">
			{cardData?.map((item, i) => (
				<Card key={i} info={item} />
			))}
		</section>
	</div>
);

export default ComponentsPage;
