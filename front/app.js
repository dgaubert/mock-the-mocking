var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
// Annotation section
var MessageEditorComponent = (function () {
    function MessageEditorComponent() {
        this.customMessage = 'Edita este mensaje';
    }
    MessageEditorComponent.prototype.updateMessage = function (message) {
        this.customMessage = message;
    };
    MessageEditorComponent.prototype.getMessageReady = function () {
        console.log('Give "' + this.customMessage + '" to the backend');
        console.log('Bringing some sharing options');
    };
    MessageEditorComponent = __decorate([
        angular2_1.Component({
            selector: 'message-editor'
        }),
        angular2_1.View({
            template: '<input #message type="text" value="{{ customMessage }}" (blur)="updateMessage(message.value)" >' +
                '<button (click)="getMessageReady()">Comparte</button>'
        }), 
        __metadata('design:paramtypes', [])
    ], MessageEditorComponent);
    return MessageEditorComponent;
})();
// Annotation section
var SinglePosterComponent = (function () {
    function SinglePosterComponent() {
    }
    SinglePosterComponent = __decorate([
        angular2_1.Component({
            selector: 'single-poster'
        }),
        angular2_1.View({
            template: '<h1>Single poster</h1>' +
                '<message-editor></message-editor>',
            directives: [MessageEditorComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SinglePosterComponent);
    return SinglePosterComponent;
})();
angular2_1.bootstrap(SinglePosterComponent);
