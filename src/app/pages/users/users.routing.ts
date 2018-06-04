import { Routes, RouterModule } from '@angular/router';

import { Users } from './users.component';
import { UsersCustomers } from './components/usersCustomers/usersCustomers.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      { path: 'customers', component: UsersCustomers },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
