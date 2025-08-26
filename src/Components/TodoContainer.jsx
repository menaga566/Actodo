import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer() {

    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Wake up 6 o clock"
        },
        {
            id:2,
            activity:"Go for a walk"
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
                </div>
                
            </div>
    )
}

export default TodoContainer