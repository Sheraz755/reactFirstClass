import { useState, useEffect } from "react";
import "./App.css";
import FirstComponent from "./FirstComponent/FirstComponent";
import NavBar from "./FirstComponent/NavBar";
import HeroSection from "./HeroSection";

const App = () => {
	// const [stop, setStop] = useState(true);
	// const [name, setName] = useState(0);
	// useEffect(() => {
	// 	const updateName = () => {
	// 		setName(name + 1);
	// 		setStop(false);
	// 	};
	// 	updateName();
	// }, [stop]);
	// const myName = "sheraz";
	return (
		<div>
			<NavBar />
			<HeroSection />
		</div>
	);
};

export default App;
//virtual dom
