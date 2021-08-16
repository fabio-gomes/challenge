# Descrição do desafio

A vendinha da esquina está construindo um site para poder vender seus produtos agora também pela internet. Os clientes poderão escolher os produtos que desejam comprar através de um componente HTML `select` na interface gráfica do site da vendinha. Esse componente tem seu conteúdo preenchido após o usuário digitar o nome do produto desejado em um componente HTML `input` também presente na interface gráfica. Os valores do componente `select` devem usar os valores retornados do backend. O candidato deve escrever o código Java Script responsável por obter os valores do backend e preecher o componente `select` e também o código responsável por obter esses valores no backend. O arquivo `server/public/app.js` é o local onde o candidato deve colocar o código de frontend e a função `getOrderedFromStock`, que está localizada no arquivo `server/modules/get-ordered.js`, é o local reservado para o código de backend. O candidato deve implementar o código seguindo as seguintes premissas:

- A implementação deverá ser feita no prazo de **30 minutos**;
- Os elementos devem ser retornados em ordem alfabética e caixa baixa;
- O código do frontend, responsável por preencher o componte da interface gráfica com os produtos disponíveis em estoque, irá chamar o backend a partir do primeiro caracter digitado;

<br>

## Exemplo:

<br>

### Estoque = [limao, laranja, lasanha, queijo]

<br>

- Entrada = 'l'
    - Retorno = [laranja, lasanha, limao]

<br>

- Entrada = 'la'
    - Retorno = [laranja, lasanha]

<br>

- Entrada = 'lar'
    - Retorno = [laranja]

<br>

## Instalação

### Após baixar o projeto, o candidato deve executar `npm install`

<br>

## Execução 

### O candidato poderá verificar o funcionamneto do app executando `npm start` e acessando no browser `http://localhost:3000`


<br>

## Validação

### Para verificar se o código atende aos requisitos, o candidato pode executar `npm test`
