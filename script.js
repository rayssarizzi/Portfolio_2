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

// DADOS (ARRAYS)
let projetos = [
    {
        nome: "Koitech",
        descricao: "Projeto para cliente real. Atuei no design e front-end.",
        tecnologia: "HTML, CSS, JS",
        imagem: "./img/koitech.jpg",
        link: "https://github.com/koitech-API",
        categorias: ["WEB", "API"]
    },
    {
        nome: "Primeiro Web",
        descricao: "Site sobre café, contando história e importância.",
        tecnologia: "HTML e CSS",
        imagem: "./img/primeiro web.png",
        link: "https://primeiro-web-one.vercel.app/",
        categorias: ["WEB"]
    }
]

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

// FUNÇÕES + FOR
// PROJETOS
function mostrarProjetos(lista = projetos) {
    let container = document.getElementById("lista-projetos")
    if (!container) return

    container.innerHTML = ""

    for (let i = 0; i < lista.length; i++) {
        let p = lista[i]

        container.innerHTML += `
        <div class="bloco pequeno">
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <p><strong>Tecnologias:</strong> ${p.tecnologia}</p>
            <a class="btn" href="${p.link}" target="_blank">Saiba mais</a>
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

// EXTRA (IF / ELSE)
// FILTRO DE PROJETOS
function filtrarProjetos(categoria) {
    if (categoria === "TODOS") {
        mostrarProjetos()
    } else {
        let filtrados = []

        for (let i = 0; i < projetos.length; i++) {
            if (projetos[i].categorias.includes(categoria)) {
                filtrados.push(projetos[i])
            }
        }

        mostrarProjetos(filtrados)
    }
}

// INICIALIZAÇÃO
mostrarSaudacao()
mostrarProjetos()
mostrarCursos()
mostrarHabilidades()