document.getElementById('boleto').addEventListener('input', function() {
    let boleto = document.getElementById('boleto').value;
    let corrigidoReais = boleto.replace(/R\$ [^ ]* /g, '');
    let corrigidoFinal = corrigidoReais.replace(/[^0-9]/g, '');
    document.getElementById('corrigido').value = corrigidoFinal;
});

document.getElementById('copiar').addEventListener('click', function() {
    let corrigido = document.getElementById('corrigido').value;
    navigator.clipboard.writeText(corrigido);
    let alertElement = document.getElementById('alert');
    alertElement.style.visibility = 'visible';
    alertElement.style.opacity = '1';
    setTimeout(function() {
        alertElement.style.visibility = 'hidden';
        alertElement.style.opacity = '0';
    }, 3000);
});