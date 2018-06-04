import { Injectable } from '@angular/core';

@Injectable()
export class UsersAffilatedService {

  usersAffilatedData = [
    {
      id: 1,
      companyName: 'BIAT',
      contact: 'Mohamed Ben Mohamed',
      phone: '71710451',
      fax: '71710451',
      email: 'mohamedbenmohamed@gmail.com',
      address: '110 Av. Hédi chaker',
    },
    {
      id: 2,
      companyName: 'Tunisair',
      contact: 'Ali Ben Mohamed',
      phone: '71719951',
      fax: '71719952',
      email: 'alibenmohamed@gmail.com',
      address: '10 Rue Hédi Nouira',
    },
    {
      id: 3,
      companyName: 'STB',
      contact: 'Ilyas Matoussi',
      phone: '71719977',
      fax: '71719978',
      email: 'ilyasmatoussi@gmail.com',
      address: '10 Rue Mohamed V',
    },
    {
      id: 3,
      companyName: 'La poste',
      contact: 'Slah Elmajri',
      phone: '71339977',
      fax: '71339978',
      email: 'slahelmajri@gmail.com',
      address: '10 Rue de la liberté',
    },
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.usersAffilatedData);
      }, 2000);
    });
  }
}
