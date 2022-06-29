import React, { useState } from "react";
import { GlobalProvider } from "./trash/context/GlobalState";
import HomePage from "./pages/HomePage";
import "../src/Styles/main.css";
import { UserContext } from "./context/UserContext";

function App() {
	const [saldo, setSaldo] = useState(0);
	const [updateSaldo, setUpdateSaldo] = useState(0);
	const [plusmin, setPlusmin] = useState("+");
	const [data, setData] = useState({
		Expanse: [],
		Income: [],
	});

	return (
		<UserContext.Provider
			value={{
				saldo,
				setSaldo,
				updateSaldo,
				setUpdateSaldo,
				plusmin,
				setPlusmin,
				data,
				setData,
			}}
		>
			<GlobalProvider>
				<HomePage />
			</GlobalProvider>
		</UserContext.Provider>
	);
}

export default App;
