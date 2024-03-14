import {useContext} from "react";
import {UserContext} from "./UserContext.tsx";


const UserComp = () => {

    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'shan',
                email: 'shan@email.com'
            })
        }
    }

    const handleLogOut = () => {
        if (userContext) {
            userContext?.setUser(null);
        }
    }

    return (
        <>
            <div>
                User : {userContext?.user?.name} {userContext?.user?.email}
            </div>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <p></p>
            <div>
                <button onClick={handleLogOut}>LogOut</button>
            </div>
            <p></p>
        </>
    );
}

export default UserComp;