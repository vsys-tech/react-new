import {gql} from "@apollo/client";


export const booksQuery = gql`
    {
        books {
            _id,title,author,publisher, published_date, price
        }
    }
`

