import axios from 'axios';
import '../css/App0811-weather.css'
import { IoIosUmbrella } from "react-icons/io";
import { useEffect } from 'react';

/* 如果用import的話就會跟路徑有關，但如果直接取用的話就直接把檔案塞進public裡，從index的角度 */

const App = () => {
    // useEffect() => 渲染後，只呼叫一次json
    useEffect(() => {
        // 非同步取資料，async要搭配await
        (async () => {
            // 取得public中的json資料
            const data = await axios.get('./json/F-C0032-001.json')
            // 取得src中的json資料
            // react get後面要放路徑
            // const data = await axios.get('./src/json/F-C0032-001.json')
            // 檢查是否連上json
            console.log(data.data.cwaopendata.dataset);
        })();
    }, []);


    return (
        <>
            {/* 36小時天氣預報版型 */}
            {/* Wx(天氣現象)、MaxT(最高溫度)、MinT(最低溫度)、CI(舒適度)、PoP(降雨機率) */}
            <div className='cards'>
                <div className='card'>
                    {/* 取得縣市內容之後跑迴圈 */}
                    <h2 className="cityName">臺北市</h2>
                    <div className='weatherInfo'>
                        <div className="day">
                            <h2>11日</h2>
                            <p>上午6:00</p>
                            <p>~</p>
                            <p>下午6:00</p>
                            {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中 */}
                            <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="晴午後短暫雷陣雨" />
                            <p>晴午後短暫雷陣雨</p>
                            <span>
                                <IoIosUmbrella /><span style={{ fontStyle: 'italic' }}>80%</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default App