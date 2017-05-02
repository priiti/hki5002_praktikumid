let numbers = [];

for (let i = 0; i < 10; i++) {
  const value = Math.floor(Math.random() * 20) + 1;
  numbers.push(value);
}

console.log(numbers);

function getNumbers() {
  return numbers;
}

let testData = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(getNumbers());
    }, 1500);
  
    setTimeout(() => {
      reject(`Couldn't get numbers!`);
    }, 1600);
});

testData
  .then((data) => {
    let squared = numbers.map((item) => {
      return item * item;
    });
    return squared;
})
  .then((squaredData) => {
    console.log(squaredData);
})
  .catch((error) => {
    console.log(`There has been an error: ${error}`);
});