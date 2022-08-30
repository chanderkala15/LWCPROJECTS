import { LightningElement,api, wire, track } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name'
import NAME_FIELD2 from '@salesforce/schema/Contact.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

import {getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'

const ObjectApiNames = [ACCOUNT_OBJECT, CONTACT_OBJECT]
export default class LinkWithOrgDataWire3 extends LightningElement {

    @api recordId;
    @api objectApiName;
    objectInfo;
    objectName;
    totalFields;
    SelectedfieldApiName;
    fieldDatatype;
    fieldType;  
  

//@wire(getObjectInfo,{objectApiName: '$objectApiName'})
@wire(getObjectInfo,{objectApiName: 'Account'})
objectInfo;

/*getObjectData({response})
    { 
        if(response)
        {
            this.objectInfo = response;
         //   this.objectName=this.objectApiName;
        }
    }  */
get fieldOptions() {
        let fieldList = [];      
                if (this.objectInfo.data.fields) {
                    for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
                      /*  if(i<=3){
                           console.log("json" +JSON.stringify(this.objectInfo.data.fields));
                           console.log("without json" + (this.objectInfo.data.fields));
                        } */
                        fieldList.push({
                            label: Object.entries(this.objectInfo.data.fields)[i][0],
                            value: Object.entries(this.objectInfo.data.fields)[i][0]
                        });
                    }
                }
               console.log("total fields" +i)     
        return fieldList;
    }
get totalField(){
    let totalFields = 0;
    if (this.objectInfo.data.fields)
    {
       console.log("inside total field");
       console.log(this.objectInfo.data.fields);
     //  totalFields = this.objectInfo.data.fields.length
      totalFields = Object.entries(this.objectInfo.data.fields).length
    //   console.log(totalFields);   
    }
   return totalFields;
    }
get totalIntegerFields()
   {
    return this.countNumberOfField('Int');
   }
get totalTextFields()
   {
    return this.countNumberOfField('String');
   }
get totalPicklistFields()
    {
    return this.countNumberOfField('Picklist');
    }
get totalPhoneFields()
    {
    return this.countNumberOfField('Phone');
    }
    
get totalCurrencyFields()
    {
    return this.countNumberOfField('Currency');
    }
    
get totallookupFields()
    {
    return this.countNumberOfField('Reference');
    }


    countNumberOfField(fieldType) {
    let count = 0;
            if (this.objectInfo.data.fields) {
                for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
                    if (Object.entries(this.objectInfo.data.fields)[i][1].dataType === fieldType) {
                        count++;
                    }
                }
      
    }
    return count;
}

    
handleChange(event)
{
    this.SelectedfieldApiName = event.target.value; 
    
 //  handleClick()

  if (this.objectInfo.data.fields) {
    
    for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
  
     if (Object.entries(this.objectInfo.data.fields)[i][1].apiName === this.SelectedfieldApiName) 
        {
            if(Object.entries(this.objectInfo.data.fields)[i][1].apiName == this.SelectedfieldApiName)
          {
            this.fieldDatatype =  Object.entries(this.objectInfo.data.fields)[i][1].dataType    
          
          if ( Object.entries(this.objectInfo.data.fields)[i][1].custom == true)
                 this.fieldType = 'Custome'
          else
          {
            this.fieldType = 'Standard'
          
          }       
          }
        }
    } 
} 
}

//handleClick()
//{}
handleClick1()
{
    if (this.objectInfo.data.fields) {
     //   alert("Button clicked")
        for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {

            if(i<=2)   { 
             // alert(Object.entries(this.objectInfo.data.fields)[i][1].apiName + this.SelectedfieldApiName )
     
                }   
       if (Object.entries(this.objectInfo.data.fields)[i][1].apiName === this.SelectedfieldApiName) 
            {
                if(Object.entries(this.objectInfo.data.fields)[i][1].apiName == this.SelectedfieldApiName)
              {
                this.fieldDatatype =  Object.entries(this.objectInfo.data.fields)[i][1].dataType    
              
              if ( Object.entries(this.objectInfo.data.fields)[i][1].custom == true)
                     this.fieldType = 'Custome'
              else
              {
                this.fieldType = 'Standard'
              
              }       
              }
            }
        } 
    } 
}
/*
get fieldDatatype()
 {
    return this.fieldDatatype(this.SelectedfieldApiName);
 }
*/

}
