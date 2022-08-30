import { LightningElement } from 'lwc';

export default class ShowHideModal extends LightningElement {
    lightingbuttonclicked;

    handleClick(){
        alert("button clicked")
        this.lightingbuttonclicked = true;
    }
    handleSave(){
        alert("Save clicked")
        this.lightingbuttonclicked = false;
    }
    handleCancel(){
        alert("cancel clicked")
        this.lightingbuttonclicked = false;
    }
}