"use strict";
var util = require("./util");
var Greeter = (function () {
    function Greeter() {
        this._greeting = 'hello';
        util.Log(this._greeting);
    }
    return Greeter;
}());
exports.Greeter = Greeter;
//# sourceMappingURL=greeter.js.map