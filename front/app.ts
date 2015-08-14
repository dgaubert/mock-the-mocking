/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';





// Annotation section
@Component({
    selector: 'message-editor'
})
@View({
    template: '<input #message type="text" value="{{ customMessage }}" (blur)="updateMessage(message.value)" >' +
    '<button (click)="getMessageReady()">Comparte</button>'
})
// Component controller
class MessageEditorComponent {
    customMessage: string;

    constructor() {
        this.customMessage = 'Edita este mensaje';
    }
    updateMessage(message) {
        this.customMessage = message;
    }
    getMessageReady() {
        console.log('Give "' + this.customMessage + '" to the backend');
        console.log('Bringing some sharing options');
    }
}

// Annotation section
@Component({
    selector: 'single-poster'
})
@View({
    template: '<h1>Single poster</h1>' +
    '<message-editor></message-editor>',
    directives: [MessageEditorComponent]
})
// Component controller
class SinglePosterComponent {

    constructor() {

    }
}
bootstrap(SinglePosterComponent);
