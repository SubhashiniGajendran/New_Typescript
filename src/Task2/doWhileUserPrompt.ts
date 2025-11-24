const fruit =["apple","banana","grape"];
let index =0;
let userInput:string;
do {
    userInput = fruit[index++];
    console.log("You selected:", userInput);
  
}while (userInput.toLowerCase() !== "grape");
console.log("Exited the loop.");