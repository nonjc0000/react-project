import React, { useState } from 'react'

const CreateForm = ({ addTodo }) => {
    const [content, setContent] = useState('');

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
                        setContent(e.target.value);
                    }}
                />

                <button type='button'
                    onClick={e => {
                        addTodo(content);
                        setContent(''); // 清除input內容
                        let myInput = document.getElementById('myInput');
                        myInput.focus(); // 指定游標位置
                    }}>Add</button>
            </form>
            {/* <p>{content}</p> */}
        </div>
    )
}

export default CreateForm