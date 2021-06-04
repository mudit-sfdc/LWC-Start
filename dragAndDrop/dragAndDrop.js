import { LightningElement } from 'lwc';

export default class DragAndDrop extends LightningElement {
    drag(event){
        console.log('Drag:', event.target.id);
        event.dataTransfer.setData("divId", event.target.id);
    }
    allowDrop(event){
        event.preventDefault();
    }
    dropComplete(event){
        event.preventDefault();
        var divId = event.dataTransfer.getData("divId");
        console.log('CompleteDrag : ',divId);
        var draggedElement = this.template.querySelector('#' +divId);
        draggedElement.classList.remove('todo');
        draggedElement.classList.add('completed'); 
        event.target.appendChild(draggedElement);
    }
    dropToDo(event){
        event.preventDefault();
        var divId = event.dataTransfer.getData("divId");
        console.log('ToDoDrag : ',divId);
        var draggedElement = this.template.querySelector('#' +divId);
        draggedElement.classList.remove('completed');
        draggedElement.classList.add('todo'); 
        event.target.appendChild(draggedElement);
    }
    
}