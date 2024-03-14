import Button from "../simple/Button.tsx";

const EventPropsApp = () =>{
    return (
        <>
            <Button handleClick={(event) => {
                console.log("Clicked", event)
            }}></Button>
        </>
    )
}

export default EventPropsApp;
