//1

// function printNumbers(from, to) {
//     let number = from;
//     let timerId = setInterval(function() {
//         console.log(number);
//         if (number === to) {
//             clearInterval(timerId)
//         };
//         number++
//     }, 1000);
// };

// printNumbers(1, 5);

// function printNumbers(from, to) {
//     let number = from;
//     setTimeout(function showNumber() {
//         console.log(number);
//         if (number < to) {
//             setTimeout(showNumber, 1000);
//         };
//         number++
//     }, 10000);
// };

// printNumbers(1, 4)

//2

// let timerId2 = setInterval(() => console.log('message'), 3000);
// setTimeout(() => {
//     clearInterval(timerId2);
//     console.log('End');
// }, 10000);

//3
//1,6,4,5,3

//4

let jordan = {
    name: "Michael",
    age: 59,
    showName: function() {
        console.log(`Name: ${this.name}`);
    },
};


let messi = {
    name: "Lionel",
    age: 34,
};

jordan.showName();
jordan.showName.bind(messi)();