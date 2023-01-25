import { CarouselCards } from '../Components/CarouselCards';
import { CategoryCards } from '../Components/CategoryCards';
function Home() {
    return (
			<>
				<CategoryCards />
				<CarouselCards titleCarousel="NOVEDADES" type="new" />
				<CarouselCards titleCarousel="PRODUCTOS DESTACADOS" type="top" />
				<CarouselCards titleCarousel="OFERTAS" type="offer" />
			</>
		);
}

export { Home };