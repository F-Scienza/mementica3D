import { CarouselCards } from '../Components/CarouselCards';
import { CategoryCards } from '../Components/CategoryCards';
import {Slider} from '../Components/Slider'
function Home() {
    return (  
        <>
            <Slider/>
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