let numero = parseInt(
  prompt("Escribe un número para ver si es número primo o no:")
);
let divisor = 1,
  contador = 0;
while (divisor <= numero) {
  if (numero % divisor == 0) {
    contador++;
  }
  divisor++;
}
contador == 2 ? document.write("Es primo") : document.write("No es primo");
