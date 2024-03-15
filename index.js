// STATE




// DOM Selectors
const clickMeButton = document.querySelector(`button`);
const form = document.querySelector(`form`);
const allTheButtons = document.querySelectorAll(`button`);
const allTheButtonsArr = [...allTheButtons];
const buttonSection = document.querySelector(`#button-group`);
const yellowCircle = document.querySelector(`#yellow`);
const body = document.querySelector(`body`);


// const h1 = document.querySelector(`h1`);
// console.log(`H1:`, h1);

// const circles = document.querySelectorAll('.circle');
// console.log(`QUERY SELECTOR ELEMENTS:`, circles);

// const circlesArray = [ ...circles ];
// console.log(`ELEMENTS AS ARRAY:`, circlesArray);

// circlesArray.map((element) => {
//   return element;
// });



// OLDER Selectors

// const elementWithId = document.getElementById(`button-group`);
// console.log(`ELEMENT WITH ID:`, elementWithId);

// const elementsWithClassNames = document.getElementsByClassName(`circle`);
// console.log(`ELEMENTS BY CLASS NAME:`, elementsWithClassNames);

// const elementsWithClassNamesArray = [ ...elementsWithClassNames ];
// console.log(`elementsWithClassNamesArray:`, elementsWithClassNamesArray);

// const tageNameElements = document.getElementsByTagName(`button`);
// console.log(`TAG NAME ELEMENTS:`, tageNameElements);


// h1.style.backgroundColor = `dodgerblue`;
// h1.style.fontSize = `45px`;


// const square = document.querySelector(`#square`);
// console.log(square);

// square.classList.add(`circle`);
// console.log(square);

// square.classList.remove(`circle`);
// square.removeAttribute(`id`);




// EVENT LISTENERS/HANDLERS

// clickMeButton.addEventListener(`click`, (event) => {
//   console.log(event.target);
//   body.style.backgroundColor = `aqua`;
// });


form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  
  const inputs = document.querySelectorAll(`input`);
  const inputsArr = [...inputs];
  for(let i = 0; i < inputsArr.length; i++) {
    const currentInput = inputsArr[i];
    const currentInputValue = currentInput.value;

    const p = document.createElement(`p`);
    p.innerText = `${currentInputValue}`;

    body.appendChild(p);
  }

});


// for(let i = 0; i < allTheButtonsArr.length; i++) {
//   const currentButton = allTheButtonsArr[i];

//   currentButton.addEventListener(`mouseover`, () => {
//     yellowCircle.style.backgroundColor = `darkslategrey`;
//   });
// }


// buttonSection.addEventListener(`click`, (event) => {
//   if(event.target.tagName === `BUTTON`) {
//     yellowCircle.style.backgroundColor = `#00FF00`;
//   } else {
//     console.log(`SECTION CLICKED!!!!`);
//   }
// })

// body.addEventListener(`click`, (ev) => {
//   console.log(`EVENT TARGET:`, ev.target);
//   console.log(`BODY CLICKED`);
// })







// REFERENCING

// let myName = `Jon`;
// const yourName = myName; // `Jon`

// myName += ` Jingleheimer`

// console.log(`MY NAME:`, myName);
// console.log(`YOUR NAME:` , yourName);



// const person1 = {
//   name: `Ralph`,
//   age: 42
// }

// const person2 = person1;
// person2.name = `Phil`;

// console.log(`PERSON1:`, person1);
// console.log(`PERSON2`, person2);



// const names = [`Betty`, `Riley`, `Sal`];

// const otherNames = [...names];
// otherNames.push(`Nicole`);

// console.log(`NAMES:`, names);
// console.log(`OTHER NAMES:`, otherNames);


// const people = [
//   {
//     name: `Freddy`,
//     age: 76
//   },
//   {
//     name: `Scooby`,
//     age: 32
//   }
// ]

// const otherPeople = [...people];
// otherPeople[0].name = `Lisa`;

// console.log(`PEOPLE:`, people);
// console.log(`OTHER PEOPLE:`, otherPeople);