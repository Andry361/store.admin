import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'analytics',
    template: `<router-outlet></router-outlet>`
})
export class AnalyticsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}