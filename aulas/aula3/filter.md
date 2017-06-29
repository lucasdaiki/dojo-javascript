# Array.prototype.filter

[Documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

O método `.filter()` invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
O `filter` retorna uma nova instancia de array sem modificar o original

### Exemplo

```javascript
var frutas = [ 'Maçã', 'Banana' ];
var ehBanana = fruta => fruta === 'Banana'
var bananas = frutas.filter(ehBanana); 
console.log(bananas); // ["Banana"]
```

### Parâmetros

O `filter` executa um `callback` para cada elemento, recebendo três argumentos:

```javascript
any: currentValue, // O valor do elemento corrente.
Number: index, // O índice do elemento atual sendo processado no array.
Array: array // O array que filter() está sendo aplicado.
```

Opcional. Valor a ser usado como this quando executar callback.
```javascript
any: thisArg
```

E espera um retorno `bool` para informar se retorna o item no array

### Desafio

Percorra o array `numbers` e retorne um array apenas com os números **impares**

```javascript
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
```

Ex: 
```javascript
[1, 9, 7, 11, 3, 101, 5]
```