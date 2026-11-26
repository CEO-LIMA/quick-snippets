export const snippets = [
    {
        id: 1,
        titulo: "Commit Atômico (Conventional Commits)",
        tag: "Git",
        codigo: 'git commit -m "refactor(escopo): descricao curta e direta"',
        favorito: false
    },

    {
        id: 2,
        titulo: "Criar Branch de Feature/Refactor",
        tag: "Git",
        codigo: "git switch -c refactor/nome-da-tarefa",
        favorito: true
    },
    
    {
        id: 3,
        titulo: "Import ES Module no Navegador",
        tag: "JavaScript",
        codigo: 'import { funcao } from "./arquivo.js";',
        favorito: false
    },
    {
        id: 4,
        titulo: "Event Delegation com Closest",
        tag: "DOM",
        codigo: 'const item = e.target.closest("[data-id]");\nif (!item) return;',
        favorito: true
    },
    {
        id: 5,
        titulo: "Atualizar Estado Imutável (Filter)",
        tag: "JavaScript",
        codigo: "lista = lista.filter((item) => item.id !== id);",
        favorito: false
    },
    {
        id: 6,
        titulo: "Prompt: Revisão Socrática (Sem Código Pronto)",
        tag: "IA Prompt",
        codigo: "Analise minha lógica e aponte apenas os bugs de fluxo sem escrever o código final para mim.",
        favorito: true
    }

];