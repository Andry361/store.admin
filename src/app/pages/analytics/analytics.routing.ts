import { Routes, RouterModule }  from '@angular/router';

import { AnalyticsComponent } from './analytics.component';
import { ChartsComponent } from './components/charts/charts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
    children: [
      { path: 'charts', component: ChartsComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
