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
            { content: 'parkng fee 0820', id: Math.random(), isCompleted: false },
            { content: 'playing guitar', id: Math.random(), isCompleted: false },
            { content: 'cooking', id: Math.random(), isCompleted: false },
        ]
    );

    // 建立刪除todo
    //傳入被刪除的todo.id

    const delTodo = (id) => {
        setTodos(todos.filter(todo => {
            // 使用filter方法，保留不是被刪除的id
            return todo.id !== id
        }))
    }

    // 建立切換isCompleted屬性函式

    const toggleCompleted = (id) => {
        // isCompleted => false
        // isCompleted => true
        // 檢查被點擊的項目id是否跟陣列中的id一樣
        // yes => 1. 取出todo 2. 將isCompleted屬性值反向(not)
        // no => todo 不變

        setTodos(todos.map((todo) => {
            return todo.id === id
                ? {...todo, isCompleted :!todo.isCompleted }
                : todo
        }))
    }

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
                    isCompleted: false,
                }])
            }} />

            {
                todos.map((todo) => {
                    return <ToDo todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted}/>
                })
            }
        </div>
    )
}

export default ToDoWrapper