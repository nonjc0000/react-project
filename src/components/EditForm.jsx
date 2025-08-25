import React, { useState } from 'react'

const EditForm = ({ todo, editTodo }) => {
    const [content, setContent] = useState(todo.content);

    // 建立一個函式處理新增的todo資料
    const editData = () => {
        //    console.log(content.length);
        let myInput = document.getElementById('myInput');
        myInput.focus(); // 指定游標位置

        if (content.length === 0) {
            alert(`The input shouldn't be empty!`);
        } else {
            editTodo(todo.id, content);
        }
    }


    // 送出表單時
    const handleSubmit = (e) =>{
        // 取消送出的預設行為
        e.preventDefault();
        editTodo(todo.id, content);
    }

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
                    onClick={editData}>Completed
                </button>
            </form>
            {/* <p>{content}</p> */}
        </div>
    )
}

export default EditForm