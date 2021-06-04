import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isvisible=false;
    checkHandle(event){
        console.log(event.detail.checked);
        this.isvisible=event.detail.checked;
    }
}