#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 30000; //dollar
let mypin = 3344;
// print welcome message
console.log(chalk.red("\n \tWelcome to MCB Bank -ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter you pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Correct Pin Code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter the amount to withdraw",
                type: "number"
            }
        ]);
        if (amountAns.Amount > mybalance) {
            console.log("Insufficient balance.");
        }
        else {
            mybalance -= amountAns.Amount;
            console.log(`Your remaining balance is: ${mybalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance Amount is:${mybalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "option",
                message: "Select Fast Cash Amount",
                type: "list",
                choices: ["1000", "2000", "4000", "6000", "7000", "10000"],
            }
        ]);
        mybalance -= fastcashAns.option;
        console.log(`Your remaining Current Amount is:  ${mybalance}`);
    }
    else if (operationAns.operation === "Exit") {
        console.log(chalk.yellow("Thank you for using the MCB Bank ATM. Goodbye!"));
    }
}
else {
    console.log("Incorrect Pin Number");
}
