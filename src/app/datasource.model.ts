import { Constants } from "./constants";
import { SaMonth } from "./sa-month/sa-month.model";
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

export class MonthDataSource {
    private data: SaMonth[];
    private titles: string[];
    private monthsRu = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    private monthsEn = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    private holidaysRu =
        '{ "1": [ "1", "2", "3", "4", "5", "6", "7", "8" ],' +
        ' "2": [ "23" ], "3": [ "8" ], "5": [ "1", "9" ], "6": [ "12" ], "11": [ "4" ] }';
    private holidaysMlt =
        '{ "1": [ "1" ], "2": [ "10" ], "3": [ "19", "31" ], "5": [ "1" ],' +
        ' "6": [ "7", "29" ], "8": [ "15" ], "9": [ "8", "21" ], "12": [ "8", "13", "25" ] }';
    private holidaysEmpty = "{ }";

    constructor(
        year: number,
        country: string,
        currentDayIsOn: boolean = false
    ) {
        if (!year) year = new Date().getFullYear();

        this.data = new Array<SaMonth>();
        this.titles = this.monthsRu;
        let holidays;

        switch (country) {
            case Constants.RUSSIA:
                holidays = JSON.parse(this.holidaysRu);
                break;
            case Constants.MALTA:
                holidays = JSON.parse(this.holidaysMlt);
                break;
            default:
                holidays = JSON.parse(this.holidaysEmpty);
                break;
        }

        for (var i = 0; i < 12; i++) {
            this.data.push(
                new SaMonth(
                    year,
                    i,
                    this.titles[i],
                    holidays[i + 1],
                    currentDayIsOn
                )
            );
            // console.log(year + '--' + i);
        }
    }

    getData = () => this.data;
    // getData() {
    //     return Observable.from(this.data);
    // }
}
