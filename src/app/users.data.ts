import { DataUser } from "./app.entity";

export const userDataPublic: 
Array<DataUser> = [{
  username: 'kartadimana123',
  name: 'Karta',
  age: 23,
  email: '68765@fif.co.id',
  basicSalary: '10000000',
  city: 'Bandung',
  province: 'Jawa Barat',
  zipcode: '40135',
  paymentDeadline: new Date(2024,8,18),
  isChecked: false
},
{
  username: 'adiadikbudiman123',
  name: 'Adi',
  age: 24,
  email: '99999@fif.co.id',
  basicSalary: '12000000',
  city: 'Tangerang Selatan',
  province: 'Banten',
  zipcode: '15411',
  paymentDeadline: new Date(2024,8,18),
  isChecked: false
}]
