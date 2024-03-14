import {ButtonProps} from "../../types/Button.type.ts";


const Button = ({handleClick}: ButtonProps) => {

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}
export default Button;