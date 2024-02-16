async function BuscaClima() {
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;
    var campoTemperatura = document.getElementById('temperatura');

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=auto&current`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status}`);
        }

        const data = await response.json();

        if (!data.hourly || !data.hourly.temperature_2m || !data.hourly_units || !data.hourly_units.temperature_2m) {
            throw new Error('Dados de temperatura não disponíveis');
        }

        campoTemperatura.innerHTML = data.hourly.temperature_2m[0] + ' ' + data.hourly_units.temperature_2m;
    } catch (error) {
        alert(`Algo deu errado: ${error.message}`);
    }
}