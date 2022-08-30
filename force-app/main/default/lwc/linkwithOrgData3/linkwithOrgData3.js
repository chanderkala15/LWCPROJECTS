import { LightningElement, api, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class LinkwithOrgData3 extends LightningElement {


    fieldList = {
        actNumber : ACCOUNT_NUMBER
    }

submitHandler(event)
{
    event.preventDefault();
   // alert("Inside submit handler")
    
    const annualRevenue = this.template.querySelector(".Revenue")
 //   alert("annual revenue is " + annualRevenue.value)
      if (annualRevenue.value <=200)
    {
        alert("less revenue to save")
            this.dispatchEvent(new ShowToastEvent({
            title: 'annual revenue cannot be less than 200',
            message: event.detail.message,
            variant: 'error'
        }))

    }
    else
    {
        const fields = event.detail.fields;
        alert(JSON.stringify(fields));
        console.log(JSON.stringify(fields));
        
        this.template.querySelector("lightning-record-edit-form").submit(fields);
    }

}
successHandler(event)

{
    alert("Inside success handler");

}
errorHandler(event)
{
    alert("inside error handler");
    
    this.dispatchEvent(new ShowToastEvent({
        title: 'error creating data',
        message: event.detail.message,
        variant: 'error'
    }))
}

}