import { DateDisplayStrategy } from './interface/DateDisplayStrategy';
import { NameDisplayStrategy } from './interface/NameDisplayStrategy';

export class Payment {
  firstName: string;
  middleName: string;
  lastName: string;
  amount: number;
  dateDisplayStrategy: DateDisplayStrategy;
  nameDisplayStrategy: NameDisplayStrategy;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    amount: number,
    dateDisplayStrategy: DateDisplayStrategy,
    nameDisplayStrategy: NameDisplayStrategy
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.amount = amount;
    this.dateDisplayStrategy = dateDisplayStrategy;
    this.nameDisplayStrategy = nameDisplayStrategy;
  }

  displayPayment(): void {
    console.log('*****************************');
    this.nameDisplayStrategy.display(
      this.firstName,
      this.middleName,
      this.lastName
    );
    this.dateDisplayStrategy.display(2022, 12, 31);
    console.log(`Amount: ${this.amount}`);
    console.log('*****************************');
  }

  setDateDisplayStrategy(dateDisplayStrategy: DateDisplayStrategy): void {
    console.log(`\n\nSetting new date display strategy !!!\n\n`);
    this.dateDisplayStrategy = dateDisplayStrategy;
  }

  setNameDisplayStrategy(nameDisplayStrategy: NameDisplayStrategy): void {
    console.log(`\n\nSetting new name display strategy !!!\n\n`);
    this.nameDisplayStrategy = nameDisplayStrategy;
  }
}
