import Comp2 from "./Comp2.tsx";


const Comp1 = () =>{

    const updateStr = (str: string) =>{
        console.log(str);
    }

    return (
        <>
            <Comp2 onSelect={updateStr}/>
        </>
    );

}


export default Comp1;