import React from 'react';
import { Element } from 'react-scroll';
import '../styles/AboutMe.scss'

const AboutMe = () => {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <Element name="about" className='about-me__container-title'>about me</Element>
                <span className='about-me__container-text'>Front-end developer specializing in programming language
                    JavaScript. I have experience working with the popular React framework, which allows me to create
                    interactive and responsive web applications with high performance. I approach responsibly to work
                    and always ready to learn new things.
                </span>
            </div>
        </section>
    );
};

export default AboutMe;