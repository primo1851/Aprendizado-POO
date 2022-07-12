export default class Personagem {
    constructor(public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) { }

    status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }

    treinar_ataque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;


        if (this.defesa > 100) {
            this.defesa = 0;
        }

    }

    treinar_defesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;


        if (this.defesa > 100) {
            this.defesa = 0;
        }

    }

    descansar(): void {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
        this.status();
    }

    batalha(): number {
        let desgaste: number = Math.random() * 100;
        this.energia -= desgaste;
        return desgaste;

    }

    isDead(): boolean {
        if (this.energia < 0) {

            return true;
        } else {
            return false;
        }
    }
}
