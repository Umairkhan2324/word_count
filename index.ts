import inquirer from "inquirer";

const answers:{
    sentence: string
}= await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence to count the words you want to count",
    }
])
const words = answers.sentence.trim().split(" ")
console.log(`words in your sentence are ${words.length}`);