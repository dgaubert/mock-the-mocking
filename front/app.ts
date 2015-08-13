/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: 'Hello <input type="text" value="{{ word }}" (keyup)="myControllerMethod()" >!!'
})
// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        this.word = 'there';
    }
    myControllerMethod() {
        console.log(this.word);
    }
}
bootstrap(MyAppComponent);