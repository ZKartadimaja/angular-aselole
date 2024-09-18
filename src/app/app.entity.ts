export interface DataUser {
    name: string;
    email: string;
    address: Address;
    paymentDeadline: Date;
    // action: boolean;
    completed: boolean;
}

interface Address {
    city: string;
    province: string;
    zipcode: number;
}
