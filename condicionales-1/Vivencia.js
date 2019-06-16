//> <
var edad = 15;
var dias = 0;
var horas = 0;
var nombre = "Jhon";

console.log(nombre, + edad);
if (edad>= 18){
    dias = edad*365;
    console.log(nombre + " ha vivido " + dias);
}
else if (edad % 2 == 0){
    horas = edad*365*24;
    console.log("Ha vivido " + horas);

}
else {
    console.log(nombre + " Hola");
}