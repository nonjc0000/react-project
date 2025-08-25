import js from '@eslint/js';
import React from 'react'

const App = () => {
    const cities = [
        {
            cityId: 1,
            cityName: '臺北市',
        },
        {
            cityId: 2,
            cityName: '新北市',
        },
    ]
    return (
        <div>
            <h1>Local Storage - 陣列物件資料存取</h1>
            <button onClick={() => {

                // 陣列物件轉字串
                let strCity=JSON.stringify(cities);

                // 寫入local storage
                window.localStorage.setItem('cities', strCity);
            }}>寫入</button>
            
            <button onClick={() => {
                // 取出local storage資料
                let getData = window.localStorage.getItem('cities');
                // 字串轉陣列物件
                let getArrData = JSON.parse(getData);
                console.log(getArrData);
                console.log(typeof getArrData);
            }}>讀取</button>
        </div>
    )
}

export default App