function filtrar(tipo) {

    let produtos = document.querySelectorAll(".produto");

    produtos.forEach(function(produto) {

        if (tipo === "todos") {
            produto.style.display = "block";
        }

        else if (produto.classList.contains(tipo)) {
            produto.style.display = "block";
        }

        else {
            produto.style.display = "none";
        }

    });

}