const custoDoProduto = 100;
const valorDeVenda = 150;
let numeroDeVendas = 1000;

let custoTotal = custoDoProduto + custoDoProduto * 0.20;

if (custoDoProduto < 0 || valorDeVenda < 0) {
  console.log("ERRO");
}
else {
  let lucroDaEmpresa = (valorDeVenda - custoTotal) * numeroDeVendas;
  console.log(lucroDaEmpresa);
}
