import React, {useRef} from 'react';
import './Slider.css'
import velas1 from '../../Images/velas.png';
import velas2 from '../../Images/velas2.jpg';
import logoprinc from '../../Images/logo-mm.jpg';
import {ReactComponent as ArrowL} from '../../Images/izquierda.svg'
import {ReactComponent as ArrowR} from '../../Images/derecha.svg'



function Slider() {
	const sliderContainer = useRef(null);
	const nextSlide = () => {
		if(sliderContainer.current.children.length>0){
			console.log("siguiente")
			const firstEl = sliderContainer.current.children[0]
			sliderContainer.current.style.transition=`500ms ease-out all`

			const sizeSlide = sliderContainer.current.children[0].offsetWidth

			sliderContainer.current.style.transform=`translateX(-${sizeSlide}px)`
			const transition = ()=>{
					sliderContainer.current.style.transition = `none`;
					sliderContainer.current.style.transform = `translateX(0)`;
					sliderContainer.current.appendChild(firstEl)
			}
			sliderContainer.current.addEventListener('transitionend', transition)

		}
	};
	const prevSlide = () => {
		console.log('anterior');
	};
    return (
			<div className="principal-container">
				<div ref={sliderContainer} className="slider-container">
					<div className="slide">
						<a href="/">
							<img src={logoprinc} alt="logo" />
						</a>
						<div className="texto-slide">
							<p>algun texto descriptivo</p>
						</div>
					</div>
					<div className="slide">
						<a href="/">
							<img src={velas2} alt="logo" />
						</a>
						<div className="texto-slide">
							<p>algun texto descriptivo</p>
						</div>
					</div>
					<div className="slide">
						<a href="/">
							<img src={velas1} alt="logo" />
						</a>
						<div className="texto-slide">
							<p>algun texto descriptivo</p>
						</div>
					</div>
				</div>

				<div className="slider-controls">
					<button onClick={prevSlide} className="slider-buttons left">
						<ArrowL />
					</button>
					<button onClick={nextSlide} className="slider-buttons right">
						<ArrowR />
					</button>
				</div>
			</div>
		);
}

export {Slider};