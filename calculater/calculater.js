import { LightningElement } from 'lwc';

export default class Calculater extends LightningElement {
    num1=0;
    num2=0
    sum=0;
    change1(event){
        this.num1=event.target.value;
    }
    change2(event){
        this.num2=event.target.value;
    }
    addnum(){
        this.sum=parseInt(this.num1)+parseInt(this.num2);
        console.log(this.sum);
    }
}