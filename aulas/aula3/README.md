# Array

O objeto Array do JavaScript é um objeto global que é usado na construção de 'arrays'; os quais são alto nível, objetos tipo listas

[Documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

```javascript
var frutas = ['Maçã', 'Banana'];
console.log(frutas.length);
console.log(frutas[0]); // A primeira posição de um Array é sempre a posição 0
console.log(frutas[1]);
```

```javascript
var bananas = new Array(5).fill('Banana')
console.log(bananas) // [ 'Banana', 'Banana', 'Banana', 'Banana', 'Banana' ]
```

## Métodos

| Método        | Descrição                                                                        |
|---------------|----------------------------------------------------------------------------------|
| concat()      | Joins two or more arrays, and returns a copy of the joined arrays                |
| copyWithin()  | Copies array elements within the array, to and from specified positions          |
| every()       | Checks if every element in an array pass a test                                  |
| fill()        | Fill the elements in an array with a static value                                |
| filter()      | Creates a new array with every element in an array that pass a test              |
| find()        | Returns the value of the first element in an array that pass a test              |
| findIndex()   | Returns the index of the first element in an array that pass a test              |
| [forEach()](forEach.md)     | Calls a function for each array element                                          |
| indexOf()     | Search the array for an element and returns its position                         |
| isArray()     | Checks whether an object is an array                                             |
| join()        | Joins all elements of an array into a string                                     |
| lastIndexOf() | Search the array for an element, starting at the end, and returns its position   |
| [map()](map.md)         | Creates a new array with the result of calling a function for each array element |
| pop()         | Removes the last element of an array, and returns that element                   |
| push()        | Adds new elements to the end of an array, and returns the new length             |
| reduce()      | Reduce the values of an array to a single value (going left-to-right)            |
| reduceRight() | Reduce the values of an array to a single value (going right-to-left)            |
| reverse()     | Reverses the order of the elements in an array                                   |
| shift()       | Removes the first element of an array, and returns that element                  |
| slice()       | Selects a part of an array, and returns the new array                            |
| some()        | Checks if any of the elements in an array pass a test                            |
| sort()        | Sorts the elements of an array                                                   |
| splice()      | Adds/Removes elements from an array                                              |
| toString()    | Converts an array to a string, and returns the result                            |
| unshift()     | Adds new elements to the beginning of an array, and returns the new length       |
| valueOf()     | Returns the primitive value of an array                                          |

## Propriedades

```javascript
length // Retorna a quantidade de itens dentro do Array
```