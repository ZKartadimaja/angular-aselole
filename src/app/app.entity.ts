export interface DataUserResp {
    status: number;
    data:   DataUser[];
}

export interface DataUser {
    paymentDeadline: Date;
    username:        string;
    name:            string;
    age:             number;
    email:           string;
    basicSalary:     string;
    city:            string;
    province:        string;
    zipcode:         string;
    isChecked:       boolean;
    id?:             string;
}
