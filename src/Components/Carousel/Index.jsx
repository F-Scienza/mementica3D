import React from 'react';
import { Card } from '../Card';
import './Carousel.css'
function Carousel() {
    return (  
        <div className='carousel-container'>
            <h3>Productos destacados</h3>
            <div className='cards-container'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

export { Carousel };