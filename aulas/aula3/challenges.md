# Desafios

## forEach()
```javascript
numbers.forEach(number => {
	if(number %2 === 0) console.log(`${number} é par`)
	else console.log(`${number} é impar`)
});
```

## filter()
```javascript
numbers.filter(number => {
	if(number % 2 === 1) return number
})
```

## find()
```javascript
numbers.find(number => {
	if(number === 1) return false

    for(var i = 2; i < number ; i++){
        if(number % i === 0 && !isPrimeNumber) return false
    }
    
    return true
})
```

## map()
```javascript
numbers.map(number => Math.pow(number, 2))
```

## reduce()
```javascript
numbers.reduce((acc, value) => {
	return acc * value
}, 1)
```

