var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeeName = name;
    }
    employee.prototype.greetings = function () {
        return "Hello " + this.employeeName;
    };
    return employee;
}());
var person = new employee("Biswanath");
console.log(person.employeeName);
console.log(person.greetings());
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(name) {
        return _super.call(this, name) || this;
    }
    return manager;
}(employee));
