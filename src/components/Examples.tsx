import React from 'react';
import '../styles/Examples.scss'
import gameQuiz from '../assets/image/gameQuiz_descktop.png'
import gemPuzzle from '../assets/image/GemPuzzle_descktop.png'
import dangerousDave from '../assets/image/DangerousDave_descktop.png'
import momento from '../assets/image/Momento_desktop.png'

const Examples = () => {
    return (
        <section className='examples'>
            <div className='examples__container'>
                <h2 className='examples__container-title'>Examples</h2>
                <div className='examples__container_contain'>
                    <div className='examples__container_contain-card'>
                        <img
                            className='examples__container_contain-card_img'
                            src={gameQuiz}
                            alt='gameQuiz'
                        />
                        <p className='examples__container_contain-card-description'>
                            GameQuiz
                        </p>
                    </div>
                    <div className='examples__container_contain-card'>
                        <img
                            className='examples__container_contain-card_img'
                            src={gemPuzzle}
                            alt='gemPuzzle'
                        />
                        <p className='examples__container_contain-card-description'>
                            GemPuzzle
                        </p>
                    </div>
                    <div className='examples__container_contain-card'>
                        <img
                            className='examples__container_contain-card_img'
                            src={dangerousDave}
                            alt='dangerousDave'
                        />
                        <p className='examples__container_contain-card-description'>
                            DangerousDave
                        </p>
                    </div>
                    <div className='examples__container_contain-card'>
                        <img
                            className='examples__container_contain-card_img'
                            src={momento}
                            alt='momento'
                        />
                        <p className='examples__container_contain-card-description'>
                            Momento
                        </p>
                    </div>
                </div>
                <div className='examples__container'>
                    <p className='examples__container-description'>
                        <span>DESCRIPTION:</span> Create a function that returns the total number of all elements in an
                        array (numbers, strings, nested arrays) at all nesting levels
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