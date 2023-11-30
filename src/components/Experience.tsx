import React from 'react';
import { Element } from 'react-scroll';
import textDictionary from '../scripts/textDictionary';
import '../styles/Experience.scss'

const Experience = () => {
    return (
        <section className='experience'>
            <div className='experience__container'>
                <Element name='experience' className='experience__container-title'>
                    {textDictionary.experience}
                </Element>
                <div className='experience__container-line'/>
                <div className='experience__container-contain'>
                    <div className='experience__container-contain_item'>
                        <div className='experience__container-contain_item-title'>
                            {textDictionary.integralTitle}
                        </div>
                        <div className='experience__container-contain_item-sub-title'>
                            {textDictionary.integralSubTitle}
                        </div>
                        <div className='experience__container-contain_item-date'>
                            {textDictionary.integralDate}
                        </div>
                    </div>
                    <div className='experience__container-contain_item'>
                        <div className='experience__container-contain_item-title'>
                            {textDictionary.b2sTitle}
                        </div>
                        <div className='experience__container-contain_item-sub-title'>
                            {textDictionary.b2sSubTitle}
                        </div>
                        <div className='experience__container-contain_item-date'>
                            {textDictionary.b2sDate}
                        </div>
                    </div>
                    <div className='experience__container-contain_item'>
                        <div className='experience__container-contain_item-title'>
                            {textDictionary.freelancingTitle}
                        </div>
                        <div className='experience__container-contain_item-date'>
                            {textDictionary.freelancingDate}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;