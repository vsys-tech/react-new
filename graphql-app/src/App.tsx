import Header from "./components/header/Header";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {splitLink} from "./graphql/Graphql.Links";

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});


const App = () => {
    return (
        <>
            <ApolloProvider client={apolloClient}>
                <Header/>
            </ApolloProvider>
        </>
    );
}

export default App;
