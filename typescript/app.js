var Greeter = (function () {
    function Greeter() {
        this._greeting = 'hello';
        console.log(this._greeting);
    }
    return Greeter;
}());
var greeter = new Greeter();
