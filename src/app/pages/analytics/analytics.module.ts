import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgaModule } from '../../theme/nga.module';

import { FileUploadModule } from 'ng2-file-upload';

import { routing }   from './analytics.routing';
import { ChartsComponent }   from './components/charts/charts.component';
import { AnalyticsComponent }   from './analytics.component';

import { ChartsService } from './components/charts/charts.service';

@NgModule({
  imports: [
   CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
      ChartsComponent,
      AnalyticsComponent
  ],
  providers: [
    ChartsService
  ]
})
export default class AnalyticsModule {}