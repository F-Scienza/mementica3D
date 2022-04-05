import { CarouselCards } from '../Components/CarouselCards';
import { Slider } from '../Components/Slider';
import { CategoryCards } from '../Components/CategoryCards';
function Home() {
	return (
		<>
			<CarouselCards carouselTitle={'Destacados'} />
			<CarouselCards carouselTitle={'Mas vendidos'} />
			<CategoryCards />
		</>
	);
}

export { Home };
