class employee {
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }
    greetings(): string{
        return "Hello "+ this.employeeName;
    }
}

let person = new employee("Biswanath");
console.log(person.employeeName);
console.log(person.greetings());

class manager extends employee{
    constructor(name: string){
        super(name);
    }
} 