import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {htmlTemplate} from './contact.html';

declare var baseUrl: any;

@Component({
    selector: 'contact',
    template: htmlTemplate
})
export class ContactComponent {
    http: Http;
    baseUrl: string;
    data: Object;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = baseUrl;

        this.getData();
    }

    getData() {
        this.http.get(this.baseUrl + '/data/contact')
            .subscribe((res: Response) => {
                this.data = res.json()['data'];
            })
    }
}
