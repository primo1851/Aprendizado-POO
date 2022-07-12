/******************************************
*  Author : Author   
*  Created On : Fri Jul 08 2022
*  File : aula1.ts
*******************************************/
//nome, energia, vida, ataque, defesa
//classe
 
import prompt from "prompt-sync";

class Personagem {
    constructor(public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) { }
}
let sansa: Personagem = new Personagem("Sansa Stark", 100, 40, 20, 20);

let jon: Personagem = new Personagem("Jon Snow", 100, 60, 50, 40);

let teclado = prompt();
let option: number = 0;
while (option != 9) {
    console.log('+===========Personagem============+');
    console.log('|1. Treinar ataque da sansa       |');
    console.log('|2.Treinar defesa da sansa        |');
    console.log('|3.Treinar ataque do Jon          |');
    console.log('|4.Treinar defesa do Jon          |');
    console.log('|5.Imprimir atributos             |');
    console.log('|9.Sair                           |');
    console.log('+=================================+');

    option = +teclado('Escolha uma ação: ')

    switch (option) {
        case 1:
            sansa.ataque += 2;
            break;
        case 2:
            sansa.defesa += 2;
        case 3:
            jon.ataque += 2;
            break;
        case 4:
            jon.defesa += 2;
        case 5:
            console.log("sansa :>> ", sansa);
            console.log("jon :>> ", jon);
        default:
            break;
    }

}









