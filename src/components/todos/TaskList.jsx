import "./styles/TaskList.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskStatus, removeTask } from "./todoSlice";

const TaskList = () => {
    const tasks = useSelector((state) => {
        if (state.todos.filter === "completed") {
            return state.todos.tasks.filter((task) => task.completed);
        } else if (state.todos.filter === "incomplete") {
            return state.todos.tasks.filter((task) => !task.completed);
        }
        return state.todos.tasks;
    });

    const dispatch = useDispatch();

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <span
                        style={{
                            textDecoration: task.completed
                                ? "line-through"
                                : "none",
                            color: task.completed ? "red" : "black",
                        }}
                        className="task-text"
                        onClick={() => dispatch(toggleTaskStatus(task.id))}
                    >
                        {task.text}
                    </span>
                    <button className="delete-button" onClick={() => dispatch(removeTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
