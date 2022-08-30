import { LightningElement,api, wire, track } from 'lwc';
import getAccountviaID from  '@salesforce/apex/AccountControllerClass.getAccountviaID';

import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import {createRecord, updateRecord, deleteRecord, retrieveRecord} from 'lightning/uiRecordApi' 
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import {getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import Industry from '@salesforce/schema/Account.Industry';
//const ObjectApiNames = [ACCOUNT_OBJECT, CONTACT_OBJECT]
const fields = [NAME_FIELD, INDUSTRY_FIELD, ANNUALREVENUE_FIELD]
//idforupdate='101';
export default class linkWithOrgDataCrtUpdRcd extends LightningElement {
    //create, Update, Delete records
 
 //recordId;
 value = 'Create';
 Name;
 AnnualRevenue;
 Industry;
  id;
  RecordId;
 
  get options() {
    return [
        { label: 'Create', value: 'Create' },
        { label: 'Update', value: 'Update' },        
    ];
}

handleChangeCombo(event)
{
    this.SelectedOpt = false
    this.value = event.target.value
if(this.value == "Update")
{
    this.SelectedOpt = true;
}    
if(this.value == "Create")   //not update -false
{
    this.SelectedOpt = false;
}    

} 

    formData = {};
    
    //handleChange(event) {
   //     this.value = event.detail.value;
   // }
  
    handleChange(event)
    {
        this.RecordId = ' '
        const {name, value}  = event.target
        this.formData[name]= value;
       
        if(event.target.name == "Id")
        {
        this.RecordId = event.target.value
        }
        
    }
    handleClick(event)
    {

//create Record
  /*      alert('created button clicked') */
    if(event.target.name == "Create") {
        createRecord({apiName : 'Account' , fields:this.formData})
        .then(response=>{

            alert('response came back');
            console.log("response " + response);
                this.formData = {}
                this.Name =' '
                this.AnnualRevenue = 0
                this.Industry = ' '
            }) 
        }
    //Update Record      
    if(event.target.name == "Update")
    { 
       console.log("Update Button clicked")
       
        updateRecord({fields: this.formData})
        .then(response=>{

            alert('Record Updated')
            console.log(response)
            
                this.formData = {}
                this.Name =' '
                this.AnnualRevenue = 0
                this.Industry = ' '
            })
    }
    //Retrieve record
    if(event.target.name == "Retrieve")
    {
        alert("retriev function got call ed for id " + this.RecordId);
        getAccountviaID({RecordId: this.RecordId})
       .then(result => {
        alert("respone " + result)
        let i=0;
        for (i = 0; i <result.length; i++) {
            alert("inside for");
            alert(result[i].Name);
        
          //  this.AccountData = result;
                this.error = undefined;
                this.Name = result[i].Name;
                this.AnnualRevenue = result[i].AnnualRevenue;
                this.Industry  = result[i].Industry;

           //     alert("respone " + this.Name)
        }
            })
            .catch(error => {
                alert("inside error " + error);
                this.error = error;
                this.AccountData = undefined;
            });
    }


     }


        
      //  console.log(this.formData[Industry]) idforupdate //getRecordui - 
    //    retrieveRecord({apiName : 'Account' ,  "0015j00000k0iXjAAI", "?$select=name&$expand=primarycontactid($select=contactid,fullname)"})
     //   .then(response=>{

     ///       alert('response came back')
     //       console.log(response)
            
      

 /*   @wire(getRecord, {            /getRecord
        recordId: '$idforupdate',
        fields
      })
      accountdata;
     get Name()
     {
        return getFieldValue(this.account.data, NAME_FIELD);
     } 
     get Industry()
     {
        return getFieldValue(this.account.data, INDUSTRY_FIELD);
     }  */
} 
