import { snippets } from "./data.js";
import { renderizarSnippets } from "./render.js";

const container = document.getElementById("snippets-container");

container.addEventListener("click", (e) => {

})

const lidarComCliqueContainer = (e) => {
    const botao = e.target.closest("[data-action]");
    if(!botao) return;

    const card = botao.closest("[data-id]");
    const id = Number(card.dataset.id);
    const snippet = snippets.find((item) => item.id === id);

    if(botao.dataset.action === "copiar") {
        navigator.clipboard.writeText(snippet.codigo);
        botao.textContent = "Copiado!";
        setTimeout(() => {
            botao.textContent = "Copiar"
        }, 1500);
    }
    if(botao.dataset.action === "favoritar") {
            snippet.favorito = !snippet.favorito;
            renderizarSnippets();
    };
};

container.addEventListener("click", lidarComCliqueContainer);
renderizarSnippets();
