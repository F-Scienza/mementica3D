import React from 'react';
import './Slider.css'
import velas1 from '../../Images/velas.png';
import velas2 from '../../Images/velas2.jpg';
import logoprinc from '../../Images/logo-mm.jpg';
import {ReactComponent as ArrowL} from '../../Images/izquierda.svg'
import {ReactComponent as ArrowR} from '../../Images/derecha.svg'
function Slider() {
    return (
			<div className="principal-container">
				<div className="slider-container">
					<div className="slide">
						<a href="/">
							<img src={logoprinc} alt="logo" />
						</a>
					</div>
					<div className="slide">
						<a href="/">
							<img src={velas2} alt="logo" />
						</a>
					</div>
					<div className="slide">
						<a href="/">
							<img src={velas1} alt="logo" />
						</a>
					</div>
				</div>

				<div>
					<button>
						<ArrowL />
					</button>
					<button>
						<ArrowR />
					</button>
				</div>
			</div>
		);
}

export {Slider};