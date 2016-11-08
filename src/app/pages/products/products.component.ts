import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'products-form',
    template: `<router-outlet></router-outlet>`
})
export class ProductsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}