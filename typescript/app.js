define("util", ["require", "exports"], function (require, exports) {
    "use strict";
    var console = document.getElementById("console");
    function Log(logEntry) {
        window.console.log("logging: " + logEntry);
        console.innerHTML += "\n" + logEntry;
    }
    exports.Log = Log;
});
define("greeter", ["require", "exports", "util"], function (require, exports, util) {
    "use strict";
    var Greeter = (function () {
        function Greeter() {
            this._greeting = 'hello';
            util.Log(this._greeting);
        }
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
define("app", ["require", "exports"], function (require, exports) {
    "use strict";
});
