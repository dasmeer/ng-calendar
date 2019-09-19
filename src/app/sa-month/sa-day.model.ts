export class SaDay {
    num: number;
    isHoliday: boolean;
    isShort: boolean;
    isDisabled: boolean = false;

    constructor(num: number, isHoliday: boolean = false, isShort: boolean = false) {
        this.num = num;
        this.isHoliday = isHoliday;
        this.isShort = isShort;
    }

    setType = () => {
        if (!this.isShort && !this.isHoliday)
            this.isShort = true;
        else if (this.isShort) {
            this.isShort = false;
            this.isHoliday = true;
        }
        else if (this.isHoliday) {
            this.isHoliday = false;
        }
    };
}
