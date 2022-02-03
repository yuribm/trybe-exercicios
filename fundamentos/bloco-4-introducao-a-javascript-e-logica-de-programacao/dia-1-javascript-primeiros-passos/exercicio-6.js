let peca = "Bispo"

let pecaXadrez = peca.toLowerCase()

if (pecaXadrez === "peao") {
  console.log("Pode mover-se duas casas adiante no primeiro movimento, apenas uma casa adiante nos demais movimentos, ataca uma casa na diagonal");
}
else if (pecaXadrez === "torre") {
  console.log("Move-se nas laterais");
}
else if (pecaXadrez === "cavalo") {
  console.log("Move-se em formato de L, 3x1 casas");
}
else if (pecaXadrez === "bispo"){
  console.log("Move-se nas diagonais");
}
else if (pecaXadrez === "rainha") {
  console.log("Move-se nas diagonais ou nas laterais");
}
else if (pecaXadrez === "rei") {
  console.log("Move-se uma casa nas diagonais ou nas laterais");
}
else {
  console.log("Erro")
}