import { Link, Outlet } from "react-router-dom";

function Todos() {
    return (
        <>
            <h1>Todos page</h1>
            <ul>
                <li>
                    <Link to="/todos/1">Todo 1</Link>
                </li>
                <li>
                    <Link to="/todos/2">Todo 2</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}

export default Todos;
