function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numal = numAleatorio(23, 1000);
console.log("Número aleatorio: " + numal);
numAleatorio;
