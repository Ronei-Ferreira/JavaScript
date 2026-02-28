function contar() { 
    let ini = document.getElementById('txti') 
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp') 
    let re

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        window.alert('[ERRO] Faltam Dados!') 
    } else { 
        alert('Tudo Ok!') 
    } 
}