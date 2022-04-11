import { CarouselCards } from '../Components/CarouselCards';
import { CategoryCards } from '../Components/CategoryCards';
function Home() {
    return (  
        <>
            <CarouselCards 
                titleCarousel = 'PRODUCTOS DESTACADOS'
            />
            <CarouselCards 
                titleCarousel = 'OFERTAS'
            />
            <CategoryCards />
        </>
    );
}

export { Home };