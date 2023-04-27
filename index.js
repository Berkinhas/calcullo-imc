function calculo() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resultado = document.getElementById("imcResult");

  if (peso && altura) {
    let imc = peso / (altura * altura);
    resultado.textContent = imc.toFixed(3);
  } else {
    resultado.textContent = "Por favor, insira os campos.";
  }

  peso.reset();
  altura.reset();
}
