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

function res2num(a, b) {
    const res = a * b;
    const file = new FileWriter("res.txt");
    file.write(res);
    file.close();
  }
  
  res2num(4, 8);
