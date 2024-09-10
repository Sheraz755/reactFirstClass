import "./App.css";
import FirstComponent from "./FirstComponent/FirstComponent";

const App = () => {
	//props full form property
	const myName = "sheraz";
	return (
		<div>
			<FirstComponent name={myName} />
		</div>
	);
};

export default App;
//virtual dom
