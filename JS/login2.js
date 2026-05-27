

const btnConsulta = document.getElementById("btnConsulta");

const inicio = document.getElementById("inicio");

const consulta = document.getElementById("consulta");

btnConsulta.addEventListener("click", () => {

    inicio.style.display = "none";

    consulta.style.display = "flex";

});

const btnvoltar = document.getElementById("btnvoltar");

btnvoltar.addEventListener("click", () => {

    consulta.style.display = "none";

    inicio.style.display = "flex";

});


// ===============================
// BUSCAR PRODUTO
// ===============================

const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click", buscarProduto);

async function buscarProduto() {

    const valor = document
        .getElementById("campoProduto")
        .value
        .toLowerCase();

    const resposta = await fetch("./JSON/produtos.json");

    const produtos = await resposta.json();

    const produtoEncontrado = produtos.find(produto =>
        produto.nome.toLowerCase() === valor
    );

    const resultado = document.getElementById("resultado");


    if(produtoEncontrado) {

        resultado.innerHTML = `

            <h2>${produtoEncontrado.nome}</h2>

            <p>Preço: R$ ${produtoEncontrado.preco}</p>

            
        `;

    } else {

        resultado.innerHTML = `

            <p>Produto não encontrado</p>

        `;
    }
}