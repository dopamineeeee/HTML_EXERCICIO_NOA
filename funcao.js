const botoes = document.querySelectorAll(".botaoproduto");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        alert("Você clicou no botão!");
    });
});


const elemento = {

email: document.querySelector("#email"),
senha: document.querySelector("#senha"),
form: document.querySelector("#form"),
button: document.querySelector("#button"),


};

const dadosDigitados = {

email:"",
senha:"",

};


elemento.form.addEventListener("submit", (event)=>{
    event.preventDefault()
    // getDadosDigitados(elemento.email.value, elemento.senha.value);
    console.log((elemento.email.value, elemento.senha.value))
});

function getDadosDigitados(email,senha)
{

    dadosDigitados.email = email;
    dadosDigitados.senha = senha;

}