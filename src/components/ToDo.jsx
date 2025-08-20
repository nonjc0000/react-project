import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const ToDo = ({todo, delTodo, toggleCompleted}) => {
    return (
        // 使用字串值+三元運算子的方法控制是否套用css規則
        <div className={`todo ${todo.isCompleted? 'completed': '' }`}>
            <p onClick={()=>{toggleCompleted(todo.id)}}>{todo.content}</p>
            <div>
            <MdModeEdit 
            style={{cursor:'pointer', marginRight:'5px'}}
            onClick={()=>{}}
            />
            <MdDelete 
            style={{cursor:'pointer'}}
            onClick={() =>{
                delTodo(todo.id)
                }}/>
            </div>
        </div>
    )
}

export default ToDo