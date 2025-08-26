import $ from 'jquery'
import { useEffect } from 'react'
import '../css/App0826c.css'
import svg1 from '../images/react.svg'

const App = () => {
    useEffect(() => { // 如果不用useEffect就要用function
        // 現在寫法 => on('事件名稱', callbackFn)
        $('a:has(.ttpshow)').on('mouseover', function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpshow').html() + '</div>')
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            }).fadeIn(200);
        }).on('mouseout', function () {
            $('#ttpPanel').remove();
        }).on('mousemove', function (e) {
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            });
        })


        // 過時寫法
        // has => 檢查是否有指定的名稱
        // $('a:has(.ttpshow)').mouseover(function (e) {
        //     $('body').append('<div id="ttpPanel">' + $(this).children('.ttpshow').html() + '</div>')
        //     $('#ttpPanel').css({
        //         top: (e.pageY + 10) + 'px',
        //         left: (e.pageX + 10) + 'px',
        //     }).fadeIn(200);
        // }).mouseout(function () {
        //     $('#ttpPanel').remove();
        // }).mousemove(function (e) {
        //     $('#ttpPanel').css({
        //         top: (e.pageY + 10) + 'px',
        //         left: (e.pageX + 10) + 'px',
        //     });
        // })
    }, [])
    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet
                <a href="">
                    consectetur
                    <span className="ttpshow">consectetur內容說明⋯⋯</span>
                </a>
                adipisicing elit. Debitis numquam at fugiat id voluptates illo alias aliquid, ex veritatis accusamus
                reiciendis
                <a href="">
                    perferendis
                    <span className="ttpshow">perferendis內容說明⋯⋯</span>
                </a> cumque tempora modi enim reprehenderit rem! Obcaecati accusamus sunt quis praesentium
                quod nam reiciendis, eligendi iure architecto porro id, sit vel fuga magnam quasi, delectus soluta
                <a href="">
                    <img src={svg1} alt="" />
                    <span className="ttpshow">圖片說明⋯⋯</span>
                </a>
                asperiores dicta veritatis at ipsum sequi eius temporibus illo! Similique aspernatur accusantium quam natus
                obcaecati harum nesciunt placeat, maxime at reiciendis fugit fugiat doloribus, incidunt pariatur nostrum,
                explicabo modi autem dolorem magni esse odio labore veniam officia. Nobis quis adipisci atque omnis illo
                voluptatum, ea deserunt exercitationem, consequuntur minus in vel obcaecati?
            </p>
        </div>
    )
}

export default App