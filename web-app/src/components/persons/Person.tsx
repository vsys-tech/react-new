import {PersonProps} from "../../types/Person.type.ts";

const Person = ({name}: PersonProps) => {
    return (
        <>
            <h3>{name.first} {name.last}</h3>
        </>
    )
}

export default Person;