import "./App.css";
import FormWithYup from "./components/form-with-yup";
import FormWithoutYup from "./components/form-without-yup";

function App() {
	return (
		<div className="App">
			{/* <FormWithoutYup /> */}
			<FormWithYup />
		</div>
	);
}

export default App;
