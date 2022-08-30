import { LightningElement, api, wire, track } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import NAME_FIELD from '@salesforce/schema/Account.Name'
//import CONTACT_OBJECT from '@salesforce/schema/Contact'
//import NAME_FIELD2 from '@salesforce/schema/Contact.Name'

import {getRecord,getFieldValue,getRecordUi} from 'lightning/uiRecordApi';
const fields = [NAME_FIELD,INDUSTRY_FIELD,ANNUALREVENUE_FIELD,ACCOUNT_NUMBER] 
//const fields = [NAME_FIELD2] 
export default class LinkWithOrgDataWire extends LightningElement {

 // @api objectApiName
    @api recordId;
    accountInfo
    @wire(getRecord,{recordId:'$recordId',fields:fields})
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

    get AccountRevenue(){
        return getFieldValue(this.accountInfo, ANNUALREVENUE_FIELD)
    }
    get AccountName(){
        return getFieldValue(this.accountInfo, NAME_FIELD)
    }
    get Industry(){
        return getFieldValue(this.accountInfo, INDUSTRY_FIELD)
    }
    get AccountNumber(){
        return getFieldValue(this.accountInfo, ACCOUNT_NUMBER)
    }
   
    
}