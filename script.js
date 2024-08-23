// This declares the first array
let firstWord = ["Internet", "Insane","Inter-Galactic", "Iced", "Ibex", "Ices", "Iambic", "Iceberg", "Iceboat", "Ibuprofen", "Illegal", "Illustrative", "Imaginary", "Imagine", "Irresistable", "Informant", "Insane", "Inaudible", "Icabod"];
let secondWord = ["Telemetry", "Tango", "Tangle", "Trust", "Table", "Tail", "Talent", "Tank", "Tape", "Target", "Task", "Technology", "Technique", "Tactic", "Tear","Taxi", "Turtles", "Transoformers"];

//This shuffles each array by number 
let shuffleWordOne = Math.floor(Math.random() * firstWord.length);
let shuffleWordTwo = Math.floor(Math.random() * secondWord. length);

//This calls back to the position of the word in the array
const randomWord = firstWord[shuffleWordOne];
const randomWordTwo = secondWord[shuffleWordTwo]

// Variable to combine the two words
let newWord = randomWord + " " + randomWordTwo;

//Prints the output to the html element with the id of title
document.getElementById("title").innerHTML = newWord