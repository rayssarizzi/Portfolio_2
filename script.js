let listaProjetos = []

async function carregarProjetos() {
    try {
        let resposta = await fetch("http://localhost:3000/projetos")
        let dados = await resposta.json()

        listaProjetos = dados
        mostrarProjetos(listaProjetos)
    } catch (erro) {
        console.error("Erro ao buscar projetos:", erro)
    }
}

// SAUDAÇÃO (IF / ELSE)
function mostrarSaudacao() {
    let hora = new Date().getHours()
    let mensagem = ""

    if (hora < 12) {
        mensagem = "Bom dia!"
    } else if (hora < 18) {
        mensagem = "Boa tarde!"
    } else {
        mensagem = "Boa noite!"
    }

    let elemento = document.getElementById("saudacao")
    if (elemento) {
        elemento.innerText = mensagem
    }
}

let cursos = [
    {
        nome: "Scrum",
        carga: "20h",
        ano: "2024",
        arquivo: "./img/certificado scrum.png"
    },
    {
        nome: "Escola de Inovadores",
        carga: "40h",
        ano: "2024",
        arquivo: "./img/certificado escola de inovadores.png"
    }
]

let habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "MySQL"
]

// PROJETOS
function mostrarProjetos(lista) {
    let container = document.getElementById("lista-projetos")
    if (!container) return

    container.innerHTML = ""

    for (let i = 0; i < lista.length; i++) {
        let p = lista[i]

        container.innerHTML += `
        <div class="bloco pequeno">
            ${p.imagem ? `<img src="${p.imagem}" alt="${p.nome}">` : ""}
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            ${p.link ? `<a class="btn" href="${p.link}" target="_blank">Saiba mais</a>` : ""}
        </div>
        `
    }
}

// CURSOS
function mostrarCursos() {
    let container = document.getElementById("lista-cursos")
    if (!container) return

    container.innerHTML = ""

    for (let i = 0; i < cursos.length; i++) {
        let c = cursos[i]

        container.innerHTML += `
        <div class="bloco pequeno">
            <p><strong>${c.nome}</strong></p>
            <p>${c.carga} - ${c.ano}</p>

            <a class="btn" href="${c.arquivo}" target="_blank">
                Ver certificado
            </a>
        </div>
        `
    }
}

// HABILIDADES
function mostrarHabilidades() {
    let container = document.getElementById("lista-habilidades")
    if (!container) return

    for (let i = 0; i < habilidades.length; i++) {
        container.innerHTML += `<p>${habilidades[i]}</p>`
    }
}

// FILTRO DE PROJETOS
function filtrarProjetos(categoria) {
    if (categoria === "TODOS") {
        mostrarProjetos(listaProjetos)
    } else {
        let filtrados = []

        for (let i = 0; i < listaProjetos.length; i++) {
            if (listaProjetos[i].categorias?.includes(categoria)) {
                filtrados.push(listaProjetos[i])
            }
        }

        mostrarProjetos(filtrados)
    }
}

async function criarProjeto() {
    let nome = document.getElementById("nomeProjeto").value
    let descricao = document.getElementById("descProjeto").value
    let imagem = document.getElementById("imgProjeto").value
    let link = document.getElementById("linkProjeto").value

    await fetch("http://localhost:3000/projetos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, descricao, imagem, link })
    })

    carregarProjetos()
}

mostrarSaudacao()
carregarProjetos()
mostrarCursos()
mostrarHabilidades()