import { DateDisplayStrategy } from "./interface/DateDisplayStrategy";

export class MMDDYYYYDisplay implements DateDisplayStrategy {
  display(year: number, month: number, day: number): void {
    console.log(`${month}/${day}/${year}`);
  }
}
