import {booksQuery} from "../../graphql/queries/Queries.ts";
import {useQuery} from "@apollo/client";
import {BooksProps} from "../../types/BooksProps.ts";
import HomeData from "./HomeData.tsx";

const Home = () => {

    const {data, loading, error} = useQuery(booksQuery);
    if (loading) return (<p>'loading ....'</p>);
    if (error) return <div><p> error !!! </p></div>

    const booksData: BooksProps[] = data.books as BooksProps[];

    return (
        <>
            <HomeData books={booksData}/>
        </>
    )

}


export default Home;

