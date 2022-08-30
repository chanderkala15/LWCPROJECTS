import { LightningElement } from 'lwc';

export default class QuerySelectorLearning extends LightningElement {

    arr = [];
    handleClick(event) {
       const p = this.template.querySelectorAll("p");
      // alert(p.innerHTML)
      // console.log("displaying value again");
      // alert(p.innerHTML)
      // console.log(p);
      
      //console.log('hello');
      // Array.from(p).forEach((element) => {
      //  console.log(element.innerHTML)
      // });    
       
       const elementdiv = this.template.querySelector(".dynamic") ;

       elementdiv.innerHTML = "<p style = 'background: green' 'color:red'> Dynamic para inserted via javascript </p> "

       const input1 = this.template.querySelector("lightning-input[data-id1]").value;
       alert(input1)
       /*console.log(p.innerHTML);
       console.log('hello');
       console.log(p.innerHTML);
       alert(p.innerHTML)
              */
    }
}