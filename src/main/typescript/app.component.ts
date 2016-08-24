import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {htmlTemplate} from './app.html';
import {HomeComponent} from './home'
import {ProductsComponent} from './products';
import {AboutComponent} from './about';
import {ContactComponent} from './contact';

@Component({
    selector: 'ng2starter',
    template: htmlTemplate,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/home', component: HomeComponent},
    { path: '/products', component: ProductsComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent }

])
export class AppComponent {
    constructor() {
    }
}
