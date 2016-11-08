import {Component, ViewEncapsulation} from '@angular/core';

import {ChartsService} from './charts.service';

@Component({
  selector: 'chartist-js',
  encapsulation: ViewEncapsulation.None,
  styles: [require('chartist/dist/chartist.css'), require('./charts.scss')],
  template: require('./charts.html'),
})

export class ChartsComponent {

  data:any;

  constructor(private _chartistJsService:ChartsService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
