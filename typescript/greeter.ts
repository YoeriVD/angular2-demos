import * as util from './util';

export class Greeter{
    private _greeting = 'hello';
    constructor() {
        util.Log(this._greeting);
    }
}