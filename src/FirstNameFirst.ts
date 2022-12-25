import { NameDisplayStrategy } from "./interface/NameDisplayStrategy";

export class FirstNameFirst implements NameDisplayStrategy {
  display(firstName: string, middleName: string, lastName: string): void {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } 
}
