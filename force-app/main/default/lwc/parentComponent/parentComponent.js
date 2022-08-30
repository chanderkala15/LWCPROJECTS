import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    message="this message is passed to child from parent component";
    

employees= [
      { 
        code : 101,
        name:   "John"},
      {
         code : 102,
         name:   "Mohn"},
      {
        code : 103,
        name:   "Rohn"}

 ]

}