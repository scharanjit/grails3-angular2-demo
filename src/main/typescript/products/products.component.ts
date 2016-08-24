import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {htmlTemplate} from './products.html';

declare var baseUrl: any;

@Component({
    selector: 'products',
    template: htmlTemplate,
     host: {'class' : 'ng-animate productContainer'}
})
export class ProductsComponent {
    http: Http;
    baseUrl: string;
    data: Object;
    message:String;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = baseUrl;



    }

    getProductList(){
    this.message="Here are the products"
     this.getData();
    }

    getData() {
        this.http.get(this.baseUrl + '/data/products')
            .subscribe((res: Response) => {
                this.data = res.json()['data'];
            })
    }
}
