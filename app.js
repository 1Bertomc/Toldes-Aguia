const form = document.getElementById('tenda-form');
const resultados = document.getElementById('resultados');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevenir reload da página
    resultados.innerHTML = ""; // Limpar resultados anteriores

    // Pegar valores do formulário
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const origem = document.getElementById('origem').value.trim();
    const destino = document.getElementById('destino').value.trim();

    // Validar entradas
    if (isNaN(comprimento) || isNaN(largura) || !origem || !destino) {
        resultados.innerHTML = "<p>Por favor, preencha todos os campos corretamente.</p>";
        return;
    }

    // Calcular os ferros e laterais
    const ferrosLaterais = Math.floor(comprimento / 3) + 1;
    const totalFerros = ferrosLaterais * 2;
    const ferrosMeio = ferrosLaterais;

    const perimetro = 2 * (comprimento + largura);
    const laterais = Math.ceil(perimetro / 6);

    // Calcular a distância usando a API DistanceMatrix
    const apiKey = "hDbbhskqnl0WO10paSwbcTe28w8x6sZGCL0qWwLC3MjWNn50XhXJaSapuj76q9kK";
    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${encodeURIComponent(origem)}&destinations=${encodeURIComponent(destino)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== "OK") {
            resultados.innerHTML = "<p>Erro ao calcular a distância. Verifique os endereços.</p>";
            console.error("Erro na resposta da API:", data);
            return;
        }

        const distanceMeters = data.rows[0].elements[0].distance.value;
        const distanceKm = distanceMeters / 1000;
        const custoViagem = (distanceKm * 0.25) * 4;

        // Exibir resultados
        resultados.innerHTML = `
            <h3>Resultados</h3>
            <p><strong>Total de Ferros Laterais:</strong> ${totalFerros}</p>
            <p><strong>Total de Ferros do Meio:</strong> ${ferrosMeio}</p>
            <p><strong>Quantidade de Laterais:</strong> ${laterais}</p>
            <p><strong>Distância:</strong> ${distanceKm.toFixed(2)} km</p>
            <p><strong>Custo da Viagem:</strong> €${custoViagem.toFixed(2)}</p>
        `;
    } catch (error) {
        resultados.innerHTML = "<p>Erro ao calcular os resultados. Verifique sua conexão.</p>";
        console.error("Erro ao buscar dados da API:", error);
    }
});
