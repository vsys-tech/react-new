import {PersonListProps} from "../../types/PersonList.type.ts";

const PersonList = ({names}: PersonListProps) => {
    return (
        <>
            {
                names.map(name => {
                    return (
                        <>
                            <h3 key={name.first}>{name.first} {name.last}</h3>
                        </>
                    );
                })
            }

        </>
    )
}

export default PersonList;