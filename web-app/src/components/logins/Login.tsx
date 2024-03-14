import {useState} from "react";


const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <>
            <div>
                <button onClick={handleLogin}>LogIn</button>
            </div>
            <div>
                <button onClick={handleLogOut}>LogOut</button>
            </div>
            <div>
                {
                    isLoggedIn ? "User Logged In " : "User LoggedOut"
                }
            </div>

        </>
    )

}

export default Login;