import {ChangeEvent, useState} from "react";


const Comp2 = ({onSelect}: CompType) => {

    const [enteredValue, setEnteredValue] = useState<string>('');


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    }

    const handleClick = () => {
        console.log(enteredValue);
        onSelect(enteredValue)
    }

    return (
        <>
            <input type={"text"}
                   value={enteredValue}
                   onChange={(event) => onChangeHandler(event)}/>
            <button type={"button"} onClick={handleClick}>add</button>
        </>
    );
}


export default Comp2;
