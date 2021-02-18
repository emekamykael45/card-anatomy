import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import ComponentsPage from "./pages/components-page/components-page";

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={ComponentsPage} />
			<Route path="*" component={() => <Redirect to="/" />} />
		</Switch>
	</Router>
);

export default App;
