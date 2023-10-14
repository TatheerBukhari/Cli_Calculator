import inquirer from "inquirer";

export default async function main() {
  console.log("Welcome to Tatheer Fatima, CLI Based Calculator.");

  const answers: {
    numberOne: number;
    numberTwo: number;
    operator: string;
  } = await inquirer.prompt([
    {
      type: "number",
      name: "numberOne",
      message: "Kindly enter your first number: ",
    },
    {
      type: "number",
      name: "numberTwo",
      message: "Kindly enter your second number: ",
    },
    {
      type: "list",
      name: "operator",
      choices: ["Multiply", "Addition", "Subtraction", "Division"],
      message: "Select Operator: ",
    },
  ]);

  const { numberOne, numberTwo, operator } = answers;
  let result: number = 0;

  try {

    if (numberOne && numberTwo && operator) {
      if (operator === "Addition") {
        result = numberOne + numberTwo;
      } else if (operator === "Subtraction") {
        result = numberOne - numberTwo;
      } else if (operator === "Division") {
        result = numberOne / numberTwo;
      } else if (operator === "Multiply") {
        result = numberOne * numberTwo;
      }
    }
  } catch (e: any) { }

  if (parseFloat(result.toString()) || !(isNaN(numberOne) || isNaN(numberTwo))) {
    console.log("Your Ans is:", result);
  } else {
    console.log("Kindly enter valid input");
  }
}
