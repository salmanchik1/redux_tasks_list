import "./styles/TaskFilter.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./todoSlice";

const TaskFilter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.todos.filter);

    return (
        <div className="task-filter">
            <button
                className="filter-button"
                onClick={() => dispatch(setFilter("all"))}
                disabled={currentFilter === "all"}
            >
                All
            </button>
            <button
                className="filter-button"
                onClick={() => dispatch(setFilter("completed"))}
                disabled={currentFilter === "completed"}
            >
                Completed
            </button>
            <button
                className="filter-button"
                onClick={() => dispatch(setFilter("incomplete"))}
                disabled={currentFilter === "incomplete"}
            >
                Uncompleted
            </button>
        </div>
    );
};

export default TaskFilter;
