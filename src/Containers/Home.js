import { CarouselCards } from '../Components/CarouselCards';
import { Slider } from '../Components/Slider';
import { CategoryCards } from '../Components/CategoryCards';
function Home() {
    return (  
        <>
            <Slider />
            <CarouselCards />
            <CategoryCards />
        </>
    );
}

export { Home };