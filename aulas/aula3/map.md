# Array.prototype.map

[Documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

O método `.map()` invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
O `map` retorna uma nova instancia de array sem modificar o original

### Exemplo

```javascript
var frutas = [ 'Maçã', 'Banana' ];
frutas.map(fruta => fruta.toUpperCase()); // ["MAÇÃ", "BANANA"]
console.log(frutas); //  [ 'Maçã', 'Banana' ]
```

### Parâmetros

O `map` executa um `callback` para cada elemento, recebendo três argumentos:

```javascript
any: currentValue, // O valor do elemento corrente.
Number: index, // O índice do elemento atual sendo processado no array.
Array: array // O array que map() está sendo aplicado.
```

Opcional. Valor a ser usado como this quando executar callback.
```javascript
any: thisArg
```

E espera um retorno para ser colocado como resultado no array

### Desafio

Percorra o array `numbers` e retorne um array com o quadrado de cada valor

```javascript
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
```

Ex: 
```javascript
[1, 144, 16, 324, 81, 49, 121, 9, 10201, 25, 36]
```