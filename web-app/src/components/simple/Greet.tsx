import {GreetProps} from "../../types/Greet.type.ts";

const Greet = ({isLoggedIn, messageCount = 0, name}: GreetProps) => {
    return (
        <>
            {
                isLoggedIn ? <p> Welcome {name} you have {messageCount} messages</p> :
                    'welcome guest'
            }

        </>
    )
}
export default Greet;