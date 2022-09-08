const data = [
  
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },

      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "Define o significado e a estrutura do conteúdo da web",
        options: ["CSS", "Sass", "HTML", "Node"],
        answer: "HTML"

      },
      {
        question:"Qual tag é utilizada para desenhar gráficos utilizando scripts",
        options: ["address", "canvas", "article", "footer"],
        answer: "canvas"

      }
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual propriedade altera a cor da fonte de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: " Controla o alinhamento de todos os itens no eixo principal:",
        options: ["align-items", "align-self", "justify-content", "aling-content"],
        answer: "justify-content",
      },
      {
        question: " Qual o significado  da sigla Cascading Style Sheet:",
        options: ["HTML", "JS", "CSS", "SOS"],
        answer: "CSS"

      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question: "Qual metodo utilizamos para adicionar um elemento ao início de um array",
        options:["push", "unshift", "splice", "concat"],
        answer: "unshift"


      },

    ],
    
  },
  
];

export default data;