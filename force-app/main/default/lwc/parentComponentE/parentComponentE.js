import { LightningElement, api } from 'lwc';

export default class ParentComponentE extends LightningElement {

  sliderValue;
    @api maxslidervalue;
     /* 
    handleChange(event){

        this.sliderValue = event.target.value;
    }
    handleResetButton(event){

       this.template.querySelector("c-child-component-e").resetButton()
    }
        */
    handleDisplay(event){
        alert("parent handler for child event")
       
        alert(event.detail.code);
        alert(event.detail.name);
    }
    handleClick(event){
        {
            alert("start button clicked")
            this.template.querySelector("c-child-component-e").handleStart();
            this.template.querySelector('lightning-button').disabled = true;
        }

    } 
    handlePogress(){
        this.template.querySelector('lightning-button').disabled = false;
       
    }

}
