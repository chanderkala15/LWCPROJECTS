import { LightningElement } from 'lwc';
import parenttemplate from './showAccountContactTemplate.html'
import accounttemplate from './account.html'
import contacttemplate from './contact.html'
export default class ShowAccountContactTemplate extends LightningElement {
    targettemplate = parenttemplate;
    accountdetail;
    contactdetail;
    
   
    render()
    {
        alert("inside render ");
   //     return parenttemplate;
      // return accounttemplate
      //  this.targettemplate = parenttemplate;
        
     
        return this.targettemplate;
    }
  /*
    renderedCallback(){
        return this.targettemplate;

    } */
handleClick(event)
{
    //this.targettemplate = parenttemplate;   
    console.log("button clicked");
    console.log(event.target.name);
    if(event.target.name== "accountButton")

        {   
            this.accountdetail= true;
            this.contactdetail=false;
          //alert("account button clicked");
            this.targettemplate = accounttemplate;   
        }
    else if (event.target.name== "contactButton")
    
    { 
        this.contactdetail=true;
        this.accountdetail=false;
       // alert("contact button clicked");
        this.targettemplate = contacttemplate; }
        console.log(this.targettemplate);
       // alert(this.targettemplate);
    
}
}