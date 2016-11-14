import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule }    from '@angular/http';

import { routing }       from './users.routing';
import { UsersTable } from './users.component';
import { UsersTableService } from './users.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule,
    routing
  ],
  declarations: [
    UsersTable,
  ],
  providers: [
    UsersTableService
  ]
})
export default class UsersModule {}
