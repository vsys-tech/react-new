import {LoginProps} from "../../types/Login/LoginProps";
import axios from "axios/index";

const base_url = "http://localhost:8080/"

const LoginHttp = (login: LoginProps) => {

    axios.get(base_url)
        .then((response) => {
            console.log(response)
        });


}


export default LoginHttp;