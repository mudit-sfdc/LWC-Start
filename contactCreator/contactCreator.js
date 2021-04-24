import { LightningElement } from 'lwc';
import OBJECT_NAME from '@salesforce/schema/Contact';
import CON_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CON_LASTNAME from '@salesforce/schema/Contact.LastName';
import CON_EMAIL from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactCreator extends LightningElement {
    objectName = OBJECT_NAME;
    fieldName = [CON_FIRSTNAME,CON_LASTNAME,CON_EMAIL];
    handleSuccess(event){
        //Optimize code here.
        this.dispatchEvent(
            new ShowToastEvent({
                    title : 'Contact created successfully' +event.detail.id,
                    message : 'Contact Id : ' + event.detail.id,
                    variant : 'success',
                    })
            );
    }
}