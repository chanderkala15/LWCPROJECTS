import { LightningElement, api, wire, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
//import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import getZipCode from '@salesforce/apex/advisorController.getZipCode'
//import Name from '@salesforce/schema/Account.Name';
//import Zip_Code__c from '@salesforce/schema/Account.Zip_Code__c';


const ZipCode = '12501'
export default class advisorAssist extends LightningElement {
   // ZipCode = '12501' 
   columns = [   
        {
        label : 'Account Name ',
        fieldName : 'Name',
       },
    
       {
        label : 'ZipCode ',
        fieldName : 'Zip_Code__c',
       }  
    ]    
    error;
@track displayData
//@track value ="initial";
  //  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  //  objectInfo;
    //@wire(getObjectInfo, {ZipCode: '$ZipCode' })
    @wire(getZipCode)
  // @wire(getZipCode, {ZipCode: '$ZipCode'})
    relatedData({error, data})
     {
        if(data)
            {alert("data came")
                this.displayData = data;
                console.log("data came" + this.displayData);

            }
        else if(error)
        {
            this.error = error    
            console.log('some error' + this.error);
        }    

    }
    handleRowAction()
    {

    }
   /* get fields() {
        // Returns a map of record type Ids 
        
        return this.objectInfo.data
        //return Object.keys(rtis).find(rti => rtis[rti].name === 'Special Account');

    } 
    handleClick(){

       for(var i=0; i <= 4; i++) 
       {
    //    this.value = (this.objectInfo.data.fields)[i][0]
         this.value = Object.entries(this.objectInfo.data.fields)[i][0]
        alert(this.value);
       }// alert(this.objectInfo.data);
      console.log("log displayed"  + this.objectInfo.data.fields);""
     // console.log(Object.entries(this.objectInfo.data.fields)[i][0])
      console.log(this.objectInfo.data.fields);
      console.log( this.objectInfo.data.fields[0] [1])
      console.log(this.objectInfo.data.fields[0] [2])

    } */
}