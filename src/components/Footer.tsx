import React from 'react';
import textDictionary from '../scripts/textDictionary';
import '../styles/Footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <h2 className='footer__container-title'>{textDictionary.footer}</h2>
            </div>
        </footer>
    );
};

export default Footer;