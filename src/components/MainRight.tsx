import React from 'react';
import '../styles/MainRight.scss'
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Examples from "./Examples";
const MainRight = () => {
    return (
        <div className='main__right'>
            <AboutMe/>
            <Experience/>
            <Examples/>
        </div>
    );
};

export default MainRight;