# Objetos

[Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Sintáxe

```javascript 
let o = new Object([valor]) 
// => valor = [chave, valor] ex: {a: b}
``` 
ou 
```javascript 
let o = {}
// => [chave, valor] ex: {a:b}
```

## Descrição

O construtor Object cria um `objeto englobador` para o valor passado. Se o valor é null ou undefined, será criado e retornado um objeto vazio, caso não seja passado um valor null ou undefined será retornado um objeto que corresponde ao valor passado.

** Quando chamado em um contexto sem o construtor, o Object se comporta de maneira idêntica.

## Propriedades

 - prototype - Permite colocar propriedades adicionais para todos os objetos do tipo Object.

```javascript
Object.prototype.hello = function() { 
    alert('Hello')
}
```

## Métodos

### defineProperty(Objet, 'chave', descriptor)

```javascript
var obj = {};
var key = 'nome';
var descriptor = {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Rafael'
}

Object.defineProperty(obj, key, descriptor)
// => Object {nome: 'Rafael'}
```

### defineProperties(Objet, props)

```javascript
var obj = {};
var descriptorNome = {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Rafael'
};
var descriptorIdade = {
    enumerable: true,
    configurable: false,
    writable: true,
    value: 24
};
var props = {
    nome: descriptorNome,
    idade: descriptorIdade
};

Object.defineProperties(obj, props);
// => Object {nome: 'Rafael'}
```

### getOwnPropertyDescriptor(Objet, props)

```javascript
var obj = {
    idade: 24
};
var key = 'idade';

Object.getOwnPropertyDescriptor(obj, key);
// => Object {value: 24, writable: true, enumerable: true, configurable: true}
```

### keys(Object)

```javascript
var obj = {};
var descriptorNome = {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Rafael'
};
var descriptorIdade = {
    enumerable: true,
    configurable: false,
    writable: true,
    value: 24
};
var props = {
    nome: descriptorNome,
    idade: descriptorIdade
};

Object.defineProperties(obj, props);
Object.keys(obj);
// => ["idade"]
```

### getOwnPropertyNames(Object) - AKA (get keys -f)

```javascript
var obj = {};
var descriptorNome = {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Rafael'
};
var descriptorIdade = {
    enumerable: true,
    configurable: false,
    writable: true,
    value: 24
};
var props = {
    nome: descriptorNome,
    idade: descriptorIdade
};

Object.defineProperties(obj, props);
Object.getOwnPropertyNames(obj);
// => ["nome", "idade"]
Object.keys(obj)
// => ["idade"]
```

### freeze(Object)

```javascript
var obj = {
    nome: 'Rafael',
    idade: 24
};

Object.isFrozen(obj);

// => false

Object.freeze(obj);

obj.nome = 'PNG';

console.log(obj);

// => Object {nome: "Rafael", idade: 24}

Object.isFrozen(obj);

// => true
```

## Exercício

Vamos comprar frutas no super mercado ; )
 - Criar um objeto que represente uma fruta com as seguintes atributos
    - `nome: String`, `ehRedondo: Boolean`, `valor: Int` e `quantidade: Int`
    - Criar uma `maçã`
    - Criar uma `banana`
    - Criar uma `malancia`
    - Criar uma `mamão`

 - Criar um objeto que represente uma cesta
    - Criar um atributo `frutas: Array`
    - Criar um atributo `total: int`
    - Criar um método `add` para adicionar todas as frutas que foram criadas
    - Para cada item adicionado na cesta atualizar atributo `total` multiplicando a `quantidade * valor` de cada item

 - Ao chegar no caixa você ve que o valor total das frutas esta acima do espera e decide ficar apenas com as frutas redondas.
    - Criar um filtro que retorne um novo array com apenas as frutas através da propriedade `ehRedonda` igual a `true`, calcule o novo valor total das frutas redondas e finalmente retorne o valor.
