import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './groups.routing';
import { GroupsTable } from './groups.component';
import { GroupsTableService } from './groups.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    GroupsTable,
  ],
  providers: [
    GroupsTableService
  ]
})
export default class GroupsModule {}
