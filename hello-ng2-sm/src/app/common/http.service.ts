import { Injectable } from '@angular/core';
import {
    Http, ConnectionBackend, RequestOptions,
    Headers, Request, RequestOptionsArgs, Response
} from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CustomHttpService extends Http {

    constructor(protected _backend: ConnectionBackend, protected _defaultOptions: RequestOptions) {
        super(_backend, _defaultOptions);
    }

    setHeaders(options) {
        if (!options) {
            options = new RequestOptions({});
        }
        if (!options.headers) {
            options.headers = new Headers();
        }
        options.headers.set('Content-Type', ['application/json; charset=utf-8'])
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        this.setHeaders(options);
        console.log("custom service was called!");
        return super.request(url, options);
    }

}