var fortune = require("./library/fortune");

for (var i = 0; i < process.argv[2]; i++) {
    console.log(fortune.getFortune());
}
