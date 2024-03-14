import {gql} from "@apollo/client";


export const customersQuery = gql`
    {
    customers{
        id, name, isLoggedIn, customerDetail
        {
            id, customerId, email, phone, address
        }
    }
}
`

export const customersSubscription = gql`
    subscription
    {
        createdCustomers
        {
            id, name
        }
    }
`
