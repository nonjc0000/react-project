import React, { useState } from 'react'

const CreateForm = ({ addTodo }) => {
    const [content, setContent] = useState('');

    // 建立一個函式處理新增的todo資料
    const addData = () => {
        //    console.log(content.length);
        let myInput = document.getElementById('myInput');
        myInput.focus(); // 指定游標位置

        if (content.length === 0) {
            alert(`The input shouldn't be empty!`);
        } else {
            addTodo(content);
            setContent(''); // 清除input內容
        }
    }

    // console.log(addTodo);


    return (
        <div>
            <form className='create-form' action="" method="post">
                <input
                    id='myInput'
                    type="text"
                    placeholder='What to do next?'
                    value={content}
                    onChange={e => {
                        // 去除資料前後的空白 => trim();
                        setContent(e.target.value.trim());
                    }}
                />

                <button type='button'
                    onClick={addData}>Add
                </button>
            </form>
            {/* <p>{content}</p> */}
        </div>
    )
}

export default CreateForm