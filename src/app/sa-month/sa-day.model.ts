export class SaDay {
    num: number;
    isHoliday: boolean;
    isShort: boolean;
    isCurrent: boolean;
    isDisabled: boolean = false;

    constructor(
        num: number,
        isHoliday: boolean = false,
        isShort: boolean = false,
        isCurrent: boolean = false,
        isDisabled: boolean = false
    ) {
        this.num = num;
        this.isHoliday = isHoliday;
        this.isShort = isShort;
        this.isCurrent = isCurrent;
        this.isDisabled = isDisabled;
    }

    setType = () => {
        if (!this.isShort && !this.isHoliday) this.isShort = true;
        else if (this.isShort) {
            this.isShort = false;
            this.isHoliday = true;
        } else if (this.isHoliday) {
            this.isHoliday = false;
        }
    };
}
