import  { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
// import {enableProdMode} from 'angular2/core';
// enableProdMode();

@Component({
    selector: 'pm-app',
    template: `
      <div class="container">
        <div class="row">
          <h1>{{pageTitle}}</h1>
        </div>
      </div>
      <pm-products></pm-products>
      `,
    directives: [ProductListComponent]
})

// this export class stuff is the data of the component
export class AppComponent {
  pageTitle: string = 'Online store';
}
