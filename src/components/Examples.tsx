import React from 'react';
import { Element } from 'react-scroll';
import textDictionary from '../scripts/textDictionary';
import '../styles/Examples.scss'
import gameQuiz from '../assets/image/gameQuiz_descktop.png'
import gemPuzzle from '../assets/image/GemPuzzle_descktop.png'
import dangerousDave from '../assets/image/DangerousDave_descktop.png'
import momento from '../assets/image/Momento_desktop.png'
import CodeExample from "./CodeExample";

const Examples = () => {
    return (
        <section className='examples'>
            <div className='examples__container'>
                <Element name='examples' className='examples__container-title'>{textDictionary.examples}</Element>
                <div className='examples__container_contain'>
                    <a className='examples__container_contain-card'
                       href='https://superlative-platypus-a10978.netlify.app/'>
                        <div className='examples__container_contain-card'>
                            <img
                                className='examples__container_contain-card_img'
                                src={gameQuiz}
                                alt='gameQuiz'
                            />
                            <p className='examples__container_contain-card-description'>
                                {textDictionary.gameQuiz}
                            </p>
                        </div>
                    </a>
                    <a className='examples__container_contain-card'
                       href='https://clinquant-figolla-42ead6.netlify.app/'>
                        <div className='examples__container_contain-card'>
                            <img
                                className='examples__container_contain-card_img'
                                src={gemPuzzle}
                                alt='gemPuzzle'
                            />
                            <p className='examples__container_contain-card-description'>
                                {textDictionary.gemPuzzle}
                            </p>
                        </div>
                    </a>
                    <a className='examples__container_contain-card'
                       href='https://hardmandev-rs-clone.netlify.app/'>
                        <div className='examples__container_contain-card'>
                            <img
                                className='examples__container_contain-card_img'
                                src={dangerousDave}
                                alt='dangerousDave'
                            />
                            <p className='examples__container_contain-card-description'>
                                {textDictionary.dangerousDave}
                            </p>
                        </div>
                    </a>
                    <a className='examples__container_contain-card'
                       href='https://vasaskor.github.io/Momentum/'>
                        <div className='examples__container_contain-card'>
                            <img
                                className='examples__container_contain-card_img'
                                src={momento}
                                alt='momento'
                            />
                            <p className='examples__container_contain-card-description'>
                                {textDictionary.momento}
                            </p>
                        </div>
                    </a>
                </div>
                <div className='examples__container'>
                    <p className='examples__container-description'>
                        <span>{textDictionary.description}</span> {textDictionary.descriptionText}
                    </p>
                    <CodeExample/>
                </div>
            </div>
        </section>
    );
};

export default Examples;