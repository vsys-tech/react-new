import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import Home from "./components/home/Home.tsx";
import {splitLink} from "./graphql/Graphql.Links.ts";
import './App.css'

const App = () => {

    const apolloClient = new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache()
    });


    return (
        <>
            <ApolloProvider client={apolloClient}>
                <Home/>
            </ApolloProvider>

        </>
    )
}

export default App
