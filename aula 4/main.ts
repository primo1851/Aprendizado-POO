import Personagem from "./Personagem";
import prompt from "prompt-sync";



let person: Personagem = new Personagem("Sansa Stark", 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;

while (option != 9 || person.isDead()) {
    console.log('+====Personagem${person.nome}====+');
    console.log('|1.Treinar ataque                 |');
    console.log('|2.Treinar defesa                 |');
    console.log('|3.Descansar                      |');
    console.log('|4.Entrar em batalha              |')
    console.log('|8.Imprimir atributos             |');
    console.log('|9.Sair                           |');
    console.log('+=================================+');

    option = +teclado('Escolha uma ação: ')

    switch (option) {
        case 1:
            person.treinar_ataque();
            person.status();
            break;
        case 2:
            person.treinar_defesa();
            person.status();
            break;

        case 3:
            person.descansar();
            person.status();

            break;
        case 4:
            let rest: number = person.batalha();
            console.log("Esta batalha custou ${rest} de energia");
            person.status();
        case 8:
            person.status();
        default:
            break;
    }

    
}









