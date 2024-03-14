import {StatusProps} from "../../types/Status.type.ts";

const Status = ({status}: StatusProps) => {
    let message = '';
    if (status.trim() === "loading") {
        message = " Loading ....";
    } else if (status.trim() === "success") {
        message = " Data fetched Successfully";
    } else if (status.trim() === "error") {
        message = " Error Loading the Data";
    }
    return (
        <>
            <h2>{message}</h2>
        </>
    )
}

export default Status;