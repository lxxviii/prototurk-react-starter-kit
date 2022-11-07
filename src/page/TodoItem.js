import React, { memo } from "react";

function TodoItem({ todo }) {

    console.log("TodoItem Render Edildi.")

    return (
        <li >
            {todo}
        </li>
    )
}
export default memo(TodoItem);