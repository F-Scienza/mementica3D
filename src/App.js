import './App.css';
import { Slider } from './Components/Slider';
import { Header } from './Components/Header'
import { Carousel } from './Components/Carousel/Index';
function App() {
    return (
		<div className="App">
			<Header />
			<Slider />
			<Carousel/>
		</div>
	);
}

export default App;
