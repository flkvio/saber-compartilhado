const dados = [
  {
    "titulo": "Primeiro Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem1.jpg",
    "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "titulo": "Segundo Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem2.jpg",
    "texto": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "titulo": "Terceiro Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem3.jpg",
    "texto": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "titulo": "Quarto Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem4.jpg",
    "texto": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "titulo": "Quinto Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem5.jpg",
    "texto": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "titulo": "Sexto Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem6.jpg",
    "texto": "Fugiat quo voluptas nulla pariatur?"
  },
  {
    "titulo": "Sétimo Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem7.jpg",
    "texto": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?"
  },
  {
    "titulo": "Oitavo Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem8.jpg",
    "texto": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  },
  {
    "titulo": "Nono Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem9.jpg",
    "texto": "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
  },
  {
    "titulo": "Décimo Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem10.jpg",
    "texto": "Et harum quidem rerum facilis est et expedita distinctio."
  },
  {
    "titulo": "Décimo Primeiro Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem11.jpg",
    "texto": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
  },
  {
    "titulo": "Décimo Segundo Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem12.jpg",
    "texto": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
  },
  {
    "titulo": "Décimo Terceiro Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem13.jpg",
    "texto": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
  {
    "titulo": "Décimo Quarto Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem14.jpg",
    "texto": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
  },
  {
    "titulo": "Décimo Quinto Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem15.jpg",
    "texto": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
  },
  {
    "titulo": "Décimo Sexto Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem16.jpg",
    "texto": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    "titulo": "Décimo Sétimo Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem17.jpg",
    "texto": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  },
  {
    "titulo": "Décimo Oitavo Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem18.jpg",
    "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "titulo": "Décimo Nono Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem19.jpg",
    "texto": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
  },
  {
    "titulo": "Vigésimo Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem20.jpg",
    "texto": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  // Os próximos dez itens
  {
    "titulo": "Vigésimo Primeiro Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem21.jpg",
    "texto": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "titulo": "Vigésimo Segundo Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem22.jpg",
    "texto": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
  },
  {
    "titulo": "Vigésimo Terceiro Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem23.jpg",
    "texto": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
  },
  {
    "titulo": "Vigésimo Quarto Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem24.jpg",
    "texto": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    "titulo": "Vigésimo Quinto Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem25.jpg",
    "texto": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  },
  {
    "titulo": "Vigésimo Sexto Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem26.jpg",
    "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "titulo": "Vigésimo Sétimo Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem27.jpg",
    "texto": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
  },
  {
    "titulo": "Vigésimo Oitavo Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem28.jpg",
    "texto": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  {
    "titulo": "Vigésimo Nono Título",
    "tipo": "publicação",
    "imagem": "https://exemplo.com/imagem29.jpg",
    "texto": "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    "titulo": "Trigésimo Título",
    "tipo": "pergunta",
    "imagem": "https://exemplo.com/imagem30.jpg",
    "texto": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  }
];

export default dados;
