import {Box, Button, Container, FormControl, FormLabel, Grid, TextField} from "@mui/material";
import React, {ChangeEvent, useState} from "react";


const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameMessage, setUserNameMessage] = useState('');

    const onSubmit = () => {

        console.log(userName);
        console.log(password);

        if(userName === ''){
             setUserNameMessage('userName is required');
        }else{
            setUserNameMessage('');
        }
    }

    const onReset = () => {
        setUserName('');
        setPassword('');
    }
    return (
        <Container maxWidth={"lg"}>
            <Box>
                <form>
                    <Grid>
                        <FormControl>
                            <FormLabel sx={{mt: 4}}>User Name</FormLabel>
                            <TextField sx={{mt: 2}}
                                       type={"text"}
                                       onChange={ (event:ChangeEvent<HTMLInputElement>) => {
                                           setUserName(event.target.value);
                                       }}
                                       variant={"outlined"}
                                       size={"small"}
                                       value={userName}
                                       id={"userName"}
                                       name={"userName"}
                            />
                            <p> { userNameMessage } </p>
                        </FormControl>
                    </Grid>

                    <Grid>
                        <FormControl>
                            <FormLabel sx={{mt: 2}}>Password</FormLabel>
                            <TextField
                                type={"password"}
                                sx={{mt: 2}}
                                onChange={ (event:ChangeEvent<HTMLInputElement>)=> setPassword(event.target.value)}
                                variant={"outlined"}
                                size={"small"}
                                value={password}
                                id={"password"}
                                name={"password"}/>
                        </FormControl>
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Button type={"button"}
                                variant={"contained"}
                                color={"primary"}
                                onClick={onSubmit}
                                >Submit</Button>
                        <Button sx={{mx: 2}}
                                type={"button"}
                                variant={"contained"}
                                onClick={onReset}
                                color={"success"}>Reset</Button>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default Login;