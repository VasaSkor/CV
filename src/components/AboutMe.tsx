import React from 'react';
import { Element } from 'react-scroll';
import textDictionary from '../scripts/textDictionary';
import '../styles/AboutMe.scss'

const AboutMe = () => {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <Element name="about" className='about-me__container-title'>{textDictionary.aboutMe}</Element>
                <span className='about-me__container-text'>
                    {textDictionary.aboutMeText}
                </span>
            </div>
        </section>
    );
};

export default AboutMe;