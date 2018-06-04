import { Routes, RouterModule } from '@angular/router';

import { Transactions } from './transactions.component';
import { TransactionsClients } from './components/transactionsClients/transactionsClients.component';

const routes: Routes = [
  {
    path: '',
    component: Transactions,
    children: [
      { path: 'transactionsclients', component: TransactionsClients },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
