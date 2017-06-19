# Scopes

## Functions

```javascript
function doAnything(){
    let a = 'oi'
    console.log(a) // 'oi'
}

console.log(a) // ReferenceError: a is not defined
```

## Block

```javascript
function doAnything(x){
    if(x) {
        let a = 'oi'
        var b = '123'
        console.log(a) // 'oi'   
    } else {
        console.log(a) // ReferenceError: a is not defined
    }
    console.log(b)
}

console.log(b) // ReferenceError: b is not defined
```
