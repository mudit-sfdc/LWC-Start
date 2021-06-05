import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/lwc_CreateContactUsingApex.getContacts';
import createContact from '@salesforce/apex/lwc_CreateContactUsingApex.createContact';
import searchContact from '@salesforce/apex/lwc_CreateContactUsingApex.searchContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactCreateApex extends LightningElement {
    @track rec = {
        LastName: '',
        Email: '',
        Phone: ''
    }
    @track lstContact = [];
    @track searchItem;

    connectedCallback() {
        console.log('Connected Callback Call');
        this.loadContact();
    }
    loadContact() {
        console.log('Load Contact Callback Call');
        getContacts()
            .then(result => {
                this.lstContact = result;
            })
            .catch(error => {
                console.log(error);
            })
    }
    handleNameChange(event) {
        this.rec.LastName = event.target.value;
    }
    handleEmailChange(event) {
        this.rec.Email = event.target.value;
    }
    handlePhoneChange(event) {
        this.rec.Phone = event.target.value;
    }
    saveContact() {
        createContact({ con: this.rec })
            .then(result => {
                if (!result.includes('Error')) {
                    this.rec.LastName = '';
                    this.rec.Email = '';
                    this.rec.Phone = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact Inserted successfully ' + result,
                            variant: 'Success'
                        })
                    )
                    this.loadContact();
                }
                else {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: result,
                            variant: 'Error'
                        })
                    )
                }
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error,
                        variant: 'Error'
                    })
                )
            })
    }
    handleSearch(event) {
        this.searchItem = event.target.value;
    }

    searchKey() {
        console.log('Search Item : ',this.searchItem);
        if (this.searchItem != null) {
            searchContact({ searchItem: this.searchItem })
                .then(result => {
                    this.lstContact = result;
                })
                .catch(error => {
                    console.log('Error : ' + error);
                })
        }
        else{
            this.loadContact();
        }
    }
}