function help()
{
    console.log(`
    These are some myCLI commands used in various situation:
    1. node main.js tree <path>
    2. node main.js organize <path>
    3. node main.js help`);
}
// here module exports method is used below
module.exports={
    help:help
}