# Corrigir Boleto

Este projeto é uma aplicação web simples para corrigir o numero do boleto copiado diretamente de um PDF gerado em operação de callcenter para cobrança.

O número era copiado da seguinte forma:

> 4840000001-2 R$ 123,4 567800123456-7 89010098765-4 32100987654-3

E para utilização era preciso manter apenas os números, sem espaços ou o valor, que era copiado junto.

Após o script o número é recuperado como deveria:

> 484000000125678001234567890100987654321009876543

## Como Usar

1. Abra o arquivo `index.html` em um navegador web.
2. Cole o número do boleto no campo de entrada.
3. O número corrigido será exibido no campo de saída.
4. Clique no botão de copiar para copiar o número corrigido.

## Funcionalidades

- **Correção de Boletos**: Corrige o número do boleto inserido.
- **Copiar Número Corrigido**: Copia o número corrigido para a área de transferência.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
