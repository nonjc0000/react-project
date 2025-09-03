import React, { useRef } from 'react'

const App = () => {
    // 建立useRef變數
    const greenRef = useRef(null);
    const yellowRef = useRef(null);

    // 捲動到綠色區塊
    function gotoGreen() {
        window.scrollTo({
            top: greenRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

     // 捲動到黃色區塊
    function gotoYellow() {
        window.scrollTo({
            top: yellowRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            <h1>useRef-滑動到指定位置</h1>
            <div ref={yellowRef} style={{ backgroundColor: 'yellow', height: '200vh' }}>
                <button onClick={gotoGreen}>green</button>
            </div>

            <div ref={greenRef} style={{ backgroundColor: 'green', height: '200vh' }}>
                <button onClick={gotoYellow}>yellow</button>
            </div>
        </div>
    )
}

export default App