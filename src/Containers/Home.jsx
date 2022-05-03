import { CarouselCards } from '../Components/CarouselCards';
import { CategoryCards } from '../Components/CategoryCards';
function Home() {
    return (  
        <>
            <CarouselCards 
                titleCarousel = 'PRODUCTOS DESTACADOS'
                type = 'top'
            />
            <CarouselCards 
                titleCarousel = 'OFERTAS'
                type = 'offer'
            />
            <CategoryCards />
        </>
    );
}

export { Home };