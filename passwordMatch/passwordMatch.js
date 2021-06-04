import { LightningElement } from 'lwc';

export default class PasswordMatch extends LightningElement {
    matchpassword=false;
    typePassword(event){
        if(event.target.value=='Password'){
            this.matchpassword=true;
        }
        else{
            this.matchpassword=false;
        }
    }
}