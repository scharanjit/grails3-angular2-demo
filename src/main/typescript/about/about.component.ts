import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {htmlTemplate} from './about.html';

declare var baseUrl: any;

@Component({
    selector: 'about',
    template: htmlTemplate
})
export class AboutComponent {
    http: Http;
    baseUrl: string;
    data: Object;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = baseUrl;

        this.getData();
    }


    getData() {
        this.http.get(this.baseUrl + '/data/about')
            .subscribe((res: Response) => {
                this.data = res.json()['data'];
            })
    }
}
