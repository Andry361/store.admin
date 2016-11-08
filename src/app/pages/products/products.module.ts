import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { FileUploadModule } from 'ng2-file-upload';

import { routing }   from './products.routing';
import { UploaderComponent }   from './components/uploader/uploader.component';
import { ProductsComponent }   from './products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    HttpModule,
    routing
  ],
  declarations: [
      UploaderComponent,
      ProductsComponent
  ]
})
export default class ProductsModule {}