import { LightningElement, track } from 'lwc';

export default class Day9tutorial extends LightningElement {

firstname = 'Chandrika';    
isShow =false;
 @track person = ['Ram', 25000];
 @ track Employee =[
      { name     : 'John',
        position : 'Developer'
   },

   {   name       : 'Mohn',
         position : 'Lead'
   },

  {      name     : 'John',
         position : 'Admin'
  }
 ]



fruits = ['apple', 'orange', 'banana'];
/*
handleClick(event)
    {
        if(event.target.name=='btn1')
        { 
        // alert('First button clicked');
          this.person[0] = 'Shyam';  
          this.Employee.position = 'Lead';
          this.person[1] = 50000;
        
        }
        else if(event.target.name=='btn2')
      //  alert('Second button clicked');
        this.person[1] = 50000;

        this.isShow = !this.isShow
    }
get personName(){
    return this.person[0];
}
get personsalary(){
    return this.person[1];

   }  */
}