export interface DateDisplayStrategy {
  display(year: number, month: number, day: number): void;
}
