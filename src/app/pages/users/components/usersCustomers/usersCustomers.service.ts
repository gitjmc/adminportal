import { Injectable } from '@angular/core';

@Injectable()
export class UsersCustomersService {

  usersCustomersData = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mdo',
      email: 'mdo@gmail.com',
      address: '21 rue jeddah',
      age: '28',
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@fat',
      email: 'fat@yandex.ru',
      address: '9 rue jeddah',
      age: '45',
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      username: '@twitter',
      email: 'twitter@outlook.com',
      address: '10 rue jeddah',
      age: '18',
    },
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.usersCustomersData);
      }, 2000);
    });
  }
}
