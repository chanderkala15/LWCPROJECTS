import { LightningElement } from 'lwc';

export default class EmployeeQuerySelectorDemo extends LightningElement {

employees = [
{    id:   101,
    name:  "john",
    salary: 4000
},
{    id:   102,
    name:  "Mohn",
    salary: 4000
},
{    id:   103,
    name:  "Ram",
    salary: 4000
}

]
handleSelect(){

}
handleClear(event){
   const empno=event.target.dataset.empno;
   alert(empno);
   //alert( this.template.querySelector(`lightning-input[data-empno='${empno}']`))
   this.template.querySelector(`lightning-input[data-empno='${empno}']`).value = " "
}
handleclearfirst(event){


this.template.querySelector("lightning-input[data-empno = '101']").value = " "
}
handleClearAll(){
   
    Array.from(this.template.querySelectorAll("lightning-input")).forEach(e=>e.value = "")

    // arr =  Array.from(this.template.querySelectorAll("lightning-input"));
   // alert(Array.from(this.template.querySelectorAll("lightning-input")));
   //arr = Array.from(this.template.querySelectorAll("lightning-input"));
}
    
    }