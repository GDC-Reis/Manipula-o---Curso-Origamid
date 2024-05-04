// outerHTML, innerHTML e innerText
// Propriedades que retornam uma string contendo o html ou texto.
// É possivel atribuir um novo valor para as mesmas.
// element.innerText = 'Novo Texto';

const h1 = document.querySelector('h1');

h1.outerHTML; // Todo o HTML do elemento
h1.innerHTML; // HTML interno
h1.innerText; // Texto, sem tags

h1.innerText = '<p>Texto</p>'; // A tag vai com o texto 
h1.innerHTML = '<p>Novo Titulo</p>'; // A tag é renderizada (É colocada dentro do conteudo, Ex: <h1 class="titulo"><p>Novo Título</p></h1>)