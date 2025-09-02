let myVarible = 2;
console.log(myVarible);
myVarible = 3;
console.log(myVarible);

const myConst = "dog";
console.log(myConst);

console.log('Hello World! is "an" imagination');
console.log(`lets test answer: ${myVarible}`);

const animals = ["dog", "cat", "cow"];
console.log(animals[0]);
console.log(animals.length);
console.log(animals);
animals.push("sheep");
console.log(animals);

let classroom = {
  building: "ATLAS",
  room: 104,
};

console.log(classroom.building);
console.log(classroom["room"]);

if (myVarible === 2) {
  console.log("myVarible is 2");
} else {
  console.log("myVarible is not 2");
}

let whileVar = 0;
while (whileVar < 5) {
  console.log(whileVar);
  whileVar++;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

myH1.addeventListener("click", () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  myH1.style.color = `rgb(${red}, ${green}, 100)`;
});
