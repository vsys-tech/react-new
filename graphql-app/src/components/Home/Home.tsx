import {Box} from "@mui/material";
import {useQuery} from "@apollo/client";
import {CustomerProps} from "../../types/customers/CustomerProps";
import {customersQuery} from "../../graphql/queries/Queries";


const Home = () => {

    const {data, loading, error} = useQuery(customersQuery);
    if (loading) return (<p>'loading ....'</p>);
    if (error) return <div><p> error !!! </p></div>

    return (
        <Box>
            <div>
                <ul>
                    {
                        data.customers.map((customer: CustomerProps) => {
                            return (
                                <div key={customer.id}>
                                    <p>{customer.name}</p>
                                    <div>
                                        {
                                            customer.customerDetail.map(details => {
                                                return (
                                                    <div key={details.id}>
                                                        <p>{details.email}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>);
                        })
                    }
                </ul>
            </div>
        </Box>
    )
}

export default Home;