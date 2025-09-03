import React, { useRef } from 'react'

const App = () => {
    // 建立useRef變數
    const inputRef = useRef(null);

    // 建立關閉密碼函式
    function hidePassword() {
        // 動態改變類型 password
        inputRef.current.type='password';
    }
    // 建立顯示密碼函式
    function showPassword() {
        // 動態改變類型 text
        inputRef.current.type='text';
    }

    return (
        <div>
            <h1>useRef-開關密碼</h1>

            <input type="text" ref={inputRef} />
            <button onClick={hidePassword}>隱藏密碼</button>
            <button onClick={showPassword}>查看密碼</button>


        </div>
    )
}

export default App