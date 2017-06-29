# Array.prototype.find

[Documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

O método `.find()` invoca a função callback passada por argumento para cada elemento do Array e devolve o primeiro item do array que satisfaça a condição.
O `find` retorna uma nova instancia de array sem modificar o original

### Exemplo

```javascript
var frutas = [ 'Maçã', 'Banana Naninca', 'Banana Prata' ];
var ehBanana = fruta => fruta.includes('Banana')
var banana = frutas.find(ehBanana); 
console.log(banana); // "Banana Naninca"
```

### Parâmetros

O `find` executa um `callback` para cada elemento, recebendo três argumentos:

```javascript
any: currentValue, // O valor do elemento corrente.
Number: index, // O índice do elemento atual sendo processado no array.
Array: array // O array que find() está sendo aplicado.
```

Opcional. Valor a ser usado como this quando executar callback.
```javascript
any: thisArg
```

E espera um retorno `bool` para informar se retorna o item no array

### Desafio

Percorra o array `numbers` e retorne um array apenas o primeiro número **primo** que não seja `1`

```javascript
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
```

Ex: 
```javascript
7
```