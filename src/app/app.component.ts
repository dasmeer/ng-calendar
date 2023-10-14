import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { SaMonthComponent } from "./sa-month/sa-month.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    model: Model;
    years: number[] = [];
    selectedYear: number;
    disablingIsOn = false;
    currentDayIsOn = false;
    ru = true;
    // holidays: string = '{"a":[{ "1": [ "1", "2", "3", "4", "5", "6", "7", "8" ]} , {"2": [ "23" ]}, {"3": [ "8" ]}, {"5": [ "1", "9" ]}, {"6": [ "12" ]}, {"11": [ "4" ] }]}';

    constructor() {
        let date = new Date();
        let year = date.getFullYear();
        for (let i = year; i < year + 5; i++) {
            this.years.push(i);
        }

        this.selectedYear = year;
        this.model = new Model(year, this.ru, this.currentDayIsOn);
    }

    onYearChange(value) {
        this.selectedYear = value;
        this.model = new Model(value, this.ru, this.currentDayIsOn);
    }

    onCurrentDayChange(value) {
        this.model = new Model(this.selectedYear, this.ru, value);
    }
}
