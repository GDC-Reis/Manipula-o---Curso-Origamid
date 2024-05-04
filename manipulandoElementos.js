const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // Move "lista" para o final de "contato"
contato.insertBefore(lista, titulo); // Insere "lista" antes de "titulo"
contato.removeChild(titulo); // Remove "titulo" de "contato"
contato.replaceChild(lista, titulo); // Substitui "titulo" por "lista"


// Novos Elementos
// Podemos criar novos elementos com o método createElement()

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1'); // Cria novo Elemento
novoH1.innerText = 'Novo Titulo'; // Adiciona o Texto 'Novo Titulo' ao novo elemento criado
novoH1.classList.add('titulo'); // Adiciona a classe 'titulo' ao novo elemento criado

animais.appendChild(novoH1); // Move "novoH1" para o final de "animais"


// Clonar Elementos 
// Todo elemento selecionado é único.
// Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método "cloneNode()".

const titulo1 = document.querySelector('h1'); // Declara o primeiro Titulo
const titulo2 = document.querySelector('h1'); // Declara o segundo Titulo
const novoTitulo = titulo1; // Declara o "novoTitulo" recebendo o valor de "titulo1"

const cloneTitulo = titulo1.cloneNode(true);    // Clona o "titulo1" para a constante "novoTitulo"
const contato1 = document.querySelector('.contato'); // Seleciona o contato
contato.appendChild(cloneTitulo); // Move "cloneTitulo" para o final de "contato" 

/*
    TRUE sinaliza para incluir os filhos
*/