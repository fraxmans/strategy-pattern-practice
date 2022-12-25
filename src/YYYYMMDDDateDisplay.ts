import { DateDisplayStrategy } from "./interface/DateDisplayStrategy";

export class YYYYMMDDDateDisplay implements DateDisplayStrategy {
  display(year: number, month: number, day: number): void {
    console.log(`${year}/${month}/${day}`);
  }
}
