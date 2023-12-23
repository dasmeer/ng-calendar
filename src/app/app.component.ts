import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { Constants } from "./constants";
import { CookieService } from "./CookieSevice";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    model: Model;
    years: number[] = [];
    countries = ["", Constants.RUSSIA, Constants.MALTA];
    printStyles = [Constants.PORTRAIT, Constants.ALBUM];
    selectedCountry: string = "";
    selectedYear: number;
    selectedPrintStyle = Constants.PORTRAIT;
    selectedPrintIsPortrait = true;
    currentDayIsOn = false;
    disablingIsOn = false;

    ngOnInit() {
        let selectedPrintStyle = this.getSelectedPrintStyle();
        if (!selectedPrintStyle) this.setSelectedPrintStyle();

        this.selectedPrintStyle = selectedPrintStyle
            ? selectedPrintStyle
            : Constants.PORTRAIT;

        this.updateSelectedPrintStyle();

        let selectedCountry = this.getSelectedCountry();
        if (selectedCountry) this.onCountryChange(selectedCountry);
    }

    constructor() {
        let date = new Date();
        let year = date.getFullYear();
        for (let i = year; i < year + 5; i++) {
            this.years.push(i);
        }

        this.selectedYear = year;
        this.model = new Model(
            year,
            this.selectedCountry,
            this.currentDayIsOn,
            this.disablingIsOn
        );
    }

    onYearChange(value) {
        this.selectedYear = value;
        this.model = new Model(
            value,
            this.selectedCountry,
            this.currentDayIsOn,
            this.disablingIsOn
        );
    }
    onCountryChange(value) {
        this.selectedCountry = value;
        this.model = new Model(
            this.selectedYear,
            value,
            this.currentDayIsOn,
            this.disablingIsOn
        );
        this.setSelectedCountry();
    }
    onPrintStyleChange(value) {
        this.selectedPrintStyle = value;
        this.setSelectedPrintStyle();
    }
    onCurrentDayChange(value) {
        this.model = new Model(
            this.selectedYear,
            this.selectedCountry,
            value,
            this.disablingIsOn
        );
    }
    onDisablingChange(value) {
        this.disablingIsOn = value;
        this.model = new Model(
            this.selectedYear,
            this.selectedCountry,
            this.currentDayIsOn,
            value
        );
    }

    setSelectedPrintStyle() {
        CookieService.setCookie("selectedPrintStyle", this.selectedPrintStyle);
        this.updateSelectedPrintStyle();
    }
    getSelectedPrintStyle() {
        return CookieService.getCookie("selectedPrintStyle");
    }
    updateSelectedPrintStyle() {
        this.selectedPrintIsPortrait =
            this.selectedPrintStyle === Constants.PORTRAIT;
    }
    setSelectedCountry = () =>
        CookieService.setCookie("selectedCountry", this.selectedCountry);

    getSelectedCountry = () => CookieService.getCookie("selectedCountry");
}
