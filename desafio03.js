class Heroi {
   constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
   }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "Guerreiro":
            ataque = "uma espada!";
                break;
            case "Mago":
            ataque = "magia!";
                break;
            case "Monge":
            ataque = "artes marciais!";
                break;
            case "Ninja":
            ataque = "shuriken!";
                break;
            default:
            ataque = "Tipo de herói desconhecido!";
        }
        console.log(`O ${this.tipo, this.nome} atacou usando ${ataque}!`);
   }
}
const guerreiro = new Heroi("Cassius", 45, "Guerreiro");
const mago = new Heroi("Dumbledore", 3119, "Mago");
const monge = new Heroi("Dalailama", 93, "Monge");
const ninja = new Heroi("Naruto", 17, "Ninja");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();