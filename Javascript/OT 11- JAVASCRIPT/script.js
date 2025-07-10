/* 1. Criando um Convite: Use a concatenação de strings para criar um convite. Inclua o nome do destinatário, o tipo de evento e a data, usando
variáveis.*/

let nome = "Júlia";
let evento = "festa de aniversário";
let dataEvento = "19 de setembro de 2025.";
let convite = "Olá " + nome + "  você está convidado(a) para minha " + evento + " no dia "+ dataEvento + "\n";
console.log(convite);

/* 2. Diário de Bordo: Escreva um pequeno diário de bordo usando template literals, incluindo data, local e uma descrição do que aconteceu no dia.*/

let data = "09 de julho de 2025";
let local = "Joinville";
let descricao = `Hoje ${data}, aqui na cidade de ${local} foi de muito trabalho.\n`;
console.log(descricao);

/* 3. Redator de Notícias: Crie uma string que represente uma notícia, utilizando o método replace() para substituir um fato errado por um correto.*/

let noticia = "Flamengo goleia time do Vasco no Maracanã por 5x0.\n";
console.log(noticia);
let novaNoticia = noticia.replace("5x0","6x0");
console.log(novaNoticia);

/* 4. Caixa de Comentários: Use o método trim() para limpar os comentários dos usuários antes de publicá-los em um blog ou fórum.*/

let comentario = "   Adorei o artigo! Muito informativo.     ";  
let comentarioLimpo = comentario.trim();
console.log ("Antes de publicar: '"+ comentario + "'");
console.log ("Publicado: '" + comentarioLimpo + "'\n");

/* 5. Carta para um Amigo: Utilize \\n para formatar uma carta para um
amigo, com saudação, corpo da mensagem e despedida, cada um em uma nova linha.*/

let carta = "Querida Eloisa,\n\n" + "Como você está? Faz tempo que não nos falamos!\n" + "Estou escrevendo para saber se você está livre no próximo sábado para tomarmos um café.\n\n" + "Beijos,\n" + "Patrick\n";
console.log(carta);

/* 6. Citações Famosas: Crie uma string que inclua uma citação famosa de
uma pessoa, utilizando caracteres de escape para incluir aspas na citação.*/

let citação = " \"A vida é o que acontece enquanto você está ocupado fazendo outros planos\""+ " (John Lennon)";
console.log(citação);




