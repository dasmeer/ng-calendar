import { Component } from '@angular/core';
import { Model } from './repository.model';
import { SaMonthComponent } from './sa-month/sa-month.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    model: Model;
    years: Number[] = [];
    selectedYear: Number;
    disablingIsOn = false;
    currentDayIsOn = true;
    ru = true;
    // holidays: string = '{"a":[{ "1": [ "1", "2", "3", "4", "5", "6", "7", "8" ]} , {"2": [ "23" ]}, {"3": [ "8" ]}, {"5": [ "1", "9" ]}, {"6": [ "12" ]}, {"11": [ "4" ] }]}';

    constructor() {
        let date = new Date();
        let year = date.getFullYear();
        for (let i = year; i < year + 5; i++) {
            this.years.push(i);
        }

        this.selectedYear = year;
        this.model = new Model(year, this.ru);
    }

    onYearChange(value) {
        this.selectedYear = value;
        this.model = new Model(value, this.ru);
    }
}
