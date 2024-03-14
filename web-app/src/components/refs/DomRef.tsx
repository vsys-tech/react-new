import {useEffect, useRef} from "react";


const DomRef = () =>{

    const userRef = useRef<HTMLInputElement>(null!);

    useEffect( () =>{
        userRef.current.focus();
    },[])

    return(
        <>
            <form>
                <input name={"userName"} type={"text"} value={""} ref={userRef}/>
            </form>
        </>
    )

}

export default DomRef;
