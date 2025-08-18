import { useState } from 'react'

const App0818d = () => {
    const [optionKeyin, setOptionKeyin] = useState('');
    // 建立下拉清單的項目
    const opList = ['HTML', 'CSS', 'JavaScript', 'React'];
    // 建立下拉清單的內容
    const opListValue = ['html', 'css', 'js', 'react'];

    return (
        <div>
            <h2>捕捉下拉式選單方塊內容</h2>
            {/* 即時渲染不用querySelector */}
            <p>You chose: {optionKeyin}</p>

            <select
                name=""
                id=""
                value={optionKeyin}
                onChange={e => {
                    // let result = document.querySelector('#result');
                    setOptionKeyin(e.target.value);
                    // alert(e.target.value);
                    // result.textContent = `You chose: ${e.target.value}`
                }}>
                <option value="" disabled>Please select</option>
                {/* 使用map() */}
                {
                    opList.map((item, index) =>{
                        return <option value={opListValue[index]} key={item}>{item}</option>
                    })
                }
                {/* <option value="html">html</option>
                <option value="css">css</option>
                <option value="javaScript">javaScript</option>
                <option value="react">react</option> */}
            </select>
        </div>
    )
}

export default App0818d