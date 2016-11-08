import { Routes, RouterModule }  from '@angular/router';

import { ProductsComponent } from './products.component';
import { UploaderComponent } from './components/uploader/uploader.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: 'uploader', component: UploaderComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
