import { forwardRef, useRef } from "react";

export default function Ref() {

    const Input = forwardRef((props, ref) => {
        return <input ref={ref} type='text' {...props} />
    })

    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <h2> useRef - forwardRef</h2>
            <button onClick={focusInput}> Fokusla </button>
            <Input ref={inputRef} />
        </>
    )
}