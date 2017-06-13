## Functions

- Arguments
    ```javascript
    function somar(a, b){
        return a + b
    }
    somar(1, 2)
    ```
    
- Named functions
    ```javascript
    function somar(){
        return 1 + 2
    }
    somar()
    ```

- Anonymous Functions
    ```javascript
    const somar = function (a, b){
        return a + b
    }
    somar(1, 2)
    ```

- Arrow Functions
    ```javascript
    const somar = (a, b) => a + b
    somar(1, 2)
    ```

- Auto executável - IIFE (Immediately Invoked Function Expression)
    ```javascript
    (function (a, b){
        return a + b
    })(1, 2)
    ```