const botaoAlterarTema = document.getElementById("alterar-tema"); 

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

const footer = document.querySelector("footer");

const main = document.querySelector("main");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {

        body.classList.remove("modo-escuro");
        footer.classList.remove("modo-escuro");
        main.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/interface/sun.png");
    } else {

        body.classList.add("modo-escuro");
        footer.classList.add("modo-escuro");
        main.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/interface/moon.png");
    }

});
