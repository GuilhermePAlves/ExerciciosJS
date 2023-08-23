let aliquotINSS;
let aliquotIR;

let grossSalary = 5000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} 
else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} 
else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} 
else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

console.log(baseSalary)