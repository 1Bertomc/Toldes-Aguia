function calcularFerros(comprimento, largura) {
  // Cálculos de perímetro e laterais
  const perimetro = 2 * (comprimento + largura);
  const laterais = perimetro / 6;

  // Cálculos de ferros laterais
  const ferrosLaterais = (comprimento / 3) + 1;
  const ferrosLateraisTotais = ferrosLaterais * 2;  // 2 lados

  // Cálculos de ferros do meio
  const ferrosMeio = (comprimento / 3) + 1;

  // Cálculos de ferros de apoio
  const ferrosApoio = (largura / 12) * 4;

  // Resultados
  return {
    laterais: laterais.toFixed(0),
    ferrosLateraisTotais: ferrosLateraisTotais.toFixed(0),
    ferrosMeio: ferrosMeio.toFixed(0),
    ferrosApoio: ferrosApoio.toFixed(0),
  };
}

function calcular() {
  const comprimento = parseFloat(document.getElementById('comprimento').value);
  const largura = parseFloat(document.getElementById('largura').value);
  
  const resultado = calcularFerros(comprimento, largura);

  document.getElementById('resultado-laterais').textContent = `Laterais: ${resultado.laterais} Laterais`;
  document.getElementById('resultado-ferros-laterais').textContent = `Ferros Laterais: ${resultado.ferrosLateraisTotais}`;
  document.getElementById('resultado-ferros-meio').textContent = `Ferros do Meio: ${resultado.ferrosMeio}`;
  document.getElementById('resultado-ferros-apoio').textContent = `Ferros de Apoio: ${resultado.ferrosApoio}`;
}
