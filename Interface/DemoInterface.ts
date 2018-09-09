interface person{
    firstName: string;
    lastName: string;
}

export function greetings(employee: person): string{
    return "Hello " + employee.firstName;
}

let p = {
    firstName: "Biswanath",
    lastName: "Banik",
    xyz: 1
}
console.log(greetings(p));
