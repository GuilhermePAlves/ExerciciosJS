let IdadeBaby = 13;
let Fralda

if (IdadeBaby <= 4) {
    Fralda = "RN";
} else if (IdadeBaby >= 5 && IdadeBaby <= 7) {
    Fralda = "RN+";
} else if (IdadeBaby > 7 && IdadeBaby <=9) {
    Fralda = "P";
} else if (IdadeBaby >=10 && IdadeBaby <=12){
    Fralda = "M";
} else {
    Fralda = "Aceitamos apenas até 12 meses";
}

console.log(Fralda)