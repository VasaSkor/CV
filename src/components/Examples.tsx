import React from 'react';
import { Element } from 'react-scroll';
import textDictionary from '../scripts/textDictionary';
import '../styles/Examples.scss'
import gameQuiz from '../assets/image/gameQuiz_descktop.png'
import gemPuzzle from '../assets/image/GemPuzzle_descktop.png'
import dangerousDave from '../assets/image/DangerousDave_descktop.png'
import momento from '../assets/image/Momento_desktop.png'

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
                    <pre className='code'>
                        <code className='code-block'>
                            <span className='code-block-blue'>function</span>
                            <span className='code-block-red'> deepCount</span>
                            {'(arr) {'}
                            <br/>
                            <span className='code-block-blue'>  let </span>
                            <span>count =</span>
                            <span className='code-block-pink'> 0</span>
                            ;
                            <br/>
                            <br/>
                            <span className='code-block-blue'>  function </span>
                            <span className='code-block-red'>countElements</span>
                            {'(element) {'}
                            <br/>
                            <span className='code-block-blue'>      if </span>
                            <span>(</span>
                            <span className='code-block-red'>Array</span>
                            <span>.</span>
                            <span className='code-block-red'>isArray</span>
                            <span>{'(element)) {'}</span>
                            <br/>
                            <span>        count++</span>
                            <br/>
                            <span>        element.</span>
                            <span className='code-block-red'>forEach</span>
                            <span>(countElements);</span>
                            <br/>
                            <span>       {'}'}</span>
                            <br/>
                            <span className='code-block-blue'>       else if </span>
                            <span>(</span>
                            <span className='code-block-blue'>typeof </span>
                            <span>element === </span>
                            <span className='code-block-green'>'string' </span>
                            <span>{') {'}</span>
                            <br/>
                            <span>          count++</span>
                            <br/>
                            <span>       {'}'}</span>
                            <br/>
                            <span className='code-block-blue'>       else if </span>
                            <span>(</span>
                            <span className='code-block-blue'>typeof </span>
                            <span>element === </span>
                            <span className='code-block-green'>'number' </span>
                            <span>{') {'}</span>
                            <br/>
                            <span>          count++</span>
                            <br/>
                            <span>       {'}'}</span>
                            <br/>
                            <span>     {'}'}</span>
                            <br/>
                            <br/>
                            <span>  arr.</span>
                            <span className='code-block-red'>forEach</span>
                            <span>(countElements);</span>
                            <br/>
                            <br/>
                            <span className='code-block-blue'>  return </span>
                            <span>count;</span>
                            <br/>
                             <span>{'}'}</span>
                            <br/>
                            <br/>
                            <span className='code-block-grey'>{'// Usage example'}</span>
                            <br/>
                            <span className='code-block-blue'>const </span>
                            <span>arr = [</span>
                            <span className='code-block-pink'>1</span>
                            <span>, [</span>
                            <span className='code-block-pink'>2</span>
                            <span>, </span>
                            <span className='code-block-green'>'three'</span>
                            <span>, </span>
                            <span className='code-block-pink'>4</span>
                            <span>], </span>
                            <span className='code-block-green'>'five'</span>
                            <span>];</span>
                            <br/>
                            <span className='code-block-pink'>console</span>
                            <span>.</span>
                            <span className='code-block-red'>log</span>
                            <span>(</span>
                            <span className='code-block-red'>deepCount</span>
                            <span>(arr));</span>
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Examples;