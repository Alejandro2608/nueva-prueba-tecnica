var metros = 2;
var kilometros;
var decimetros;

if (metros % 2 == 0) {
    kilometros = metros / 1000;
    console.log("Kilometros: " + kilometros)
}else {
    decimetros = metros * 10;
    console.log("Decimetros : " + decimetros)
}