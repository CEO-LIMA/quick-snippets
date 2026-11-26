import { snippets } from "./data.js";

const container = document.getElementById("snippets-container")


export const renderizarSnippets = () => {
    container.innerHTML = "";

    snippets.forEach((snippet) => {
        const card =document.createElement("article");
        card.classList.add("snippets-card");
        card.dataset.id = snippet.id;

        card.innerHTML = `
            <div class="card-header">
                <h3>${snippet.titulo}</h3>
                <span class="tag">${snippet.tag}</span>
            </div>
            <pre><code>${snippet.codigo}</code></pre>
            <div class="acoes">
                <button type="button" data-action="copiar">Copiar</button>
                <button type="button" data-action="favoritar">
                    ${snippet.favorito ? "★" : "☆"}
                </button>
            </div>
        `;
        container.appendChild(card);
    });
};