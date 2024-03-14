import Greet from "../simple/Greet.tsx";
import Person from "../persons/Person.tsx";
import PersonList from "../persons/PersonList.tsx";


const OtherApp = () => {
    const person = {
        first: 'Bruce',
        last: 'wayne'
    }

    const persons = [
        {
            first: 'Bruce',
            last: 'wayne'
        },
        {
            first: 'steve',
            last: 'smith'
        },
        {
            first: 'allen',
            last: 'border'
        },
    ]

    return (
        <>
            <Greet name={"shantanu"} messageCount={10} isLoggedIn={false}/>
            <Person name={person}/>
            <PersonList names={persons}/>
        </>
    )

}

export default OtherApp;

