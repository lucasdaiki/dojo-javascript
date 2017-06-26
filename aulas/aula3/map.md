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
Array: array // O array que forEach() está sendo aplicado.
```

Opcional. Valor a ser usado como this quando executar callback.
```javascript
any: thisArg
```