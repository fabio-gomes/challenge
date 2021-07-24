# Descrição do desafio

A vendinha da esquina está construindo um site para poder vender seus produtos agora também pela internet. Todos os dias, o dono da vendinha atualiza os produtos disponíveis em estoque para que somente os produtos disponíveis em estoque sejam selecionados pelos seus clientes. Os clientes poderão escolher os produtos que desejam comprar através de um componente na interface gráfica do site da vendinha. Esse componente tem seu conteúdo preenchido com os valores retornados do backend. O código responsável por obter esses valores no backend é a função `getOrderedFromStock` que está localizada no arquivo `modules/get-ordered.js`. O candidato deve implementar o código da função `getOrderedFromStock` seguindo as seguintes premissas:

- A implementação deverá ser feita no prazo de **30 minutos**;
- Os elementos devem ser retornados em ordem alfabética;
- O código do frontend responsável por preencher o componte da interface gráfica com os produtos disponíveis em estoque irá chamar o backend a partir do primeiro caracter digitado;

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

### O candidato poderá adicionar logs no código e verificar a saída executando `npm start <entrada de teste>`


<br>

## Validação

### Para verificar se o código atende aos requisitos, o candidato pode executar `npm test`
