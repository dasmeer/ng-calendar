import { SaDay } from "./sa-day.model";

export class SaMonth {
    index: number;
    title: string;
    firstDayOfWeek: number;
    lastDay: number;
    daysLabels: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    days: SaDay[][];
    currentDayIsOn: boolean;

    startWithMonday: boolean;

    constructor(
        year: number,
        index: number,
        title?: string,
        holidays?: string[],
        currentDayIsOn: boolean = false
    ) {
        // console.log(index);
        this.index = index;
        this.lastDay = new Date(year, index + 1, 0).getDate();
        this.firstDayOfWeek = new Date(year, index, 1).getDay();
        this.title = title || `-${index}-`;
        this.days = new Array(4);
        this.currentDayIsOn = currentDayIsOn;

        // for (var d = 1; d <= this.lastDay; d++) {

        if (this.firstDayOfWeek === 0) this.firstDayOfWeek = 7;

        // console.log(`i = ${index}, last = ${this.lastDay}, fdw = ${this.firstDayOfWeek}`);
        //console.log(holidays);

        var firstFound = false;
        var d = 1;
        let today = new Date();

        for (var w = 0; w < 6; w++) {
            this.days[w] = [];

            // if (d < this.lastDay)
            for (var j = 0; j < 7; j++) {
                if (!firstFound) firstFound = j === this.firstDayOfWeek - 1;

                if (firstFound) {
                    // console.log(`w${w} d${j} = ${d}`);
                    let isCurrent =
                        currentDayIsOn &&
                        year === today.getFullYear() &&
                        index === today.getMonth() &&
                        d === today.getDate();
                    this.days[w].push(
                        new SaDay(
                            d,
                            holidays && holidays.indexOf(`${d}`) != -1,
                            false,
                            isCurrent
                        )
                    );
                    d++;
                }

                if (d > this.lastDay) break;
            }
            if (d > this.lastDay) break;
        }
    }
}
