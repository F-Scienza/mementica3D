import React from 'react';
import './Contact.css'
import logo from '../../Images/logo-M-scaled.webp'
import mailicon from '../../Images/Asets/mail.png'
import hsicon from '../../Images/Asets/horarios.png';
import locicon from '../../Images/Asets/location.png';
import callicon from '../../Images/Asets/call.png';

function Contact() {
    return (
			<>
				<div className="contact-container">
					<div className="contact-l">
						<img src={logo} alt="logo mementica" className="contact-logo" />
						<span className="carousel-title">MEMENTICA</span>
					</div>
					<div className="contact-r">
						<span className="carousel-title"> Contactanos </span>
						<ul className="contact-list">
							<li className='contact-li'>
                                mementica3d@gmail.com
                            </li>
                            <span className='about-icon-container'>
                                <img src={mailicon} alt='icon' className='contact-icon'></img>
                            </span>
							<li className='contact-li'>
                                3517370693
                            </li>
                            <span className='about-icon-container'>
                                <img src={callicon} alt='icon' className='contact-icon'></img>
                            </span>
							<li className='contact-li'>
                                Lun. a vie. 10 - 18hs
                            </li>
                            <span className='about-icon-container'>
                                <img src={hsicon} alt='icon' className='contact-icon'></img>
                            </span>
							<li className='contact-li'>
                                Códoba - Córdoba
                            </li>
                            <span className='about-icon-container'>
                                <img src={locicon} alt='icon' className='contact-icon'></img>
                            </span>
						</ul>
					</div>
				</div>
			</>
		);
}

export {Contact};