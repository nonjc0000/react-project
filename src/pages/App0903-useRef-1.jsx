import { fn } from 'jquery';
import React, { useRef, useState } from 'react'

const App = () => {
    // useState變數
    // const [inputValue, setInputValue] = useState('123');

    // useRef變數給input
    const inputRef = useRef(null); // 相當 於document.querySelector

    console.log('App returns...');


    function btnHandler() {
        // console.log(inputValue);

        // 查看ref物件
        console.log(inputRef);

        // 查看ref值
        console.log(inputRef.current.value);

        // 查看ref資料型別
        console.log(inputRef.current.type)

        // 更改類型
        inputRef.current.type = 'password';

        // 查看ref資料型別
        console.log(inputRef.current.type)

    }
    return (
        <div className='wrap'>
            <h1>useRef</h1><hr />

            {/* 使用useState */}
            {/* <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} /> */}

            {/* 使用useRef */}
            <input type="text" ref={inputRef} />
            <button onClick={btnHandler}>Click</button>

        </div>
    )
}

export default App