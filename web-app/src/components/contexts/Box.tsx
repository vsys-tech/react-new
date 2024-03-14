import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.tsx";

const Box = () =>{
    const theme = useContext(ThemeContext);

    return (
        <div style={{background : theme.primary.bColor, color:theme.secondary.textColor }}>
            Theme Context
        </div>
    );
}

export default Box;