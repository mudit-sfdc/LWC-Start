import { LightningElement ,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    num1=0;
    num2=0;
    result;
    showResult=false;
    isHistory=false;
    @track historylist=[];
    selectnumber(event){
        if(event.target.name==='num1'){
            this.num1=event.target.value;
        }
        if(event.target.name==='num2'){
            this.num2=event.target.value;
        }
    }
    calculate(event){
        let calculate; 
        if(event.target.name==='add'){
            calculate=parseInt(this.num1)+parseInt(this.num2);
        }
        if(event.target.name==='mul'){
            calculate=parseInt(this.num1)*parseInt(this.num2);
        }
        if(event.target.name==='subs'){
            calculate=parseInt(this.num1)-parseInt(this.num2);
        }
        if(event.target.name==='div'){
            calculate=parseInt(this.num1)/parseInt(this.num2);
        }
        this.showResult=true;
        this.isHistory=true;
        this.result = `${event.target.label} of ${this.num1} and ${this.num2} is ${calculate}`;
        this.historylist.push(this.result);
    }
}