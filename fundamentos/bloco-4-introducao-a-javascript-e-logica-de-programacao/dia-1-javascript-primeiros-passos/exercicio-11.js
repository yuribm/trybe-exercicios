let salarioBruto = 3000;
let salarioMenosInss;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  salarioMenosInss = salarioBruto * 0.92;
}
else if (salarioBruto <= 2594.92) {
  salarioMenosInss = salarioBruto * 0.91;
}
else if (salarioBruto <= 5189.82) {
  salarioMenosInss = salarioBruto * 0.89;
}
else {
  salarioMenosInss = salarioBruto - 570.88;
}

if (salarioMenosInss <= 1903.98) {
  salarioLiquido = salarioMenosInss;
}
else if (salarioMenosInss <= 2826.65) {
  salarioLiquido = salarioMenosInss * 0.925 + 142.80;
}
else if (salarioMenosInss <= 3751.05) {
  salarioLiquido = salarioMenosInss * 0.85 + 354.80;
}
else if (salarioMenosInss <= 4664.68) {
  salarioLiquido = salarioMenosInss * 0.775 + 636.3;
}
else {
  salarioLiquido = salarioMenosInss * 0.725 + 869.36;
}

console.log(salarioLiquido);