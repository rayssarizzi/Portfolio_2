// SAUDAÇÃO

function mostrarSaudacao() {

    let hora = new Date().getHours()
    let mensagem = ""

    if (hora < 12) {
        mensagem = "Bom dia!"
    }
    else if (hora < 18) {
        mensagem = "Boa tarde!"
    }
    else {
        mensagem = "Boa noite!"
    }
    document.getElementById("saudacao").innerText = mensagem
}

mostrarSaudacao()

//RENDERIZAR PROJETO
let projetos = [
    {
        nome: "Koitech",
        descricao: "Projeto criado pela equipe da faculdade para atender os requisitos de um cliente real. Atuei no design do site e no front-end.",
        imagem: "./img/koitech.jpg",
        link: "https://github.com/koitech-API"
    },
    {
        nome: "Primeiro Web",
        descricao: "Primeira experiência desenvolvendo um site web com tema voltado ao café e sua história.",
        imagem: "./img/primeiro web.png",
        link: "https://primeiro-web-one.vercel.app/"
    }
]
function mostrarProjetos() {

    let container = document.getElementById("lista-projetos")

    for (let i = 0; i < projetos.length; i++) {

        let projeto = projetos[i]

        container.innerHTML += `
<div class="bloco pequeno">

<img src="${projeto.imagem}" alt="${projeto.nome}">

<h3>${projeto.nome}</h3>

<p>${projeto.descricao}</p>

<a class="btn" href="${projeto.link}" target="_blank">
Saiba Mais
</a>

</div>
`
    }
}

mostrarProjetos