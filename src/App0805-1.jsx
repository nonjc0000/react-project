import './css/App0805-1.css'

function App() { // 字首要大寫
    // 一般變數
    const name = 'Joy'
    // 屬性名稱變數
    const myClassName = "myClass" // 屬性名稱可以是變數
    // 方法
    function myClick() {
        alert('button 1');
    }

    return ( // return是最後要顯示出來的，變數資料處理寫在return前
        // jsx fn return最外層只能回傳一個內容，所以要用空標籤整個包起來
        <>
            <div>
                {/* 行內css樣式優先級比較前面 */}
                <p style={{fontFamily: 'Helvetica', fontSize: '20px'}} className={myClassName}>姓名：{name}</p>
                {/* 呼叫函式直接在大括號內寫函式名稱；要直接作動的話要在大括號裡寫function */}
                <button type="button" onClick={myClick}>click 1</button>
                <button type="button" onClick={() => {
                    alert('button 2');
                }}>click 2</button>
            </div>
        </>
    )
}

export default App; /* jsx的function要export */

