import React from 'react';
import '../styles/Experience.scss'

const Experience = () => {
    return (
        <section className='experience'>
            <div className='experience__container'>
                <h2 className='experience__container-title'>Experience</h2>
                <div className='experience__container-line'/>
                <div className='experience__container-contain'>
                    <div className='experience__container-contain_item'>
                        <div className='experience__container-contain_item-title'>
                            Meter of electrophysical parameters of semiconductor devices
                        </div>
                        <div className='experience__container-contain_item-sub-title'>
                            LLC Integral
                        </div>
                        <div className='experience__container-contain_item-date'>
                            December 2020 - December 2021
                        </div>
                    </div>
                    <div className='experience__container-contain_item'>
                        <div className='experience__container-contain_item-title'>
                            System Administrator
                        </div>
                        <div className='experience__container-contain_item-sub-title'>
                            B2S invest
                        </div>
                        <div className='experience__container-contain_item-date'>
                            January 2022 - August 2022
                        </div>
                    </div>
                    <div className='experience__container-contain_item'>
                        <div className='experience__container-contain_item-title'>
                            Freelancing
                        </div>
                        <div className='experience__container-contain_item-date'>
                            Mart 2023 - Now
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;