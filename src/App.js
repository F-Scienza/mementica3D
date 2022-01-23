import './App.css';
import { CarouselCards } from './Components/CarouselCards';
import { Slider } from './Components/Slider';
import { Header } from './Components/Header'
function App() {
    return (
			<div className="App">
				<Header />
				<Slider />
				<CarouselCards />
			</div>
		);
}

export default App;
