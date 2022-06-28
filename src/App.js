import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import HomePage from "./pages/HomePage";
import "../src/Styles/main.css";

function App() {
	return (
		<GlobalProvider>
			<HomePage />
		</GlobalProvider>
	);
}

export default App;
