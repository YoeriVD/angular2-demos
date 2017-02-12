define("util", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.settings = {
        out: "console"
    };
    var Loggers = {
        "console": function (logEntry) { return console.log(logEntry); },
        "html": function (logEntry) { return document.getElementById("console").innerHTML += "\n" + logEntry; }
    };
    function Log(logEntry) {
        Loggers[exports.settings.out](logEntry);
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
define("app", ["require", "exports", "util"], function (require, exports, util) {
    "use strict";
    util.settings.out = "console";
    util.Log('starting the application...');
});
//# sourceMappingURL=app.js.map