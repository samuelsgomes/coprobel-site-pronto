
/* =========================================
   FILTRO DE PRODUTOS
========================================= */

function filtrar(tipo, botao) {

    const produtos = document.querySelectorAll(".produto");

    const botoes = document.querySelectorAll(".filtro");


    botoes.forEach(function (item) {

        item.classList.remove("ativo");

    });


    if (botao) {

        botao.classList.add("ativo");

    }


    produtos.forEach(function (produto) {

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



/* =========================================
   MENU MOBILE
========================================= */

const menuMobile =
    document.getElementById("menuMobile");

const menu =
    document.querySelector(".menu");


if (menuMobile && menu) {

    menuMobile.addEventListener("click", function () {

        menu.classList.toggle("aberto");

    });


    const links =
        menu.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("aberto");

        });

    });

}



/* =========================================
   HEADER AO ROLAR
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (!header) return;


    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});



/* =========================================
   FORMULÁRIO
========================================= */

const formulario =
    document.getElementById("formContato");


if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;

        const mensagem =
            document.getElementById("mensagem").value;

        const aviso =
            document.getElementById("mensagem-form");


        if (!nome || !mensagem) {

            aviso.textContent =
                "Preencha todos os campos.";

            return;

        }


        aviso.textContent =
            "Mensagem preenchida! Agora é só conectar este formulário ao seu sistema de atendimento.";

        formulario.reset();

    });

}



/* =========================================
   ANIMAÇÃO AO APARECER
========================================= */

const elementos =
    document.querySelectorAll(
        ".produto, .valor, .categoria"
    );


const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(25px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});

