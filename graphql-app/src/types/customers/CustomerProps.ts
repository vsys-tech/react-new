import {CustomerDetailProps} from "./CustomerDetailProps";

export type CustomerProps = {
    id: number,
    name: string,
    isLoggedIn: boolean,
    customerDetail: CustomerDetailProps[]
}
