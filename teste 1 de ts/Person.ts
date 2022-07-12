
export class Person{
  constructor(
    public name: string,
    public lastName: string,
    public birthYear: number,
    public age: number
  ){}

  currentAge(): void {
    this.age = 2022 - this.birthYear;
  }
  
  showName(): void {
    console.log(`O nome é ${this.name} ${this.lastName}`);
  }
  

}


