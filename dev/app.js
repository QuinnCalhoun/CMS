var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4385.Gabi",
  database: "cms_db"
});

connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log(`Connected, connection id: ${connection.threadId}`);
  start()
});

const start = async () => {
  let intent = await inquirer
    .prompt({
      type: `list`,
      name: `userIntent`,
      message: `Hello. What area would you like to work with today?`,
      choices: [`Departments`, `Roles`, `Employees`]
    }).then(res => res.userIntent)
  let operator = await inquirer
    .prompt({
      type: `list`,
      message: `Thank you. Would you like to: `,
      choices: [`Add`, `Edit`, `View`],
      name: `operation`
    }).then(res => res.operation)
  inquirer
    .prompt({
      type: `confirm`,
      message: `Okay. You want to ${operator} ${intent}`,
      name: `Finalize`
    }).then(res => {
      (res.Finalize) ?
        beginWork(operator, intent) :
        start()
    })
}

const beginWork = async (op, int) => {
  ()
    
}