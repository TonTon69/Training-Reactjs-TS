import { useParams } from "react-router-dom";

function Todo() {
    let { todoId } = useParams();

    return <h4>Todo {todoId}</h4>;
}

export default Todo;
