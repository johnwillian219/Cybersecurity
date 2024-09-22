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

// Seleciona o botão e o menu
const fundamentalSkillsBtn = document.getElementById('fundamental-it-skills-btn');
const fundamentalSkillsMenu = document.getElementById('fundamental-it-skills-menu');

const OperatingSystemsBtn = document.getElementById('operating-systems-btn');
const OperatingSystemsMenu = document.getElementById('operating-systems-menu');

const computerNetworksBtn = document.getElementById('computer-networks-btn');
const computerNetworksMenu = document.getElementById('computer-networks-menu');

const VirtualizationBtn = document.getElementById('Virtualização-btn');
const VirtualizationMenu = document.getElementById('Virtualization-menu');

const SecurityKnowledgeBtn = document.getElementById('security-knowledge-btn');
const SecurityKnowledgeMenu = document.getElementById('security-knowledge-menu');

const CloudSkillsBtn = document.getElementById('cloud-skills-btn');
const CloudSkillsMenu = document.getElementById('cloud-skills-menu');


const ProgrammingSkillsBtn = document.getElementById('programming-skills-btn');
const ProgrammingSkillsMenu = document.getElementById('programming-skills-menu');

const DistrosToolsBtn = document.getElementById('distros-tools-btn');
const DistrosToolsMenu = document.getElementById('distros-tools-menu');

const WebBtn = document.getElementById('web-btn');
const WebMenu = document.getElementById('web-menu');

const OthersBtn = document.getElementById('others-btn');
const OthersMenu = document.getElementById('others-menu');

const siteContainer = document.querySelector('.site-container'); // Seleciona o container principal do site

// Adiciona um evento de clique ao botão
fundamentalSkillsBtn.addEventListener('click', function() {
    fundamentalSkillsMenu.classList.toggle('show');
    fundamentalSkillsBtn.classList.toggle('active');
});

OperatingSystemsBtn.addEventListener('click', function() {
    OperatingSystemsMenu.classList.toggle('show');
    siteContainer.classList.toggle('expanded');
    OperatingSystemsBtn.classList.toggle('active');
});

computerNetworksBtn.addEventListener('click', function() {
    computerNetworksMenu.classList.toggle('show');
    computerNetworksBtn.classList.toggle('active');
});

VirtualizationBtn.addEventListener('click', function() {
    VirtualizationMenu.classList.toggle('show');
    siteContainer.classList.toggle('expanded');
    VirtualizationBtn.classList.toggle('active');
});

SecurityKnowledgeBtn.addEventListener('click', function() {
    SecurityKnowledgeMenu.classList.toggle('show');
    SecurityKnowledgeBtn.classList.toggle('active');
});

CloudSkillsBtn.addEventListener('click', function() {
    CloudSkillsMenu.classList.toggle('show');
    siteContainer.classList.toggle('expanded');
    CloudSkillsBtn.classList.toggle('active');
});

ProgrammingSkillsBtn.addEventListener('click', function() {
    ProgrammingSkillsMenu.classList.toggle('show');
    ProgrammingSkillsBtn.classList.toggle('active');
});

DistrosToolsBtn.addEventListener('click', function() {
    DistrosToolsMenu.classList.toggle('show');
    siteContainer.classList.toggle('expanded');
    DistrosToolsBtn.classList.toggle('active');
});

WebBtn.addEventListener('click', function() {
    WebMenu.classList.toggle('show');
    WebBtn.classList.toggle('active');
});

OthersBtn.addEventListener('click', function() {
    OthersMenu.classList.toggle('show'); 
    siteContainer.classList.toggle('expanded');
    OthersBtn.classList.toggle('active');
});


// Fechar o menu se clicar fora dele
window.addEventListener('click', function(event) {
    if (!fundamentalSkillsBtn.contains(event.target) && !fundamentalSkillsMenu.contains(event.target)) {
        fundamentalSkillsMenu.classList.remove('show');
        fundamentalSkillsBtn.classList.remove('active');

    }

    if (!OperatingSystemsBtn.contains(event.target) && !OperatingSystemsMenu.contains(event.target)) {
        OperatingSystemsMenu.classList.remove('show');
        OperatingSystemsBtn.classList.remove('active');
        siteContainer.classList.remove('expanded');
    }

     if (!computerNetworksBtn.contains(event.target) && !computerNetworksMenu.contains(event.target)) {
        computerNetworksMenu.classList.remove('show');
        computerNetworksBtn.classList.remove('active');

    }
     if (!VirtualizationBtn.contains(event.target) && !VirtualizationMenu.contains(event.target)) {
        VirtualizationMenu.classList.remove('show');
        VirtualizationBtn.classList.remove('active');
        siteContainer.classList.remove('expanded');    
    }

    if (!SecurityKnowledgeBtn.contains(event.target) && !SecurityKnowledgeMenu.contains(event.target)) {
        SecurityKnowledgeMenu.classList.remove('show');
        SecurityKnowledgeBtn.classList.remove('active');

    }

     if (!CloudSkillsBtn.contains(event.target) && !CloudSkillsMenu.contains(event.target)) {
        CloudSkillsMenu.classList.remove('show');
        CloudSkillsBtn.classList.remove('active');
        siteContainer.classList.remove('expanded');
    }

      if (!ProgrammingSkillsBtn.contains(event.target) && !ProgrammingSkillsMenu.contains(event.target)) {
        ProgrammingSkillsMenu.classList.remove('show');
        ProgrammingSkillsBtn.classList.remove('active');

    }

    
      if (!DistrosToolsBtn.contains(event.target) && !DistrosToolsMenu.contains(event.target)) {
        DistrosToolsMenu.classList.remove('show');
        DistrosToolsBtn.classList.remove('active');
        siteContainer.classList.remove('expanded');

    }

    if (!WebBtn.contains(event.target) && !WebMenu.contains(event.target)) {
        WebMenu.classList.remove('show');
        WebBtn.classList.remove('active');

    }

    if (!OthersBtn.contains(event.target) && !OthersMenu.contains(event.target)) {
        OthersMenu.classList.remove('show');
        OthersBtn.classList.remove('active');
        siteContainer.classList.remove('expanded');


    }






});


//seção 1-------------------------------
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


// seção 2 Seleciona todos os itens de notícias-----------------------------------//
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
    newsInterval = setInterval(showNextNews, 10000); // Muda a cada 20 segundos
}

// Função para parar a rotação automática
function stopNewsRotation() {
    clearInterval(newsInterval);
}

// Inicia a rotação automática assim que a página carrega
startNewsRotation();

