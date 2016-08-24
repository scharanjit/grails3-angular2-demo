import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {htmlTemplate} from './products.html';

declare var baseUrl: any;

@Component({
    selector: 'products',
    template: htmlTemplate
})
export class ProductsComponent {
    http: Http;
    baseUrl: string;
    data: Object;
    message='';

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = baseUrl;

        this.getData();

    }

    getProductList(){
    this.message="I'll provide you list of components shortly"
    }

    getData() {
        this.http.get(this.baseUrl + '/data/products')
            .subscribe((res: Response) => {
                this.data = res.json()['data'];
            })
    }
}
