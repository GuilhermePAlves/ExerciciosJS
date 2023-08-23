let INSSAliq;
let IRAliq;

let grossSalary = 5000.00;

if (grossSalary <= 1556.94) {
    INSSAliq = grossSalary * 0.08;
}
else if (grossSalary > 1556.94 && grossSalary <= 2594.92){
    INSSAliq = grossSalary * 0.09;
}
else if (grossSalary > 2594.92 && grossSalary <= 5189.82){
    INSSAliq = grossSalary * 0.11;
}
else {
    INSSAliq = 570.88;
}


let baseSalary = grossSalary - INSSAliq;

console.log(baseSalary);
