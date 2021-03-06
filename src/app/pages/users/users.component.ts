import {Component, ViewEncapsulation} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UsersTableService } from './users.service';

@Component({
  selector: 'users-table', 
  encapsulation: ViewEncapsulation.None,
   styles: [require('./users.scss')],
  template: require('./users.html')
})
export class UsersTable {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number'
      // },
      Name: {
        title: 'Имя',
        type: 'string'
      },
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string'
      // },
      // username: {
      //   title: 'Username',
      //   type: 'string'
      // },
      // email: {
      //   title: 'E-mail',
      //   type: 'string'
      // },
      // age: {
      //   title: 'Age',
      //   type: 'number'
      // }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: UsersTableService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }
 onCreateConfirm(event): void {
   alert(event);
 }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
