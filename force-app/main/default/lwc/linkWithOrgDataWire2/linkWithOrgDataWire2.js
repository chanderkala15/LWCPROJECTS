import { LightningElement, api, wire, track } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import NAME_FIELD2 from '@salesforce/schema/Contact.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

import {getRecord,getFieldValue,getRecordUi} from 'lightning/uiRecordApi';

// fields = [NAME_FIELD,INDUSTRY_FIELD] 
const fields = [NAME_FIELD2] 


export default class LinkWithOrgDataWire2 extends LightningElement {

 //   @api objectApiName
    @api recordId;
    accountInfo
    // @wire(getRecord,{recordId:'$recordId',fields:fields})
    @wire(getRecord,{recordId:'$recordId',fields})
    getAccountData({data,error}){
        if(data)
        {   console.log("Inside get account data")
            this.accountInfo = data;
            console.log(data);

        }
        else if(error)
        {
            console.log("Inside error")
        }
    }
    
}