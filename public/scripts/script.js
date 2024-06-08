const form = document.querySelector("#form-publicar");

if (form) {
  const formAutor = document.querySelector("#form-autor");
  const formTitulo = document.querySelector("#form-titulo");
  const formTipoArtigo = document.querySelector("#form-artigo");
  const formTipoPergunta = document.querySelector("#form-pergunta");
  let formTipo = "";
  const formImagem = document.querySelector("#form-imagem");
  const formTexto = document.querySelector("#form-texto");

  const publicar = async function () {
    let url = "http://localhost:3000/publicar";

    if (formTipoArtigo.checked) {
      formTipo = "Artigo";
    } else {
      formTipo = "Pergunta";
    }

    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        autor: formAutor.value,
        titulo: formTitulo.value,
        tipo: formTipo,
        imagem: formImagem.value || "none",
        texto: formTexto.value,
      }),
    });

    const response = request.json();
    console.log(response);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    publicar().then(() => {
      window.location.assign("/");
    });
  });
}

let botoesDelete = document.querySelectorAll(".post__button-delete");

const deletar = async (idBotao) => {
  let url = `http://localhost:3000/deletar/${idBotao}`;

  const response = await fetch(url, { method: "DELETE" }).then(() => {
    window.location.assign("/");
  });
};

botoesDelete.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(botao.value);
    if (window.confirm(`Deseja mesmo excluir essa postagem?`)) {
      deletar(botao.value);
    }
  });
});

let botoesEdit = document.querySelectorAll(".post__button-edit");
botoesEdit.forEach((botao) => {
  botao.addEventListener("click", () => {
    window.location.assign(`/editar/${botao.value}`);
  });
});

const formEditar = document.querySelector("#form-editar");
if (formEditar) {
    const hiddenId = document.querySelector("#hidden-id")
  const formAutor = document.querySelector("#form-autor");
  const formTitulo = document.querySelector("#form-titulo");
  const formTipoArtigo = document.querySelector("#form-artigo");
  const formTipoPergunta = document.querySelector("#form-pergunta");
  let formTipo = "";
  const formImagem = document.querySelector("#form-imagem");
  const formTexto = document.querySelector("#form-texto");

  const update = async function () {
    let url = "http://localhost:3000/publicar";

    if (formTipoArtigo.checked) {
      formTipo = "Artigo";
    } else {
      formTipo = "Pergunta";
    }

    const request = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: hiddenId.value,
        autor: formAutor.value,
        titulo: formTitulo.value,
        tipo: formTipo,
        imagem: formImagem.value || "none",
        texto: formTexto.value,
      }),
    });

    const response = await request.json();
    console.log(response);
  };

editSubmitButton = document.querySelector("#editar-submit");
editSubmitButton.addEventListener("submit", (event)=>{
event.preventDefault();
update().then(()=>{
    window.location.assign("/")
})
})

}
