import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case ('SET_TODO'): return {
            ...state,
            todo: action.value
        }
        case ('ADD_TODO'): return {
            ...state,
            todo: '',
            todos: [
                ...state.todos,
                action.todo
            ]
        }
        default: return {};
    }
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, {
        todos: [],
        todo: ''
    });

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        });
    };

    const onChange = e => {
        dispatch({
            type: 'SET_TODO',
            value: e.target.value,
        });
    }

    return (
        <>
            <h1> TODO APP </h1>
            <form onSubmit={HandleSubmit}>
                <input type='text' value={state.todo} onChange={onChange} />
                <button type='submit' disabled={!state.todo}> Gönder </button>
            </form>

            <ul>
                {state.todos.map((todo, index) =>
                    <li key={index}>{todo}</li>
                )}
            </ul>
        </>
    );
} export default UseReducer;