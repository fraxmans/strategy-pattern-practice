import { Payment } from "./Payment";
import { FirstNameFirst } from "./FirstNameFirst";
import { LastNameFirst } from "./LastNameFirst";
import { YYYYMMDDDateDisplay } from "./YYYYMMDDDateDisplay";
import { MMDDYYYYDisplay } from "./MMDDYYYYDisplay";

const firstNameFirst = new FirstNameFirst();
const lastNameFirst = new LastNameFirst();
const yyyyMMdd = new YYYYMMDDDateDisplay();
const mmDDyyyy = new MMDDYYYYDisplay();

const payment = new Payment("John", "", "Doe", 2500, yyyyMMdd, lastNameFirst);
payment.displayPayment();

payment.setDateDisplayStrategy(mmDDyyyy);
payment.displayPayment();

payment.setNameDisplayStrategy(firstNameFirst);
payment.displayPayment();
