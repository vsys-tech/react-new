import {useSubscription} from "@apollo/client";
import {customersSubscription} from "../../graphql/queries/Queries";
import React from "react";
import {CustomerSubProps} from "../../types/customers/CustomerSubProps";

const newData: CustomerSubProps[] = [];


const AllCustomers = () => {


    const {data, loading, error} = useSubscription(customersSubscription);

    if (loading) return (<p>'loading ....'</p>)
    if (error) return <><p> error !!! </p></>
    newData.push(data.createdCustomers)
    const updated = () => {
        return (
            <>
                {
                    newData.map(newd => {

                        return (
                            <div key={Math.random().toString()}>
                                <p>{newd.id} {newd.name}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            {
                <div>
                    {
                        updated()
                    }
                </div>
            }

        </>
    )
}


export default AllCustomers;