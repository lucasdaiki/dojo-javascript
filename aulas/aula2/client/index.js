const result =  document.querySelector('.result');

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
            result.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
        }
    }

    xhr.send();
}

