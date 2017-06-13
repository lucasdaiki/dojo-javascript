# Functions

## Arguments

```javascript
function somar(a, b){
    return a + b
}
somar(1, 2) //3
```
    
## Named functions

```javascript
function somar(){
    return 1 + 2
}
somar() //3
```

## Anonymous Functions

```javascript
const somar = function (a, b){
    return a + b
}
somar(1, 2) //3
```

## Arrow Functions

```javascript
const somar = (a, b) => a + b
somar(1, 2) //3
```

## Auto executável - IIFE (Immediately Invoked Function Expression)

```javascript
(function (a, b){
    return a + b
})(1, 2) //3
```