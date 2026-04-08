// Script principal para funcionalidades interativas do site Team Showcase
// Inclui dropdown menu, toggle de tema escuro/claro, busca de membros e configuração de imagens

// Seleção dos elementos do dropdown menu (apenas presente na página principal)
const dropdown = document.querySelector('.dropdown');
const dropdownLink = dropdown?.querySelector('a[aria-haspopup]');
const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
const menuItems = dropdownMenu ? dropdownMenu.querySelectorAll('a[role="menuitem"]') : [];

// Estado do menu dropdown
let isOpen = false;

// Função para alternar a visibilidade do menu dropdown
function toggleMenu() {
    if (!dropdownLink || !dropdownMenu) return;
    isOpen = !isOpen;
    dropdownLink.setAttribute('aria-expanded', isOpen);
    dropdownMenu.setAttribute('aria-hidden', !isOpen);
    if (isOpen) {
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.transform = 'translateY(4px)';
        if (menuItems[0]) menuItems[0].focus();
    } else {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateY(-8px)';
    }
}

// Event listeners para o dropdown (teclado e clique)
if (dropdownLink) {
    dropdownLink.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    dropdownLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });
}

// Navegação por teclado nos itens do menu
menuItems.forEach((item, index) => {
    item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (index + 1) % menuItems.length;
            menuItems[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
            menuItems[prevIndex].focus();
        } else if (e.key === 'Escape') {
            toggleMenu();
            dropdownLink.focus();
        }
    });
});

// Fecha o menu ao clicar fora ou perder foco
document.addEventListener('click', function(e) {
    if (dropdown && !dropdown.contains(e.target)) {
        if (isOpen) toggleMenu();
    }
});

// Gerenciamento da classe 'active' nos links do dropdown
const links = dropdownMenu ? dropdownMenu.querySelectorAll('a') : document.querySelectorAll('.dropdown-menu a');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Função para filtrar membros da equipe baseado na busca
function filterTeamMembers(query) {
    const cards = document.querySelectorAll('.team-card');
    const normalizedQuery = query.trim().toLowerCase();

    cards.forEach(card => {
        const name = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent?.toLowerCase() || '';
        const match = name.includes(normalizedQuery) || description.includes(normalizedQuery);
        const parentLink = card.closest('.businessCard');
        if (parentLink) {
            parentLink.style.display = match ? 'block' : 'none';
        }
    });
}

// Event listener principal executado após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Configuração das imagens dos perfis (define src dinamicamente)
    const imgLeonardo = document.querySelector('#leonardo img');
    const imgJulia = document.querySelector('#julia img');
    const imgKelly = document.querySelector('#kelly img');

    if (imgLeonardo) imgLeonardo.src = 'imagens/leonardo.jpeg';
    if (imgJulia) imgJulia.src = 'imagens/julia.jpeg';
    if (imgKelly) imgKelly.src = 'imagens/kelly.jpeg';

    // Event listener para o campo de busca de membros
    const searchInput = document.querySelector('#member-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterTeamMembers(this.value);
        });
    }
});