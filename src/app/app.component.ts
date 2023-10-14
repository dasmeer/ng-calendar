import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { SaMonthComponent } from "./sa-month/sa-month.component";
import { Constants } from "./constants";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    model: Model;
    years: number[] = [];
    country: string[] = ["", Constants.RUSSIA, Constants.MALTA];
    selectedCountry: string = "";
    selectedYear: number;
    disablingIsOn = false;
    currentDayIsOn = false;

    constructor() {
        let date = new Date();
        let year = date.getFullYear();
        for (let i = year; i < year + 5; i++) {
            this.years.push(i);
        }

        this.selectedYear = year;
        this.model = new Model(year, this.selectedCountry, this.currentDayIsOn);
    }

    onYearChange(value) {
        this.selectedYear = value;
        this.model = new Model(
            value,
            this.selectedCountry,
            this.currentDayIsOn
        );
    }
    onCountryChange(value) {
        this.selectedCountry = value;
        this.model = new Model(this.selectedYear, value, this.currentDayIsOn);
    }
    onCurrentDayChange(value) {
        this.model = new Model(this.selectedYear, this.selectedCountry, value);
    }
}
