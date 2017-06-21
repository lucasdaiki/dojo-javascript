# Array.prototype.ForEach

[Documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

O método `forEach()` executa uma dada função em cada elemento de um array.

### Exemplo

```javascript
var frutas = ['Maçã', 'Banana'];
frutas.forEach(function (item, index, array) {
  console.log(item, index);
}, null);
// Maçã 0
// Banana 1
```

### Parâmetros

O `forEach` executa um `callback` para cada elemento, recebendo três argumentos:

```javascript
any: currentValue, // O valor atual do elemento sendo processado no array.
Number: index, // O índice do elemento atual sendo processado no array.
Array: array // O array que forEach() está sendo aplicado.
```

Opcional. Valor a ser usado como this quando executar callback.
```javascript
any: thisArg
```