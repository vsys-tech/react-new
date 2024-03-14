import {UserContextProvider} from "../usercontext/UserContext.tsx";
import UserComp from "../usercontext/UserComp.tsx";


const UserContextApp = () => {

    return (
        <>
            <UserContextProvider>
                <UserComp/>
            </UserContextProvider>
        </>
    )
}


export default UserContextApp;