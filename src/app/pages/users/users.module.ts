import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { HotTable, HotTableModule } from 'ng2-handsontable';

import { routing } from './users.routing';
import { Users } from './users.component';

import { UsersCustomers } from './components/usersCustomers/usersCustomers.component';
import { UsersCustomersService } from './components/usersCustomers/usersCustomers.service';
import { UsersAffilated } from './components/usersAffilated/usersAffilated.component';
import { UsersAffilatedService } from './components/usersAffilated/usersAffilated.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
  ],
  declarations: [
    Users,
    UsersCustomers,
    UsersAffilated,
  ],
  providers: [
    UsersCustomersService,
    UsersAffilatedService,
  ],
})
export class UsersModule {
}
