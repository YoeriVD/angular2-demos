import { Injectable } from '@angular/core';
import { Http, Headers, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomHttpService extends Http {

    constructor(protected _backend: ConnectionBackend, protected _defaultOptions: RequestOptions) {
        super(_backend, _defaultOptions);
    }

    _setCustomHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (!options) {
            options = new RequestOptions({});
        }
        if (!options.headers) {
            options.headers = new Headers();
        }
        options.headers.set('Content-Type', ['application/json; charset=utf-8']);
        return options;
    }
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        options = this._setCustomHeaders(options);
        console.log('using custom http service')
        return super.request(url, options)
    }
}