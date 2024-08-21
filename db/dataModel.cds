namespace ust.chitturi.hemalatha.db;
 
using { cuid, managed, temporal, Currency } from '@sap/cds/common';
using { ust.chitturi.hemalatha.common } from './common';

context master {
    entity employees: cuid {
        nameFirst: String(40);
        nameMiddle: String(40);
        nameLast: String(40);
        nameInitials: String(40);
        Gender: common.Gender;
        language: String(1);
        phoneNumber: common.PhoneNumber;
        email: common.Email;
        loginName: String(12);
        Currency: Currency;
        salaryAmount: common.AmountT;
        accountNumber: String(16);
        bankId: String(40);
        bankName: String(64);
    }
}
