# Asynchronous Javascript and XML

### Subir o serviço para o `client`

Entrar no diretório `client` e rodar o comando abaixo:

```bash
python -m SimpleHTTPServer
```

Abrir uma aba do browser no endereço: `http://localhost:8000`

### Exemplo html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AJAX</title>
</head>
<body>
    <button onclick="openXMLHttpRequest()">Teste</button>
    <script src="index.js"></script>
</body>
</html>
```

### Exemplo Javascript

```javascript
function openXMLHttpRequest() {

    const xhr = new XMLHttpRequest(),
    method = 'GET',
    url = 'http://localhost:3000';

    xhr.open(method, url, true);

    xhr.onreadystatechange = function () {

        /*

            0	UNSENT	Um cliente foi criado. Mas o método open()  não foi chamado ainda.
            1	OPENED	O método open() foi chamado.
            2	HEADERS_RECEIVED	o método send() foi chamado e os cabeçalhos e status estão disponíveis .
            3	LOADING	Baixando e responseText contem os dados parciais.
            4	DONE	Operação concluída.

        */

        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    }

    xhr.send();
}
```

### Subir o serviço para o `server`

Entrar no diretório `server` e rodar o comando abaixo:

```bash
node app.js
```

# Vamos ao DOJO então:

 - Criar arquivo javascript `xmlHttpRequest.js`
 - Criar uma `request` com o verbo `GET` para os endpoints abaixo

```javascript
const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums"
const URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos"
```

 - Criar um object `JSON` relacionando os objetos `albums` e `photos` com base nos `ids`
 - Exemplo: 

#### Objeto JSON Foto

```json
[
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
    }
]
```

#### Objeto JSON Album

```json
[
    {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    }
]
```

#### Resultado do relacionamento

```json
{
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim",
    "photos": [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "http://placehold.it/600/92c952",
            "thumbnailUrl": "http://placehold.it/150/92c952"
        }
    ]
}
```