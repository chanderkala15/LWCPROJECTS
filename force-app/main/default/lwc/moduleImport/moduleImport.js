import { LightningElement } from 'lwc';
//import {sum} from './utility'
//import firstname from './utility'
import {oddoreven} from 'c/myUtility'
 
export default class ModuleImport extends LightningElement {

    handleClick(click)
    {
    alert(oddoreven(25));
  //  alert(sum(10,20));
  //  alert((firstname) + sum(10,20));
    } 
}