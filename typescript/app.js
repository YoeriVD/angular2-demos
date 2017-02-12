define("greeter", ["require", "exports"], function (require, exports) {
    "use strict";
    var Greeter = (function () {
        function Greeter() {
            this._greeting = 'hello';
            console.log(this._greeting);
        }
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
define("app", ["require", "exports", "greeter"], function (require, exports, greeter_1) {
    "use strict";
    var greeter = new greeter_1.Greeter();
    var greeter2 = new greeter_1.Greeter();
});
