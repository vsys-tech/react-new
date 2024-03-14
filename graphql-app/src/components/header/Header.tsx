import {Link} from "react-router-dom";
import React from "react";
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import AllRoutes from "../Allroutes/AllRoutes";


const Header = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="relative">
                <Toolbar>
                    <Button style={{fontStyle : "italic" }} color="inherit">
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button sx={{ ms:2 }} color="inherit">
                        <Link to={'/customer-data'}>Subscribe</Link>
                    </Button>
                    <Button sx={{ ms:2 }} color="inherit">
                        <Link to={'/Login'}>Login</Link>
                    </Button>

                </Toolbar>
            </AppBar>
            <AllRoutes/>
        </Box>
    );

}

export default Header;