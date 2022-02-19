import './App.css';
import { CarouselCards } from './Components/CarouselCards';
import { Slider } from './Components/Slider';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer/Index';
import { CategoryCards } from './Components/CategoryCards';
function App() {
    return (
			<div className="App">
				<Header />
				<Slider />
				<CarouselCards />
				<CategoryCards/>
				<Footer />
			</div>
		);
}

export default App;
