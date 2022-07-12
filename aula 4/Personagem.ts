export default class Personagem {
    constructor(
        private _nome: string,
        private _energia: number,
        private _vida: number,
        private _ataque: number,
        private _defesa: number
    ) {}

    public get nome() : string {
        return this._nome;
    }
    

    public status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this._energia.toFixed(1)) +
            ("\nAtaque: " + this._ataque.toFixed(1)) +
            ("\nDefesa: " + this._defesa.toFixed(1))
        );
    }

    public treinar_ataque(): void {
        this._ataque += this.randomizar(7);
        this._energia -= this.randomizar(10);
        if (this._defesa > 100) {
            this._defesa = 0;
        }

    }

    public treinar_defesa(): void {
        this._defesa += this.randomizar(5);
        this._energia -= this.randomizar(10);
        if (this._defesa > 100) {
            this._defesa = 0;
        }

    }

    public descansar(): void {
        this._energia += this.randomizar(10);
        if (this._energia > 100) {
            this._energia = 100;
        }
        this.status();
    }

    public batalha(): number {
        let desgaste: number = this.randomizar(10);
        this._energia -= desgaste;
        return desgaste;

    }

    public isDead(): boolean {
        if (this._energia < 0) {

            return true;
        } else {
            return false;
        }
    }

    private randomizar(fator: number): number {
       return  Math.random() * fator;
    }
}
