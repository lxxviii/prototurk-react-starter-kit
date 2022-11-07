import { memo } from "react";
import TodoItem from "./TodoItem";

function Todos({ todos }) {

    console.log("TODOS Render Edildi");

    return (
        <ul>
            {todos.map((todo, index) =>
                <TodoItem todo={todo} key={index} />
            )}
        </ul>
    )
}
export default memo(Todos);