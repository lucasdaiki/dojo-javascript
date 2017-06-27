# Array.prototype.reduce

[Documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

O método `.reduce()` aplica uma função sobre um acumulador e cada valor do array (da esquerda para direita), deve reduzí-lo a um único valor.

### Exemplo

```javascript
var persons = [
  {
    "name": "Daiki",
    "age": 22
  },
  {
    "name": "PNG",
    "age": 25
  },
  {
    "name": "Guilherme",
    "age": 31
  },
  {
    "name": "Safadones",
    "age": 74
  },
  {
    "name": "Alexandre",
    "age": 26
  }
]

persons.reduce(function(acc, person) { 
  return acc + person.age
}, 0) // 178
```

### Parâmetros

O `reduce` executa um `callback` para cada elemento, recebendo quatro argumentos:

```javascript
any: previousValue, // O valor retornado na última invocação do callback, ou o argumento initialValue, se fornecido.
any: currentValue, // O valor do elemento corrente.
Number: index, // O índice do elemento atual sendo processado no array.
Array: array // O array que reduce() está sendo aplicado.
```

Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback.
```javascript
any: initialValue
```