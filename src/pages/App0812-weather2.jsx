import axios from 'axios';
import '../css/App0811-weather.css';
import { IoIosUmbrella } from "react-icons/io";
import { useEffect, useState } from 'react';

/* 如果用import的話就會跟路徑有關，但如果直接取用的話就直接把檔案塞進public裡，從index的角度 */

const App = () => {
    // 建立react變數，使用useState Hook
    // 存放各縣市資料
    // const [變數名稱, 更改變數名稱的方法] = useState(預設值);
    const [cities, setCities] = useState([]);

    // useEffect() Hook => 渲染後，只呼叫一次json
    useEffect(() => {
        // 如果要取得渲染後的DOM元素（return內的內容），要寫在useEffect()裡

        // 非同步取資料，async要搭配await
        (async () => {
            // 取得public中的json資料
            const jsonData = await axios.get('./json/F-C0032-001.json')
            // 取得src中的json資料
            // react get後面要放路徑
            // const data = await axios.get('./src/json/F-C0032-001.json')
            // 檢查是否連上json
            console.log(jsonData.data.cwaopendata.dataset);

            // 取得各縣市的氣象資訊（從json中解構出來）
            const { location } = jsonData.data.cwaopendata.dataset
            console.log(location);

            // 將各縣市資訊透過setCities方法，更新cities變數
            setCities(location);

        })(); // 後面的小括號是呼叫，要寫不然不會動
    }, []);

    // return外面可以寫js
    return (
        <>
            {/* 要顯示的東西都只能是jsx語法，所以要用js的話要用大括號包起來 */}

            {/* 36小時天氣預報版型 */}
            {/* Wx(天氣現象)、MaxT(最高溫度)、MinT(最低溫度)、CI(舒適度)、PoP(降雨機率) */}
            <div className='cards'>
                {
                    cities.map((city) => {
                        return (
                            <div key={city.locationName}>
                                <div className='card'>
                                    {/* 臺北市 */}
                                    <h2 className="cityName">{city.locationName}</h2>
                                    <div className='weatherInfo'>
                                        {/* 取得縣市內容之後跑迴圈 */}
                                        {/* 顯示各縣市的三個欄位資訊 */}
                                        {
                                            city.weatherElement[0].time.map((item, index) => {
                                                return (
                                                    <div className="day" key={index}>
                                                        {/* 11日 */}
                                                        {/* 使用日期時間函數 */}
                                                        <h2>
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined, {
                                                                    day: 'numeric'
                                                                })
                                                            }日
                                                        </h2>
                                                        <p>
                                                            {/* 開始 */}
                                                            {/* 上午6:00 */}
                                                            {new Date(item.startTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })}
                                                        </p>
                                                        <p>~</p>
                                                        <p>
                                                            {/* 結束 */}
                                                            {/* 下午6:00 */}
                                                            {new Date(item.endTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })}
                                                        </p>
                                                        {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中 */}
                                                        {/* <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="晴午後短暫雷陣雨" /> */}
                                                        <img src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                                                        {/* 天氣狀況名稱 */}
                                                        <p>{item.parameter.parameterName}</p>
                                                        {/* 降雨機率 */}
                                                        <span>
                                                            <IoIosUmbrella /><span style={{ fontStyle: 'italic' }}>{city.weatherElement[4].time[index].parameter.parameterName}%</span>
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}

export default App