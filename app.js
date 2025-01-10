const form = document.getElementById('tenda-form');
const resultados = document.getElementById('resultados');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    resultados.innerHTML = "";

    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;

    const ferrosLaterais = Math.floor(comprimento / 3) + 1;
    const totalFerros = ferrosLaterais * 2;
    const ferrosMeio = ferrosLaterais;

    const perimetro = 2 * (comprimento + largura);
    const laterais = Math.ceil(perimetro / 6);

    // Distância usando DistanceMatrix API
    const apiKey = "hDbbhskqnl0WO10paSwbcTe28w8x6sZGCL0qWwLC3MjWNn50XhXJaSapuj76q9kK";
    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origem}&destinations=${destino}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.rows[0].elements[0].status === "OK") {
            const distancia = data.rows[0].elements[0].distance.value / 1000;
            const custoViagem = (distancia * 0.25) * 4;

            resultados.innerHTML = `
                <h3>Resultados</h3>
                <p><strong>Total de Ferros Laterais:</strong> ${totalFerros}</p>
                <p><strong>Total de Ferros do Meio:</strong> ${ferrosMeio}</p>
                <p><strong>Quantidade de Laterais:</strong> ${laterais}</p>
                <p><strong>Distância:</strong> ${distancia.toFixed(2)} km</p>
                <p><strong>Custo da Viagem:</strong> €${custoViagem.toFixed(2)}</p>
            `;
        } else {
            resultados.innerHTML = `<p>Erro ao calcular a distância.</p>`;
        }
    } catch (error) {
        resultados.innerHTML = `<p>Erro: ${error.message}</p>`;
    }
});
