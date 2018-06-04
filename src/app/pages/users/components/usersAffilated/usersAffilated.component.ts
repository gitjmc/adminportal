import { Component } from '@angular/core';

import { UsersAffilatedService } from './usersAffilated.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'smart-tables',
  templateUrl: './usersAffilated.html',
  styleUrls: ['./usersAffilated.scss'],
})

export class UsersAffilated {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      companyName: {
        title: 'Companie',
        type: 'string',
      },
      contact: {
        title: 'Contact',
        type: 'string',
      },
      phone: {
        title: 'Téléphone',
        type: 'number',
      },
      fax: {
        title: 'Fax',
        type: 'number',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      address: {
        title: 'Adresse',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: UsersAffilatedService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if ( window.confirm('Are you sure you want to delete?') ) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
