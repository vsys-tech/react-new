import {useState} from "react";

type AuthUser = {
    name: string,
    password: string
}


const UserLogin = () => {

    // last assertions , no null check/test

    const [user, setUser] =
        useState<AuthUser >({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'user',
            password: 'passw0rd'
        })
    }

    // const handleLogOut = () => {
    //     setUser(null);
    // }

    return (
        <>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <p></p>

            {/*<div>*/}
            {/*    <button onClick={handleLogOut}>Logout</button>*/}
            {/*</div>*/}
            {/*<p></p>*/}

            <div>
                {/*<p> {user?.name} {user?.password}</p>*/}
                <p> {user.name} {user.password}</p>
            </div>
            <p></p>

        </>
    )

}

export default UserLogin;
