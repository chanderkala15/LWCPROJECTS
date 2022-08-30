import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber'

export default class LinkWithOrgData extends LightningElement {

   // objectName = ACCOUNT_OBJECT;
    fieldList  = [NAME_FIELD, INDUSTRY_FIELD,ANNUALREVENUE_FIELD,ACCOUNT_NUMBER]


   @api objectApiName;
   @api recordId;

    successHandler(event)
    {
    alert("record created: " + event.detail.id)
    }
}