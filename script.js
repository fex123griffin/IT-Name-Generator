// This declares the first array
function generateRandomWord(){
    let firstWord = [
        "Iceberg",
        "Island",
        "Insect",
        "Idea",
        "Instrument",
        "Injury",
        "Internet",
        "Ink",
        "Igloo",
        "Invitation",
        "Imagination",
        "Insurance",
        "Incident",
        "Inkblot",
        "Interview",
        "Index",
        "Iron",
        "Intrigue",
        "Icon",
        "Inflation",
        "Infection",
        "Involvement",
        "Invoice",
        "Identity",
        "Impala",
        "Impact",
        "Illustration",
        "Indigo",
        "Incense",
        "Inception",
        "Isolation",
        "Initiative",
        "Intelligence",
        "Instrumental",
        "Integration",
        "Intervention",
        "Illustrator",
        "Infrastructure",
        "Invention",
        "Impression",
        "Irrigation",
        "Inscription",
        "Investment",
        "Intrusion",
        "Instructor",
        "Intellect",
        "Iris",
        "Inquiry",
        "Immigration",
        "Intelligence"
    ]


    let secondWord = [
        "Telemetry", 
        "Tango", 
        "Tangle", 
        "Trust", 
        "Table", 
        "Tail", 
        "Talent", 
        "Tank", 
        "Tape", 
        "Target", 
        "Task", 
        "Technology", 
        "Technique", 
        "Tactic", 
        "Tear",
        "Taxi", 
        "Turtles", 
        "Transformers",
        "Table",
        "Tiger",
        "Tree",
        "Town",
        "Train",
        "Temple",
        "Trophy",
        "Telephone",
        "Telescope",
        "Tunnel",
        "Truck",
        "Teapot",
        "Teacher",
        "Thread",
        "Task",
        "Towel",
        "Ticket",
        "Tractor",
        "Turtle",
        "Tissue",
        "Toast",
        "Tank",
        "Trunk",
        "Tulip",
        "Tuna",
        "Temperature",
        "Trolley",
        "Tablet",
        "Tournament",
        "Tornado",
        "Tattoo",
        "Trophy",
        "Terrace",
        "Tail",
        "Trophy",
        "Tavern",
        "Test",
        "Tar",
        "Trip",
        "Tugboat",
        "Tug",
        "Thumb",
        "Trampoline",
        "Tent",
        "Tea",
        "Treasury",
        "Trick",
        "Tornado",
        "Telescope"
    ];

    //This shuffles each array by number 
    let shuffleWordOne = Math.floor(Math.random() * firstWord.length);
    let shuffleWordTwo = Math.floor(Math.random() * secondWord. length);

    //This calls back to the position of the word in the array
    const randomWord = firstWord[shuffleWordOne];
    const randomWordTwo = secondWord[shuffleWordTwo];

    // Variable to combine the two words
    let newWord = randomWord + " " + randomWordTwo;

    //Prints the output to the html element with the id of title
    document.getElementById("title").innerHTML = newWord
};

/*Turn this function on if you want to load a name upon going to website

window.onload = function() {
    generateRandomWord();
}
*/

/* This section is setup for the password generator */

//State the variables for the loop
function passwordGenerator() {
    let nonSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let passLength = 12;
    let updatePass = " "
    
    //Trigger a loop to jumble the characters in the variable and set password length. This then updates to the updatePass variable
    for (let i = 1; i <= passLength; i++) {
        const randomIndex = Math.floor(Math.random() * nonSpecial.length);
        updatePass += nonSpecial[randomIndex]

    }
    //Statement calls on on the update pass vairable and replaces the text with id of title
    document.getElementById("title").innerHTML = updatePass
};

function passwordSpecial() {
    let specialChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*";
    let passLength = 12;
    let updatePass = " "

    for (let i = 1; i <= passLength; i++) {
        const randomIndex = Math.floor(Math.random() * specialChars.length);
        updatePass += specialChars[randomIndex]
    }
    document.getElementById("title").innerHTML = updatePass
};
