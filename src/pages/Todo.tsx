import { useParams } from "react-router-dom";

function Todo() {
    let params = useParams();

    return <h4>Todo {params.todoId}</h4>;
}

export default Todo;
