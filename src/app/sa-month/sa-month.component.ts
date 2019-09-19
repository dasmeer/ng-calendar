import { Component, OnInit, Input } from '@angular/core';
import { SaMonth } from './sa-month.model';

@Component({
    selector: 'sa-month',
    templateUrl: './sa-month.component.html',
    styleUrls: ['./sa-month.component.css']
})
export class SaMonthComponent implements OnInit {
    @Input() model: SaMonth;

    constructor() {

    }

    ngOnInit() {
    }
}
