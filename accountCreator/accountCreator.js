import { LightningElement } from 'lwc';
import OBJECT_NAME from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountCreator extends LightningElement {
    objectname=OBJECT_NAME;
    fields=[ACCOUNT_NAME];
    handlesuccess(event){
        //Set the values of toast event and later dispatch the event using this.dispatchEvent('NAME OF TOAST')
        const toastEvent = new ShowToastEvent({
            title:"Account created",
            message:"Record Id - "+event.detail.Id,
            variant: "success" 
        });
        this.dispatchEvent(toastEvent);
    }
}