function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let marca = "";
    let modelo = "";
    let tags = "";

    for (let dado of dados) {
        marca = dado.marca.toLowerCase()
        modelo = dado.modelo.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (marca.includes(campoPesquisa) || modelo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.modelo}</a>
                </h2>
                <p class="descricao-meta">${dado.marca}</p>
                <a href= target="_blank">${dado.caracteristica}</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
        

    section.innerHTML = resultados;
}

