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

function calcularPreco(comprimento, largura) {
  // Tabela de preços
  const precos = {
    "9x7.5": 400,
    "10x7.5": 500,
    "15x7.5": 700,
    "21x7.5": 800,
    "12x12": 800,
    "15x12": 900,
    "18x12": 1100,
    "21x12": 1200,
    "30x11": 1350,
    "30x12": 1500,
    "42x12": 2100,
    "45x12": 2200,
    "51x12": 2400,
    "60x12": 2600,
    "15x24": 1600,
    "21x24": 2200,
    "30x24": 2600
  };

  const chave = `${comprimento}x${largura}`;
  return precos[chave] || "Sob Orçamento";
}

function calcular() {
  const comprimento = parseFloat(document.getElementById('comprimento').value);
  const largura = parseFloat(document.getElementById('largura').value);

  const resultado = calcularFerros(comprimento, largura);
  const preco = calcularPreco(comprimento, largura);

  document.getElementById('resultado-laterais').textContent = `Laterais: ${resultado.laterais}`;
  document.getElementById('resultado-ferros-laterais').textContent = `Ferros Laterais Totais: ${resultado.ferrosLateraisTotais}`;
  document.getElementById('resultado-ferros-meio').textContent = `Ferros do Meio: ${resultado.ferrosMeio}`;
  document.getElementById('resultado-ferros-apoio').textContent = `Ferros de Apoio: ${resultado.ferrosApoio}`;
  document.getElementById('resultado-preco').textContent = `Preço: ${preco} €`;
}

