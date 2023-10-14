import { SaMonth } from "./sa-month/sa-month.model";
import { MonthDataSource } from "./datasource.model";

export class Model {
    private dataSource: MonthDataSource;
    private months: SaMonth[];
    // private locator = (m: SaMonth, i: number) => m.index == i;

    constructor(
        year: number,
        country: string,
        currentDayIsOn: boolean = false,
        disablingIsOn: boolean = false
    ) {
        this.dataSource = new MonthDataSource(
            year,
            country,
            currentDayIsOn,
            disablingIsOn
        );
        this.months = new Array<SaMonth>();
        this.dataSource.getData().forEach((x) => this.months.push(x));
    }

    getMonths = () => this.months;
    // getMonth = (i: number) => this.months.find(x => this.locator(x, i));
}
