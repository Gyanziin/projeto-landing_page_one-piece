const botoes = document.querySelectorAll('.botao') //busca varios elementos do html atraves do seletor (classes, tags, etc).
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {    // ele executa uma funçao para cada item da lista ou objeto. 
    botao.addEventListener("click", () => {  // nao posso usar em varios elementos ou lista! somente em um
        desSelecionarBotao(); //remove a clase desse botao
        desSelecionarPersonagem();

        botao.classList.add("selecionado") //adiciona a classe selecionado ao botao que foi clicado
        personagens[indice].classList.add("selecionado");
        });
})




function desSelecionarPersonagem(indice) {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desSelecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado"); // recupera o botao com a classe selecionado
    botaoSelecionado.classList.remove("selecionado");
}

