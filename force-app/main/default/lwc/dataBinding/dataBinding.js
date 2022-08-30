import { LightningElement } from 'lwc';
export default class DataBinding extends LightningElement {
firstname = 'john';
age = 20;
position = ['developer', 'administrator', 'ceo'];

person = {
    name :'Methew',
    age : 20,
    address : {
    city :'hisar',
    district :'hisar',
    zip : 125001
    
    }
}
fruits = ['Apple', 'orange', 'Banana', 'pears'];
display(){

}
get fruit(){
    return this.fruits[0];
}


handleChange(event)
  {
      
    this.firstname = event.target.value;
  }
}
