import React from 'react';

const CodeExample = () => {
    return (
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
    );
};

export default CodeExample;