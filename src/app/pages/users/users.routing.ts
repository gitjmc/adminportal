import { Routes, RouterModule } from '@angular/router';

import { Users } from './users.component';
import { UsersCustomers } from './components/usersCustomers/usersCustomers.component';
import { UsersAffilated } from './components/usersAffilated/usersAffilated.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      { path: 'customers', component: UsersCustomers },
      { path: 'affilated', component: UsersAffilated },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
