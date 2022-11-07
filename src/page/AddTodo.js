import React, { memo } from "react";

function AddTodo({ HandleSubmit, state, onChange }) {

    console.log("AddTodo Render Edildi")

    return (
        <form onSubmit={HandleSubmit}>
            <input type='text' value={state.todo} onChange={onChange} />
            <button type='submit' disabled={!state.todo}> Gönder </button>
        </form>
    )

}
export default memo(AddTodo);