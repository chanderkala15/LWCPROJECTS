import { LightningElement, api } from 'lwc';

export default class ChildComponentE extends LightningElement {
 /*   @api slidervalue;
    @api maxslidervalue;

    @api resetButton()
    {
        this.slidervalue = 0
    } */
    progress = 30;
  handleClick(event)
    {
       // 1.custome event
    // const e = new CustomEvent("displayparentevent",{detail:"test data"})
     const e = new CustomEvent("displayparentevent",
                                            {
                                             detail: {
                                                code:101, name : "Ram"}
                                                
                                                    
                                        
                                            } );

        // 2. dispatch event
        this.dispatchEvent(e);

    }

@api handleStart(){
    
 /*   myInterval = setInterval(aafun1, 1000);

   function Fun1() { 
        this.progress =this.progress+10;
        if(this.progress>=100)
        {
            alert("more than 100 now")
            const e = new CustomEvent("progressfinished")
            this.dispatchEvent(e)
             stopinterval(); }
        
    }
    function stopinterval(){
        clearInterval(myInterval);
    } */
  var interval = setInterval(() => {

        if(this.progress <=100)
        this.progress =this.progress+2;
        else
        {
            clearInterval(interval);  
            const e = new CustomEvent("progressfinished")
            this.dispatchEvent(e) 
            this.progress =0
        }
    },100)
/*       if(this.progress>=100)
        {
            const e = new CustomEvent("progressfinished")
            this.dispatchEvent(e)
            clearInterval(interval)
            alert('clear interval called')
        }
    }, 1000); */

} }