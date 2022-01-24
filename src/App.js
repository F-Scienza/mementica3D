import './App.css';
import { CarouselCards } from './Components/CarouselCards';
import { Slider } from './Components/Slider';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer/Index';
function App() {
    return (
			<div className="App">
				<Header />
				<Slider />
				<CarouselCards />
				<Footer />
			</div>
		);
}

export default App;
