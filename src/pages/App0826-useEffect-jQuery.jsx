import $ from 'jquery'
import { useEffect } from 'react'
import '../css/App0826a.css'


const App0826a = () => {
    useEffect(() => {
        // 當滑鼠碰到圖片時，圖片放大
        $('.zoom').on('mouseover', () => { // or: (e) => {e.curentTarget}
            $('.zoom').addClass('imgScale');
        })

        // 當滑鼠離開圖片時，還原圖片
        $('.zoom').on('mouseout', function () { // 只有匿名函式才可以抓到this
            $(this).removeClass('imgScale');
        })
    }, [])

    return (
        <div>
            <h1>useEffect</h1>
            <h2>jQuery-圖片縮放</h2>
            <a href="#" className='zoom'>
                <img src="./images/p3.jpg" alt="" />
            </a>
        </div>


    )
}

export default App0826a