import { LightningElement, api } from 'lwc';

export default class FetchDataFromAPI extends LightningElement {
posts = [];
async handleClick(){
    let url = "https://jsonplaceholder.typicode.com/posts"
    //let url = "https://employee-directory-services.herokuapp.com/employees";

try{

    let response = await fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"})
    let data = await response.json();

    this.posts = data;
    console.log("fetch data")
    console.log(response);

    console.log(data);

    console.log(this.posts);  

}
catch(e)
{
    console.log(e);
}
    
}

}