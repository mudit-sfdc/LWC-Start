import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
<<<<<<< HEAD
}
=======
}     
>>>>>>> e3b8e112c486e400ad14d5583f1bb4662b224daf
