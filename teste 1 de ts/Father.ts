import { Person } from "./Person";

export class Father extends Person {
  constructor(
    name: string,
    lastName: string,
    birthYear: number,
    age: number,
    public job: string,
    public childAbuse?: boolean) {
    super(name, lastName, birthYear, age)
  }

  showName(): void {
    console.log(`O nome é ${this.name} ${this.lastName}`);
  }

  isChildAbuse(birthYear: number): boolean {

    if (birthYear == 1964) {
      this.childAbuse = true;
    }
    else {
      this.childAbuse = false;
    }

    return this.childAbuse;
  }


}
