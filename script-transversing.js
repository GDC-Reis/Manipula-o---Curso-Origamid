// Transversign
// Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // Elemento Pai
lista.parentElement.parentElement // Pai do elemento Pai
lista.previousElementSibling; // Elemento acima
lista.nextElementSibling; // Elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // Acessa o primeiro elemento filho da lista 
lista.children[--lista.children.length]; // Acessa o ultimo elemento filho da lista

lista.querySelectorAll('li'); // Todos as LI´s
lista.querySelector('li:last-child'); // Último filho