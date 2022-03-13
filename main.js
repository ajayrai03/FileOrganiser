// entry point of my command
let helpFunc=require("./commands/help")
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
  case "tree": {
    console.log("tree function called and executed successfuly on path" + path);
    break;
  }
  case "organize": {
    console.log(
      "organize function called and executed successfuly on path" + path
    );
    break;
  }
  case "help": {
    console.log("help function called and executed successfuly on path" + path);
    break;
  }
  default: {
    console.log("command not recognized!");
    break;
  }
}
