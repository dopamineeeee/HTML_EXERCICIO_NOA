const botoes = document.querySelectorAll(".botaoproduto");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        alert("Você clicou no botão!");
    });
});