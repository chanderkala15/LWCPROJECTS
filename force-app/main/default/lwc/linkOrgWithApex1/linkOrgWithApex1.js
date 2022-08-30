import { LightningElement, api, wire, track } from 'lwc';

import getAccountList2 from  '@salesforce/apex/AccountControllerClass1.getAccountList2';
//rating = 'Cold';

export default class LinkOrgWithApex1 extends LightningElement {
   @track value  = "Hot"
   @track accountRecords;
   @track error;
 rating = 'Hot';

//@wire(getAccountList2, {Rating : '$rating'})
@wire(getAccountList2, {Rating : '$rating'})
accountshandler({error,data})
{
    if(data)
    {
        console.log("response came" + data)
        this.accountRecords = data;
       
    }
    if(error)
    {
       
        console.log("error came" + error)
    }
}
    /*wiredAccount({error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            console.log("record returned " +this.record)
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }*/
        get options() {
            return [
                { label: 'Hot', value: 'Hot' },
                { label: 'Warm', value: 'Warm' },   
                { label: 'Cold', value: 'Cold' },      
            ];
        }
        handleChangeCombo(event)
        {
          //  alert("value selected" + event.target.value);
           // this.value =event.target.value
            this.rating =event.target.value
            alert("value selected: " + this.rating);
        }

        
    } 
