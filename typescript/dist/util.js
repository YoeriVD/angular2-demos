"use strict";
var OutKind;
(function (OutKind) {
    OutKind[OutKind["console"] = 0] = "console";
    OutKind[OutKind["html"] = 1] = "html";
})(OutKind = exports.OutKind || (exports.OutKind = {}));
exports.settings = {
    out: OutKind.html
};
var Loggers = {
    "console": function (logEntry) { return console.log(logEntry); },
    "html": function (logEntry) { return document.getElementById("console").innerHTML += "\n" + logEntry; }
};
function Log(logEntry) {
    Loggers[OutKind[exports.settings.out]](logEntry);
}
exports.Log = Log;
//# sourceMappingURL=util.js.map