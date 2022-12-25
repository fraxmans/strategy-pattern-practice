export interface NameDisplayStrategy {
  display(firstName: string, middleName: string, lastName: string): void;
}
