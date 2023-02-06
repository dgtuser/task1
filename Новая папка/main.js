for (var i = 0; i < 150; i++) {
    console.log('Hello Nikita');
  }

  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

function cArg(arg) {
   if (arg > 0) {
          console.log("Hello");
    } else {
      console.log("olleH");
    }
  }

cArg(-5)
cArg(5)

const fs = require('fs')

let text = fs.readFileSync('ggg.txt', 'utf8')
console.log(text)
fs.writeFileSync('ggg.txt', text + 8 * 6)

function res2num(a, b) {
    fs.writeFileSync('ggg.txt', text + a* b)


}
res2num(7,10)