import React from 'react';
import '../styles/MainRight.scss'
import AboutMe from "./AboutMe";
import Experience from "./Experience";
const MainRight = () => {
    return (
        <div className='main__right'>
            <AboutMe/>
            <Experience/>
        </div>
    );
};

export default MainRight;