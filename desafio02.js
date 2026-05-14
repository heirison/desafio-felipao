let vitorias = 156;
let derrotas = 54;

//Calculando o saldo de vitórias
let resultado = saldoHeroi(vitorias, derrotas);

console.log(`O Herói tem de saldo ${resultado.saldo} e está no nível de ${resultado.nivel}`);

function saldoHeroi(vit, der) {
    let saldo = vit - der;
    let nivelHeroi = "";

    if (saldo <= 10) {
        nivelHeroi = "Ferro";
    } else if (saldo <= 20) {
        nivelHeroi = "Bronze";
    } else if (saldo <= 50) {
        nivelHeroi = "Prata";
    } else if (saldo <= 80) {
        nivelHeroi = "Ouro";
    } else if (saldo <= 90) {
        nivelHeroi = "Diamante";
    } else if (saldo <= 100) {
        nivelHeroi = "Lendário";
    } else {
        nivelHeroi = "Imortal";
    }

    return { saldo: saldo, nivel: nivelHeroi };
}