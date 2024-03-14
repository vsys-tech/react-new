import {ThemeContextProvider} from "../contexts/ThemeContext.tsx";
import Box from "../contexts/Box.tsx";


const ContextApp =() => {
    return (
        <>
            <ThemeContextProvider>
                <Box/>
            </ThemeContextProvider>
        </>
    )
}
export default ContextApp;
