# Asynchronous Javascript and XML

AJAX é acrônimo em língua inglesa de "Asynchronous Javascript and XML", que em português significa "Javascript e XML Assíncronos". Designa um conjunto de técnicas para programação e desenvolvimento web que utiliza tecnologias como Javascript e XML para carregar informações de forma assíncrona.

[Documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest)

```javascript
var xhr = new XMLHttpRequest();
```

## Métodos

```javascript
void abort(); // Aborta o pedido, se já foi enviada.
DOMStirng getAllResponseHeaders(); // Retorna todos os cabeçalhos de resposta como uma string
DOMString? getResponseHeader(DOMString header); // Retorna a string contendo o texto do cabeçalho especificado
void open(DOMString method, DOMString url, optional boolean async, optional DOMString? user, optional DOMString? password); // Inicializa um pedido.
void overrideMimeType(DOMString mime); // Substitui o tipo de MIME retornado pelo servidor.
void send(); // Envia a solicitação
void send(ArrayBuffer data);
void send(Blob data);
void send(Document data);
void send(DOMString? data);
void send(FormData data);
void setRequestHeader(DOMString header, DOMString value); // Define o valor de uma solicitação HTTP header.
```

## Propriedades

```javascript
onreadystatechange // Função de objeto que é chamado sempre que o atributo readyState sofre alteração. A função de callback é chamada a partir da thread existente na interface de usuário. 
readyState // Retorna o cabeçalho da requisição.
response // ArrayBuffer, Document, Blob, DOMString
responseText // DOMStirng A resposta à request, em formato texto, retorna null se a solicitação não teve êxito ou que ainda não foi enviada.
responseType // XMLHttpRequestResponseType, Quando response é acessado durante um evento "progress", este contém uma string com os dados. Caso contrário, retorna null .
status // O status de resposta da requisição. Este é o retorno do codigo da requisição HTTP (por exemplo, status é 200 qual a solicitação for bem-sucedida).
statusText // DOMString - A cadeia de resposta retornado pelo servidor HTTP. Ao contrário do status , o que inclui todo o texto da mensagem de resposta (" 200 OK ", por exemplo).
timeout // unsigned long
upload // XMLHttpRequestUpload
withCredentials // boolean
```

# Fetch API Conceitos Básicos

Fetch é um conceito moderno equivalente a `XMLHttpRequest`. Oferece muitas das mesmas funcionalidades que o `XMLHttpRequest`, mas é projetado para ser mais extensível e eficiente.

O Fetch leva a natureza assíncrona. A API é completamente baseada em Promise.

[Documentação Fetch API](https://fetch.spec.whatwg.org/)

#### Exemplo

```javascript
fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(result => console.log(result))
```