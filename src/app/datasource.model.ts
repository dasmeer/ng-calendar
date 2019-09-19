import { SaMonth } from './sa-month/sa-month.model';
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

export class MonthDataSource {
    private data: SaMonth[];
    private titles: string[];
    private monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    private monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    private holidaysRu = '{ "1": [ "1", "2", "3", "4", "5", "6", "7", "8" ] , "2": [ "23" ], "3": [ "8" ], "5": [ "1", "9" ], "6": [ "12" ],"11": [ "4" ] }';
    private holidaysEn = '{ }';

    constructor(year: number, ru: boolean) {
        if (!year)
            year = new Date().getFullYear();

        this.data = new Array<SaMonth>();
        this.titles = ru ? this.monthsRu : this.monthsEn;
        var holidays = JSON.parse(ru ? this.holidaysRu : this.holidaysEn);


        for (var i = 0; i < 12; i++) {
            this.data.push(new SaMonth(year, i, this.titles[i], holidays[i+1]));
            // console.log(year + '--' + i);
        }
    }

    getData = () => this.data;
    // getData() {
    //     return Observable.from(this.data);
    // }
}