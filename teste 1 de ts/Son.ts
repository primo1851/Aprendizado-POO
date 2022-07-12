import { Person } from "./Person";

export class Son extends Person {
  constructor(
    name: string,
    lastName: string,
    birthYear: number,
    age: number,
    public schoolName: string,
    public jock?: boolean

  ) {
    super(name, lastName, birthYear, age)
  }
  23
  showSchoolName(schoolName: string): void {
    console.log(`School's name is ${schoolName}`);
  }

  isJock(): boolean {

    if (this.name === "Chad") {
      this.jock = true;
    }
    else {
      this.jock = false;
    }
    return this.jock;
  }


}