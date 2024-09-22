// Função para mostrar a seção selecionada e ocultar as outras
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Esconde todas as seções
    });
    document.getElementById(sectionId).style.display = 'block'; // Mostra a seção selecionada
}

// Mostra a seção Início por padrão
showSection('home');

// Função para alternar menus e atualizar o container do site
function toggleMenu(buttonId, menuId, expandContainer = false) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);

    // Verifica se o botão e o menu existem
    if (button && menu) {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique se propague para o evento de fechamento global

            // Fecha outros menus antes de abrir o atual
            closeAllMenusExcept(menuId);

            // Alterna o menu e o estado do botão ativo
            menu.classList.toggle('show');
            button.classList.toggle('active');

            // Expande/recolhe o container se necessário
            if (expandContainer) {
                siteContainer.classList.toggle('expanded');
            }
        });
    }
}

// Função para fechar todos os menus, exceto o menu atual
function closeAllMenusExcept(currentMenuId) {
    const allMenus = document.querySelectorAll('.dropdown-menu');
    const allButtons = document.querySelectorAll('.topic-button');

    allMenus.forEach(menu => {
        if (menu.id !== currentMenuId) {
            menu.classList.remove('show');
        }
    });

    allButtons.forEach(button => {
        if (!document.getElementById(currentMenuId)?.classList.contains('show')) {
            button.classList.remove('active');
        }
    });

    // Recolhe o site container se nenhum menu estiver aberto
    const anyMenuOpen = document.querySelectorAll('.dropdown-menu.show').length > 0;
    if (!anyMenuOpen) {
        siteContainer.classList.remove('expanded');
    }
}

// Inicializa todos os botões e menus
const siteContainer = document.querySelector('.site-container'); // Seleciona o container principal do site

toggleMenu('fundamental-it-skills-btn', 'fundamental-it-skills-menu');
toggleMenu('operating-systems-btn', 'operating-systems-menu', true);
toggleMenu('computer-networks-btn', 'computer-networks-menu');
toggleMenu('Virtualização-btn', 'Virtualization-menu', true);
toggleMenu('security-knowledge-btn', 'security-knowledge-menu');
toggleMenu('cloud-skills-btn', 'cloud-skills-menu', true);
toggleMenu('programming-skills-btn', 'programming-skills-menu');
toggleMenu('distros-tools-btn', 'distros-tools-menu', true);
toggleMenu('web-btn', 'web-menu');
toggleMenu('others-btn', 'others-menu', true);

// Fechar o menu se clicar fora dele
window.addEventListener('click', function() {
    closeAllMenusExcept(null);
});

// Função para atualizar o progresso
function updateProgress() {
    const totalCheckboxes = 255; // Total de checkboxes em todos os módulos
    let checkedCount = 0;

    for (let i = 0; i < totalCheckboxes; i++) {
        const isChecked = localStorage.getItem(`checkbox_${i}`) === 'true';
        if (isChecked) {
            checkedCount++;
        }
    }

    const progressPercentage = (checkedCount / totalCheckboxes) * 100;
    document.querySelector('.progress-text').innerText = `${progressPercentage.toFixed(2)}%`;

    // Atualiza o título com base no progresso
    const sectionTitle = document.querySelector('.section-title');
    if (progressPercentage === 0) {
        sectionTitle.innerText = "Let's Start";
    } else if (progressPercentage > 0 && progressPercentage < 100) {
        sectionTitle.innerText = "Keep Going";
    } else if (progressPercentage === 100) {
        sectionTitle.innerText = "Congratulations!";
    }
}

// Atualiza o progresso ao carregar a página principal
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});

// Rotação de notícias
const newsItems = document.querySelectorAll('.news-item');
let currentIndex = 0;
const totalNewsItems = newsItems.length;
let newsInterval;

// Função para exibir a notícia atual
function showNewsItem(index) {
    newsItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

// Função para mostrar a próxima notícia
function showNextNews() {
    currentIndex = (currentIndex + 1) % totalNewsItems;
    showNewsItem(currentIndex);
}

// Função para iniciar a rotação automática
function startNewsRotation() {
    newsInterval = setInterval(showNextNews, 10000); // Muda a cada 10 segundos
}

// Função para parar a rotação automática
function stopNewsRotation() {
    clearInterval(newsInterval);
}

// Inicia a rotação automática assim que a página carrega
startNewsRotation();
