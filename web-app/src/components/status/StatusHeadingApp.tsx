import Status from "./Status.tsx";
import Heading from "../simple/Heading.tsx";
import Title from "../simple/Title.tsx";
import Greet from "../simple/Greet.tsx";

const StatusHeadingApp = () =>{

    return (
        <>
            <Status status={"success"}/>
            <Heading>Some Text for Heading </Heading>

            <div>
                <Title>
                    <Heading>Some Title From Title Component</Heading>
                </Title>
            </div>
            <Greet name={"shan"}  isLoggedIn={false} />
        </>
    );
}

export default  StatusHeadingApp;
