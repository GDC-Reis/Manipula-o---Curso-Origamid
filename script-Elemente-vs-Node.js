// Element vs NODE 
// Element´s representam um elemento HTML, ou seja, uma tag.
// NODE representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

const lista = document.querySelector('.animais-lista');

lista.previousElementSibling; // Elemeto acima
lista.previousSibling; // NODE acima

lista.firstChild; // Primeiro NODE Child
lista.childNodes; // Todos os NODE Child

/*
    Geralmente estamos atrás de um elemento e que não de qualquer NODE em si. 
*/