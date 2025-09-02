import React, { useContext, useState } from 'react'

const App = () => {
    // 建立一個空的共用區（可以跨元件使用）
    const Context = React.createContext();
    // 建立按鈕控制變數
    const [signedIn, setSignedIn] = useState(false);
    

    // 建立Nav元件
    const Nav = () => {
        return (
            <div className="nav">
                {/* 按鈕 */}
                <Btn />
            </div>
        )
    }

    // 建立按鈕
    const Btn = () => {
        // 取出共用區的signedIn變數與setSignedIn方法
        const [signedIn, setSignedIn] = useContext(Context);

        return (
            <button onClick={() => setSignedIn(!signedIn)}>
                {/* 登出 */}
                {signedIn ? '登出' : '登入'}
            </button>
        )
    }

    return (
        <div>
            <h1>useContext</h1>
            <hr />
            <Context.Provider value={[signedIn, setSignedIn]}>
                <Nav />
                {/* <h2>Signed Out</h2> */}
                帳號：<input
                    type="text" />
                <h2>
                    You're
                    {signedIn ? ' Signed In' : ' Signed Out'}
                </h2>
            </Context.Provider>
        </div>
    )
}

export default App