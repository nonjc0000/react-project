import { useState } from "react"
import CreateForm from "./CreateForm"
import ToDo from "./ToDo"

const ToDoWrapper = () => {
    // 因為有n個to-do，所以要用陣列存取
    // const [todos, setTodos]=useState([
    //     'parkng fee 0820', 
    //     'playing guitar',
    //     'cooking',
    // ])
    // 陣列內容若有增減時，索引值會異動
    // 為了避免索引值錯亂，將陣列改成陣列物件
    // 而key值用亂數產生

    const [todos, setTodos] = useState(
        [
            { content: 'parkng fee 0820', id: Math.random() },
            { content: 'playing guitar', id: Math.random() },
            { content: 'cooking', id: Math.random() },
        ]
    );

    return (
        <div className="wrapper">
            <h1>To Do List</h1>
            <CreateForm addTodo={(newContent) => {
                // 建立新的todo內容
                // 使用...其餘運算子，來保留原陣列內容
                // 再加上新的物件內容
                setTodos([...todos, {
                    content: newContent, // 預設一個空白內容
                    id: Math.random(),
                }])
            }} />
            {
                todos.map((todo) => {
                    return <ToDo todo={todo.content} key={todo.id} />
                })
            }
        </div>
    )
}

export default ToDoWrapper