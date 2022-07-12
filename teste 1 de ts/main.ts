import { Father } from "./Father";
import { Person } from "./Person";
import { Son } from "./Son";


const person: Person = new Person("Chad", "Chadson", 1964, 58);
const father: Father = new Father("Luis", "Luisson", 2002, 69, "pain in the ass");
const son: Son = new Son("Zacarias", "Van dogh", 2010, 12, "Cachorródrimo");

person.showName();

father.showName();
const abuse = father.isChildAbuse(father.birthYear);
console.log(`Do I need to call CPS? ${abuse}`);

son.showName();
son.showSchoolName(son.schoolName);
const jock = son.isJock();
console.log(`Is the son a jock? ${jock}`);
