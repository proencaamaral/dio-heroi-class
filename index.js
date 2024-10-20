class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 200, "mago");
const heroi3 = new Heroi("Li", 25, "monge");
const heroi4 = new Heroi("Kage", 22, "ninja");

heroi1.atacar();  // Exibe: o guerreiro atacou usando espada
heroi2.atacar();  // Exibe: o mago atacou usando magia
heroi3.atacar();  // Exibe: o monge atacou usando artes marciais
heroi4.atacar();  // Exibe: o ninja atacou usando shuriken
