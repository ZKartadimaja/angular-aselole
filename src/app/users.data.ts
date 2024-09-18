import { DataUser } from "./app.entity";

export const userDataPublic: Array<DataUser> = [{
    name: 'Karta',
    email: '68765@fif.co.id',
    address:
      {
        city: 'Bandung',
        province: 'Jawa Barat',
        zipcode: 40135
      },
    paymentDeadline: new Date(2024,8,18),
    // action: false,
    completed: false
    },
    {
    name: 'Adi',
    email: '99999@fif.co.id',
    address:
    {
      city: 'Tangerang Selatan',
      province: 'Banten',
      zipcode: 15411
    },
    paymentDeadline: new Date(2024,8,18),
    // action: false,
    completed: false
    }]
