import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
    return <input ref={ref} type='text' {...props} />
})

function Ref() {

    const inputRef = useRef();
    const focusInput = () => {
        console.log(inputRef.current.focus());
    }

    return (
        <>

            <h1> UseRef - forwardRef</h1>
            <Input ref={inputRef} />
            <button onClick={focusInput}> Fokusla</button>

        </>
    )

} export default Ref;