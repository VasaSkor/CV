import React from 'react';
import '../styles/Main.scss'
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Main = () => {
    return (
        <div className='main'>
            <MainLeft/>
            <MainRight/>
        </div>
    );
};

export default Main;