import {useReducer} from "react";

type CounterState = {
    count: number
}

type UpdateAction = {
    type: "increment" | "decrement",
    payLoad: number
}

type ResetAction = {
    type: "reset"
}


type CounterAction = UpdateAction | ResetAction

const initState = {count: 0}

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case "increment" :
            return {count: state.count + action.payLoad};
        case "decrement":
            return {count: state.count - action.payLoad};
        case "reset":
            return initState;
        default:
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    const handleIncrement = () => {
        dispatch({type: "increment", payLoad: 1})
    }

    const handleDecrement = () => {
        dispatch({type: "decrement", payLoad: 1})
    }

    const handleReset = () => {
        dispatch({type: "reset"})
    }

    return (
        <>
            <div>
                Count : {state.count}
            </div>

            <div>
                <button onClick={handleIncrement}>Increment</button>
            </div>
            <p></p>

            <div>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            <p></p>

            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
            <p></p>
        </>
    )

}

export default Counter;