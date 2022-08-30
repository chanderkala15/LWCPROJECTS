import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
    input1;
    todoItem;
    itemIndex;
  @track mytodolist = ["Walking", "training"];
    
    handleChange(event){

        this.input1 =event.target.value;

    }
    handleClick(event){
        console.log("click event");
        this.mytodolist.push(this.input1);

      //  alert(this.mytodolist[1])
        console.log(this.mytodolist[0]);
        
        console.log(this.mytodolist[1]);

    }
    handleDelete(event){
      console.log("Delete event");
      this.todoItem = event.target.name;
      alert(this.todoItem);

      this.itemIndex = this.mytodolist.indexOf(this.todoItem);
      //x=this.mytodolist.indexOf(this.todoItem,0);

      alert(this.itemIndex);
      this.mytodolist.splice(this.itemIndex, 1);	

     // this.mytodolist.pop(this.todoItem);
  }
   /* getIndex(event) {
       console.log('row clicked');
       alert('Column ' + this.closest("td").index());
       console.log(event.target.rowIndex);
       
     
    } */
}