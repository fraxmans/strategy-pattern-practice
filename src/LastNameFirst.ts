import { NameDisplayStrategy } from "./interface/NameDisplayStrategy";

export class LastNameFirst implements NameDisplayStrategy {
  display(firstName: string, middleName: string, lastName: string): void {
    console.log(`${lastName} ${middleName} ${firstName}`);
  } 
}
