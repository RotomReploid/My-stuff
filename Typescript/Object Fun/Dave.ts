class Human{
    age: number;
    constructor(age: number) {
        this.age = age;
    }
    birthday() {
        this.age++
    }
    speak() {
        console.log(`Hi! I'm Dave, and I'm ${this.age}!`);
    }
}
const Dave = new Human(27);
console.log(Dave.age);
Dave.birthday();
console.log(Dave.age);
Dave.speak();