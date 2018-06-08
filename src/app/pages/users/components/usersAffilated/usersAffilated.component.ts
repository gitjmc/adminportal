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
      compContactId: {
        title: 'ID',
        type: 'number',
      },
      persId: {
        title: 'persID',
        type: 'number',
      },
      firstname: {
        title: 'Prenom',
        type: 'string',
      },
      lastname: {
        title: 'Nom',
        type: 'string',
      },
      phone: {
        title: 'Tél',
        type: 'number',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      compId: {
        title: 'compID',
        type: 'number',
      },
      name: {
        title: 'Nom',
        type: 'string',
      },
      phoneCompany: {
        title: 'Tél',
        type: 'number',
      },
      compTypeId: {
        title: 'compTId',
        type: 'number',
      },
      compType: {
        title: 'Type',
        type: 'string',
      },
/*      account: {
        title: '#account',
        type: 'number',
      },
      balance: {
        title: 'Balance',
        type: 'number',
      },
      userId: {
        title: '#user',
        type: 'number',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      accountTypeId: {
        title: '#type',
        type: 'number',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      compId: {
        title: '#cie',
        type: 'number',
      },
      name: {
        title: 'Nom',
        type: 'string',
      },*/
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
