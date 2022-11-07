import { useReducer, useState, useCallback, useMemo } from 'react';
import AddTodo from '../../page/AddTodo';
import Todos from '../../page/Todos';
import todoReducer from './todoReducer';

export default function UseReducer() {

    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: '',
        search: ''
    });

    const submitHandle = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        })
    }, [state.todo])

    const onChange = useCallback(e => {
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        });
    }, []);

    const searchHandle = useCallback((e) => {
        dispatch({
            type: 'SET_SEARCH',
            value: e.target.value
        })
    }, [])

    const filteredTools = useMemo(() => {
        return state.todos.filter(todo => todo.localeLowercase('tr').include(state.search.toLocalLowercase('tr')))
    }, [state.todos, state.search])

    return (
        <>
            <h1> TODO APP </h1>
            <h3>{count}</h3>
            <h1>TODO APP</h1>
            <button onClick={() => setCount(count => count + 1)}>Ekle</button><br />
            <input type='text' value={state.search} placeholder="Todolarda Ara" onChange={searchHandle} />
            <AddTodo HandleSubmit={submitHandle} state={state.todo} onChange={onChange} />
            <Todos todos={filteredTools} />
        </>
    );
};