import React, {useRef, useEffect} from 'react';
import './Slider.css'
import velas1 from '../../Images/velas.png';
import velas2 from '../../Images/velas2.jpg';
import logoprinc from '../../Images/logo-mm.jpg';
import {ReactComponent as ArrowL} from '../../Images/izquierda.svg'
import {ReactComponent as ArrowR} from '../../Images/derecha.svg'



function Slider() {
	const sliderContainer = useRef(null);
	const slideInterval = useRef(null)
	const nextSlide = () => {
		if(sliderContainer.current.children.length>0){
			const firstEl = sliderContainer.current.children[0]
			sliderContainer.current.style.transition=`500ms ease-out all`
			const sizeSlide = sliderContainer.current.children[0].offsetWidth
			sliderContainer.current.style.transform=`translateX(-${sizeSlide}px)`
			const transition = ()=>{
					sliderContainer.current.style.transition = `none`;
					sliderContainer.current.style.transform = `translateX(0)`;
					sliderContainer.current.appendChild(firstEl)
					sliderContainer.current.removeEventListener(
						'transitionend',
						transition
					);
			}
			sliderContainer.current.addEventListener('transitionend', transition)
		}
	};

	const prevSlide = () => {
		if(sliderContainer.current.children.length>0){
			const index = sliderContainer.current.children.length - 1
			const lastEl = sliderContainer.current.children[index];
			sliderContainer.current.insertBefore(lastEl, sliderContainer.current.firstChild)
			
			sliderContainer.current.style.transition = `none`;
			
			const sizeSlide = sliderContainer.current.children[0].offsetWidth;
			sliderContainer.current.style.transform = `translateX(-${sizeSlide}px)`;
			setTimeout(() => {
				sliderContainer.current.style.transition = `300ms ease-out`;
				sliderContainer.current.style.transform = `translateX(0)`
			}, 30);
		}
	};

	useEffect(()=>{
		slideInterval.current = setInterval(() => {
			nextSlide()
		}, 4000);
		// cuando esta el mouse encima para
		sliderContainer.current.addEventListener('mouseenter', ()=>{
			clearInterval(slideInterval.current);
		})
		// cuando lo sacan continua
		sliderContainer.current.addEventListener('mouseleave', () => {
			slideInterval.current = setInterval(() => {
				nextSlide();
			}, 4000);
		});
	},[])
    return (
			<div className="principal-container">
				<div ref={sliderContainer} className="slider-container">
					<div className="slide">
						<a href="/">
							<img className='img-slide' src={logoprinc} alt="logo" />
						</a>
						<div className="texto-slide">
							<p>algun texto descriptivo</p>
						</div>
					</div>
					<div className="slide">
						<a href="/">
							<img className='img-slide'  src={velas2} alt="logo" />
						</a>
						<div className="texto-slide">
							<p>algun texto descriptivo</p>
						</div>
					</div>
					<div className="slide">
						<a href="/">
							<img className='img-slide' src={velas1} alt="logo" />
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