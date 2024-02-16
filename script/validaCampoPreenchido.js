function ValidaCampoPrenchido() {
    const campoNome = document.getElementById('name').value;
    const validaNome = document.getElementById('validacao-nome');

    const campoEmail = document.getElementById('email').value;
    const validaEmail = document.getElementById('validacao-email');

    const campoCep = document.getElementById('cep').value;
    const validaCep = document.getElementById('validacao-cep');

    const campoLat = document.getElementById('latitude').value;
    const validaLat = document.getElementById('validacao-lat');

    const campoLong = document.getElementById('longitude').value;
    const validaLong = document.getElementById('validacao-long');

    let retorno = 0;

/*Valida Campo Nome */
    if(campoNome.length == 0) {
        
        validaNome.innerHTML = '<p class="campo-vazio">Necessário prencher esse campo</p>'
        retorno++;
    } 
    else {
        validaNome.innerHTML = '<p></p>'
        
    }

    /*Valida Campo Email */

    if(campoEmail.length == 0) {
        
        validaEmail.innerHTML = '<p class="campo-vazio">Necessário prencher esse campo</p>'
        retorno++;
    } 
    else {
        validaEmail.innerHTML = '<p></p>'
    }

    /*Valida Campo Cep */
    if(campoCep.length == 0) {
        
        validaCep.innerHTML = '<p class="campo-vazio">Necessário prencher esse campo</p>'
        retorno++;
    } 
    else {
        validaCep.innerHTML = '<p></p>'
    }

/*Valida Campo Latitude */
    if(campoLat.length == 0) {
        
        validaLat.innerHTML = '<p class="campo-vazio">Necessário prencher esse campo</p>'
        retorno++;
    } 
    else {
        validaLat.innerHTML = '<p></p>'
    }

/*Valida Campo Longitude */
    if(campoLong.length == 0) {
        
        validaLong.innerHTML = '<p class="campo-vazio">Necessário prencher esse campo</p>'
        retorno++;
    } 
    else {
        validaLong.innerHTML = '<p></p>'
    }


    return retorno;
}