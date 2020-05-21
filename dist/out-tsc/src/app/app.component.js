import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.pageTitle = 'My first company d dAcme';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'pm-root',
        template: `
  <div> <h1> {{pageTitle}} </h1> 
    <div> my first component </div>
  </div>
 `
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map