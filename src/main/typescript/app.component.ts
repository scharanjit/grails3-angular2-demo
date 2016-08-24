import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {htmlTemplate} from './app.html';
import {HomeComponent} from './home'
import {ProductsComponent} from './products';
import {AboutComponent} from './about';
import {ContactComponent} from './contact';
import {PersonFormComponent} from './form';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


@Component({
    selector: 'ng2starter',
    template: htmlTemplate,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/home', component: HomeComponent},
    { path: '/products', component: ProductsComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/form', component: PersonFormComponent }

])

export class AppComponent {
    constructor() {
    }
}
