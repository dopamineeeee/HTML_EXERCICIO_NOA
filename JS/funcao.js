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
    // getDadosDigitados(elemento.email.value, elemento.senha.value);
    // console.log(elemento.email.value)
    // console.log(elemento.senha.value)
    if(!getDadosDigitados(elemento.email.value, elemento.senha.value))
    {
        event.preventDefault()
    }
});


 function getDadosDigitados(email, senha) {

    dadosDigitados.email = email;
    dadosDigitados.senha = senha;

    if ( email != "senai@hotmail.com" || senha != "1234")
    {
        alert("Email ou senha errado.");
        return false
    }else {
        alert("Login realizado!");
        return true
    }
}



    
