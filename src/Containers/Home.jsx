import { CarouselCards } from '../Components/CarouselCards';
import { CategoryCards } from '../Components/CategoryCards';
function Home() {
    return (  
        <>
            <CarouselCards 
                titleCarousel = 'Productos destacados'
            />
            <CarouselCards 
                titleCarousel = 'Ofertas'
            />
            <CategoryCards />
        </>
    );
}

export { Home };