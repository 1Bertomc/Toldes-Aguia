function calcularFerros(comprimento, largura) {
  // Cálculos de perímetro e laterais
  const perimetro = 2 * (comprimento + largura);
  const laterais = Math.floor(perimetro / 6);

  // Cálculos de ferros laterais
  const ferrosLaterais = Math.floor(comprimento / 3) + 1;
  const ferrosLateraisTotais = ferrosLaterais * 2; // 2 lados

  // Cálculos de ferros do meio
  const ferrosMeio = Math.floor(comprimento / 3) + 1;

  // Cálculos de ferros de apoio
  const ferrosApoio = Math.floor((largura / 12) * 4);

  // Resultados
  return {
    laterais: laterais,
    ferrosLateraisTotais: ferrosLateraisTotais,
    ferrosMeio: ferrosMeio,
    ferrosApoio: ferrosApoio,
  };
}

function calcular() {
  const comprimento = parseFloat(document.getElementById('comprimento').value);
  const largura = parseFloat(document.getElementById('largura').value);

  const resultado = calcularFerros(comprimento, largura);

  document.getElementById('resultado-laterais').textContent = `Laterais: ${resultado.laterais}`;
  document.getElementById('resultado-ferros-laterais').textContent = `Ferros Laterais Totais: ${resultado.ferrosLateraisTotais}`;
  document.getElementById('resultado-ferros-meio').textContent = `Ferros do Meio: ${resultado.ferrosMeio}`;
  document.getElementById('resultado-ferros-apoio').textContent = `Ferros de Apoio: ${resultado.ferrosApoio}`;
}
