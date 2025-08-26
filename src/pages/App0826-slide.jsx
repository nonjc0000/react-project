import { useEffect, useState } from 'react'
import '../css/App0826b.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const App = () => {
    // 預設為第一張圖
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const slides = [
        { url: './images/p3.jpg', title: 'photo-1' },
        { url: './images/p5.jpg', title: 'photo-2' },
        { url: './images/p7.jpg', title: 'photo-3' },
        { url: './images/p9.jpg', title: 'photo-4' },
    ]

    // 當curretImgIndex改變時，會觸發useEffect
    useEffect(() => {
        // 每三秒呼叫nextSlide()換下一張圖
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);

        // 每三秒後，移除autoplay，才能取得最新的索引編號
        return () => clearInterval(autoplay);

    }, [currentImgIndex]);

    // 上一張
    const prevSlide = () => {
        // 切換目前圖片的索引位置
        setCurrentImgIndex((prevIndex) => 
            (prevIndex === 0 ? slides.length - 1 // 陣列總長減一，就會是最後一張的index位置
            : prevIndex - 1)
        )
    }

    // 下一張
    const nextSlide = () => {
        // 切換目前圖片的索引位置
        setCurrentImgIndex((prevIndex) => 
            (prevIndex === slides.length - 1
                ? 0 // 確認是不是最後一張，是的話則回到第一張
                : prevIndex + 1 )
        )

    }

    // 建立左右icon元件
    const Arrow = ({ direction, onClick }) => {
        return (
            // 擺放icon的區域
            <div style={{
                position: 'absolute',
                top: '50%',
                cursor: 'pointer',
                color: 'white',
                [direction]: '20px', // 將icon拆開，並保留左右留白間距
            }}>

                {
                    direction === 'left'
                        ? (
                            // 左按鈕
                            <FaArrowAltCircleLeft size={50} onClick={onClick} />
                        )
                        : (
                            // 右按鈕
                            <FaArrowAltCircleRight size={50} onClick={onClick} />
                        )
                }

            </div>
        )
    }

    return (

        // 滿版最外層
        <div className='wrapper' style={{
            maxWidth: '100vw',
            height: '100vh',
            margin: 'auto',
        }}>
            {/* 滿版背景輪播區 */}
            <div style={{
                backgroundImage: `url(${slides[currentImgIndex].url})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                // margin: 'auto'
            }}>

                {/* 文字區 */}
                <h2 style={{ color: 'red' }}>{slides[currentImgIndex].title}</h2>
                {/* 上一張 */}
                <Arrow direction='left' onClick={prevSlide} />
                {/* 下一張 */}
                <Arrow direction='right' onClick={nextSlide} />
            </div>
        </div>
    )
}

export default App