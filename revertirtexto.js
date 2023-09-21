function textoenreversa(str) {
  let texto = "";
  for (let i = str.length - 1; i >= 0; i--) {
    texto += str[i];
  }
  return texto;
}
console.log(`Resultado: ${textoenreversa("parangaricutirimicuaro")}`);
