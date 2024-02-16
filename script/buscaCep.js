async function ConsultaCep() {
    var cepValue = document.getElementById('cep').value;
    var cepCampoTabelaId = document.getElementById('contain-table');
    var loadingElement = document.getElementById('loading');
    debugger;
    const url = `https://viacep.com.br/ws/${cepValue}/json/`;

    loadingElement.style.display = 'block';

    if(ValidaCampoPrenchido() > 0) {
        return;
    } 
    else {
        
        await BuscaClima();
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Erro ao buscar CEP: ${response.statusText}`);
            }
            
            const data = await response.json();
            
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }
            
            cepCampoTabelaId.innerHTML = `
                <div>${data.logradouro}</div>
                <div>${data.bairro}</div>
                <div>${data.localidade} ${data.uf}</div>
            `;
            loadingElement.style.display = 'none';
            
        } catch (error) {
            alert(`Algo deu errado: ${error.message}`);
            loadingElement.style.display = 'none';
        }
}
}


