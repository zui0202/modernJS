var name = "global var";

function home() {
  var homebar = "homevar";
  for (var i = 0; i < 100; i++) {
    console.log(i);
  }

  if (true) {
    let myif = "myif";
  }
  console.log(myif);
}

home();
