import { LightningElement } from 'lwc';
export default class Arithmetic_Calculation extends LightningElement {
 output;   
 input1 = 0;
 input2 = 0;
 error  = '  ';
handleChange(event)
    {
             //this.error = " "
      if(event.target.name == "input1" )
       { this.input1 = event.target.value;
  //     console.log('handle change1 ' + this.input1)
       }
       if(event.target.name == "input2" )
       {
        this.input2 = (event.target.value);
 //       console.log('handle change2 ' + this.input2)
       }  

    }

handleClick(event)
    {

        this.error = ' ';
        console.log('click event');
  
        console.log('input 1 value and length is  ' + this.input1);
        console.log(this.input1.toString().length);
       
        console.log('input 2 value and length is ' + this.input2);    
        console.log(this.input2.toString().length);

        console.log(this.input1.toString().length === 0);
        console.log(this.input2.toString().length === 0);

      if(this.input1.toString().length === 0 || this.input2.toString().length === 0)
      {
        console.log('Please enter valid inputs') ;
        this.error = 'Please enter valid inputs';
        this.output = 0;
      }
       
      else    
      {
      if(event.target.name == "addbutton") 
        {
        this.output = (parseInt(this.input1) + parseInt((this.input2)));
        }
      if(event.target.name == "subbutton")
       { 
        this.output = parseInt(this.input1) - parseInt(this.input2); 
       }
      if(event.target.name == "multbutton")
       { 
        this.output = parseInt(this.input1) * parseInt(this.input2);
       }
    
       if(event.target.name == "divbutton")
       {      
        if(this.input2 == 0) {
          this.error = 'Number cannnot be divide by zero';
         }
        else
         {
            this.output = parseInt(this.input1) / parseInt(this.input2);
         }  
       }
      
       if(event.target.name == "clearbutton")
       { 
        //console.log('clear button clicked');
        this.input1 = ' ';
        this.input2 = ' ';
        this.output = ' ';
        this.error  = '  ';
       }
    }   
 }
}