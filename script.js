// Função para mostrar a seção selecionada e ocultar as outras----------------------------------------------------//
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
showSection('home');

// Função para alternar menus e atualizar o container do site-----------------------------------------------------//
function toggleMenu(buttonId, menuId, expandContainer = false) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);

    if (button && menu) {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            closeAllMenusExcept(menuId);
            menu.classList.toggle('show');
            button.classList.toggle('active');
            if (expandContainer) {
                siteContainer.classList.toggle('expanded');
            }

        });
    }
}

// Função para fechar todos os menus, exceto o menu atual--------------------------------------------------------//
function closeAllMenusExcept(currentMenuId) {
    const allMenus = document.querySelectorAll('.dropdown-menu');
    const allButtons = document.querySelectorAll('.topic-button');

    allMenus.forEach(menu => {
        if (menu.id !== currentMenuId) {
            menu.classList.remove('show');
        }
    });

    allButtons.forEach(button => {
        if (!document.getElementById(currentMenuId).classList.contains('show')) {
            button.classList.remove('active');
        }
    });

    const anyMenuOpen = document.querySelectorAll('.dropdown-menu.show').length > 0;
    if (!anyMenuOpen) {
        siteContainer.classList.remove('expanded');
    }
}

// Inicializa todos os botões e menus----------------------------------------------------------------------------//
const siteContainer = document.querySelector('.site-container');

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

// Fechar o menu se clicar fora dele-----------------------------------------------------------------------------//
window.addEventListener('click', function () {
    closeAllMenusExcept(null);
});

// Função para atualizar o progresso geral e as barras de progresso de cada tópico------------------------------//
function updateProgress() {
    const totalCheckboxes = 255;
    let checkedCount = 0;
    for (let i = 0; i < totalCheckboxes; i++) {
        const isChecked = localStorage.getItem(`checkbox_${i}`) === 'true';
        if (isChecked) {
            checkedCount++;
        }
    }

    const progressPercentage = (checkedCount / totalCheckboxes) * 100;
    // Atualiza o texto de progresso na Home
    const homeProgressText = document.querySelector('.home-right .progress-text');
    if (homeProgressText) {
        homeProgressText.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza o texto de progresso na seção Progresso
    const progressSectionText = document.querySelector('#progress .progress-text');
    if (progressSectionText) {
        progressSectionText.innerText = `${progressPercentage.toFixed(2)}%`;
    }
    const sectionTitle = document.querySelector('.section-title');
    if (progressPercentage === 0) {
        sectionTitle.innerText = "Let's Start";
    } else if (progressPercentage > 0 && progressPercentage < 100) {
        sectionTitle.innerText = "Keep Going";
    } else if (progressPercentage === 100) {
        sectionTitle.innerText = "Congratulations!";
    }
}

// Função de checkbox para atualizar o localStorage e recalcular o progresso-------------------------------------//
function updateCheckbox(checkbox) {
    const topic = checkbox.getAttribute('data-topic');
    const index = checkbox.getAttribute('data-index');
    localStorage.setItem(`checkbox_${topic}_${index}`, checkbox.checked);
    updateProgress();
}

// Função para abrir o menu de tópicos ao clicar no círculo de progresso----------------------------------------//
document.getElementById('progress-button').addEventListener('click', function () {
    const topicsMenu = document.getElementById('topics-menu');
    const progressContainer = document.getElementById('progress-container');

    topicsMenu.classList.toggle('open');

    if (topicsMenu.classList.contains('open')) {
        progressContainer.classList.add('hidden');
    } else {
        progressContainer.classList.remove('hidden');
    }
});

// Fechar o menu se clicar fora dele----------------------------------------------------------------------------//
window.addEventListener('click', function (event) {
    const topicsMenu = document.getElementById('topics-menu');
    const progressContainer = document.getElementById('progress-container');
    const progressButton = document.getElementById('progress-button');

    if (topicsMenu.classList.contains('open') && !topicsMenu.contains(event.target) && !progressButton.contains(event.target)) {
        topicsMenu.classList.remove('open');
        progressContainer.classList.remove('hidden');
    }
});

// Atualiza o progresso ao carregar a página principal---------------------------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});



//progressso inidividual--------------------------------------------------------------------------------------//
let othersCheckedCount = 0;
let webCheckedCount = 0;
let toolsCheckedCount = 0;
let programmingCheckedCount = 0;
let cloudCheckedCount = 0;
let securityCheckedCount = 0;
let virtualizationCheckedCount = 0;
let computerCheckedCount = 0;
let SOCheckedCount = 0;
let ITCheckedCount = 0;


function updateOthersProgress() {
    const totalCheckboxes = 8; // Total de checkboxes para Others
    const progressPercentage = (othersCheckedCount / totalCheckboxes) * 100;

    // Atualiza a barra de progresso na Home
    const othersProgressBarHome = document.querySelector('.home-right #others-progress .progress-bar');
    const othersProgressPercentageHome = document.querySelector('.home-right #others-progress .progress-percentage');

    if (othersProgressBarHome && othersProgressPercentageHome) {
        othersProgressBarHome.style.width = `${progressPercentage}%`;
        othersProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza a barra de progresso na seção Progresso
    const othersProgressBarSection = document.querySelector('#progress #others-progress .progress-bar');
    const othersProgressPercentageSection = document.querySelector('#progress #others-progress .progress-percentage');

    if (othersProgressBarSection && othersProgressPercentageSection) {
        othersProgressBarSection.style.width = `${progressPercentage}%`;
        othersProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateWebProgress() {
    const totalCheckboxes = 28; // Total de checkboxes para web
    const progressPercentage = (webCheckedCount / totalCheckboxes) * 100;

    // Atualiza a barra de progresso na Home
    const webProgressBarHome = document.querySelector('.home-right #web-progress .progress-bar');
    const webProgressPercentageHome = document.querySelector('.home-right #web-progress .progress-percentage');

    if (webProgressBarHome && webProgressPercentageHome) {
        webProgressBarHome.style.width = `${progressPercentage}%`;
        webProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza a barra de progresso na seção Progresso
    const webProgressBarSection = document.querySelector('#progress #web-progress .progress-bar');
    const webProgressPercentageSection = document.querySelector('#progress #web-progress .progress-percentage');

    if (webProgressBarSection && webProgressPercentageSection) {
        webProgressBarSection.style.width = `${progressPercentage}%`;
        webProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateToolsProgress() {
    const totalCheckboxes = 40; // Total de checkboxes para distros e tools
    const progressPercentage = (toolsCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const toolsProgressBarHome = document.querySelector('.home-right #tools-progress .progress-bar');
    const toolsProgressPercentageHome = document.querySelector('.home-right #tools-progress .progress-percentage');

    if (toolsProgressBarHome && toolsProgressPercentageHome) {
        toolsProgressBarHome.style.width = `${progressPercentage}%`;
        toolsProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const toolsProgressBarSection = document.querySelector('#progress #tools-progress .progress-bar');
    const toolsProgressPercentageSection = document.querySelector('#progress #tools-progress .progress-percentage');

    if (toolsProgressBarSection && toolsProgressPercentageSection) {
        toolsProgressBarSection.style.width = `${progressPercentage}%`;
        toolsProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateProgrammingProgress() {
    const totalCheckboxes = 28; // Total de checkboxes para programming
    const progressPercentage = (programmingCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const programmingProgressBarHome = document.querySelector('.home-right #programming-progress .progress-bar');
    const programmingProgressPercentageHome = document.querySelector('.home-right #programming-progress .progress-percentage');

    if (programmingProgressBarHome && programmingProgressPercentageHome) {
        programmingProgressBarHome.style.width = `${progressPercentage}%`;
        programmingProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const programmingProgressBarSection = document.querySelector('#progress #programming-progress .progress-bar');
    const programmingProgressPercentageSection = document.querySelector('#progress #programming-progress .progress-percentage');

    if (programmingProgressBarSection && programmingProgressPercentageSection) {
        programmingProgressBarSection.style.width = `${progressPercentage}%`;
        programmingProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateCloudProgress() {
    const totalCheckboxes = 20; // Total de checkboxes para cloud
    const progressPercentage = (cloudCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const cloudProgressBarHome = document.querySelector('.home-right #cloud-progress .progress-bar');
    const cloudProgressPercentageHome = document.querySelector('.home-right #cloud-progress .progress-percentage');

    if (cloudProgressBarHome && cloudProgressPercentageHome) {
        cloudProgressBarHome.style.width = `${progressPercentage}%`;
        cloudProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const cloudProgressBarSection = document.querySelector('#progress #cloud-progress .progress-bar');
    const cloudProgressPercentageSection = document.querySelector('#progress #cloud-progress .progress-percentage');

    if (cloudProgressBarSection && cloudProgressPercentageSection) {
        cloudProgressBarSection.style.width = `${progressPercentage}%`;
        cloudProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateSecurityProgress() {
    const totalCheckboxes = 32; // Total de checkboxes para security
    const progressPercentage = (securityCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const securityProgressBarHome = document.querySelector('.home-right #security-progress .progress-bar');
    const securityProgressPercentageHome = document.querySelector('.home-right #security-progress .progress-percentage');

    if (securityProgressBarHome && securityProgressPercentageHome) {
        securityProgressBarHome.style.width = `${progressPercentage}%`;
        securityProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const securityProgressBarSection = document.querySelector('#progress #security-progress .progress-bar');
    const securityProgressPercentageSection = document.querySelector('#progress #security-progress .progress-percentage');

    if (securityProgressBarSection && securityProgressPercentageSection) {
        securityProgressBarSection.style.width = `${progressPercentage}%`;
        securityProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateVirtualizationProgress() {
    const totalCheckboxes = 16; // Total de checkboxes para virtualization
    const progressPercentage = (virtualizationCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const virtualizationProgressBarHome = document.querySelector('.home-right #virtualization-progress .progress-bar');
    const virtualizationProgressPercentageHome = document.querySelector('.home-right #virtualization-progress .progress-percentage');

    if (virtualizationProgressBarHome && virtualizationProgressPercentageHome) {
        virtualizationProgressBarHome.style.width = `${progressPercentage}%`;
        virtualizationProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const virtualizationProgressBarSection = document.querySelector('#progress #virtualization-progress .progress-bar');
    const virtualizationProgressPercentageSection = document.querySelector('#progress #virtualization-progress .progress-percentage');

    if (virtualizationProgressBarSection && virtualizationProgressPercentageSection) {
        virtualizationProgressBarSection.style.width = `${progressPercentage}%`;
        virtualizationProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateComputerProgress() {
    const totalCheckboxes = 40; // Total de checkboxes para Computer network
    const progressPercentage = (computerCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const computerProgressBarHome = document.querySelector('.home-right #computer-networks-progress .progress-bar');
    const computerProgressPercentageHome = document.querySelector('.home-right #computer-networks-progress .progress-percentage');

    if (computerProgressBarHome && computerProgressPercentageHome) {
        computerProgressBarHome.style.width = `${progressPercentage}%`;
        computerProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const computerProgressBarSection = document.querySelector('#progress #computer-networks-progress .progress-bar');
    const computerProgressPercentageSection = document.querySelector('#progress #computer-networks-progress .progress-percentage');

    if (computerProgressBarSection && computerProgressPercentageSection) {
        computerProgressBarSection.style.width = `${progressPercentage}%`;
        computerProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateSOProgress() {
    const totalCheckboxes = 28; // Total de checkboxes para SO
    const progressPercentage = (SOCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const soProgressBarHome = document.querySelector('.home-right #operating-systems-progress .progress-bar');
    const soProgressPercentageHome = document.querySelector('.home-right #operating-systems-progress .progress-percentage');

    if (soProgressBarHome && soProgressPercentageHome) {
        soProgressBarHome.style.width = `${progressPercentage}%`;
        soProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const soProgressBarSection = document.querySelector('#progress #operating-systems-progress .progress-bar');
    const soProgressPercentageSection = document.querySelector('#progress #operating-systems-progress .progress-percentage');

    if (soProgressBarSection && soProgressPercentageSection) {
        soProgressBarSection.style.width = `${progressPercentage}%`;
        soProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}

function updateITProgress() {
    const totalCheckboxes = 16; // Total de checkboxes para IT skills
    const progressPercentage = (ITCheckedCount / totalCheckboxes) * 100;

    // Atualiza na Home
    const itProgressBarHome = document.querySelector('.home-right #fundamental-it-skills-progress .progress-bar');
    const itProgressPercentageHome = document.querySelector('.home-right #fundamental-it-skills-progress .progress-percentage');

    if (itProgressBarHome && itProgressPercentageHome) {
        itProgressBarHome.style.width = `${progressPercentage}%`;
        itProgressPercentageHome.innerText = `${progressPercentage.toFixed(2)}%`;
    }

    // Atualiza na seção Progresso
    const itProgressBarSection = document.querySelector('#progress #fundamental-it-skills-progress .progress-bar');
    const itProgressPercentageSection = document.querySelector('#progress #fundamental-it-skills-progress .progress-percentage');

    if (itProgressBarSection && itProgressPercentageSection) {
        itProgressBarSection.style.width = `${progressPercentage}%`;
        itProgressPercentageSection.innerText = `${progressPercentage.toFixed(2)}%`;
    }
}



// Atualiza o progresso ao carregar a página--------------------------------------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    othersCheckedCount = parseInt(localStorage.getItem('othersCheckedCount')) || 0;
    updateOthersProgress();

    webCheckedCount = parseInt(localStorage.getItem('webCheckedCount')) || 0;
    updateWebProgress();

    toolsCheckedCount = parseInt(localStorage.getItem('toolsCheckedCount')) || 0;
    updateToolsProgress();

    programmingCheckedCount = parseInt(localStorage.getItem('programmingCheckedCount')) || 0;
    updateProgrammingProgress();

    cloudCheckedCount = parseInt(localStorage.getItem('cloudCheckedCount')) || 0;
    updateCloudProgress();

    securityCheckedCount = parseInt(localStorage.getItem('securityCheckedCount')) || 0;
    updateSecurityProgress();

    virtualizationCheckedCount = parseInt(localStorage.getItem('virtualizationCheckedCount')) || 0;
    updateVirtualizationProgress();

    computerCheckedCount = parseInt(localStorage.getItem('computerCheckedCount')) || 0;
    updateComputerProgress();

    SOCheckedCount = parseInt(localStorage.getItem('SOCheckedCount')) || 0;
    updateSOProgress();

    ITCheckedCount = parseInt(localStorage.getItem('ITCheckedCount')) || 0;
    updateITProgress();


});

const topicItems = document.querySelectorAll('.topic-item');

//---------------------------------SeÇÃO SOBRE--------------------------------------------------------------//
let currentTopicIndex = 0;
const topics = document.querySelectorAll('.topic-item');
const prevButton = document.getElementById('prev-topic');
const nextButton = document.getElementById('next-topic');

function updateButtons() {
    if (currentTopicIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentTopicIndex === topics.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

function showTopic(index) {
    topics.forEach((topic, i) => {
        topic.style.display = i === index ? 'block' : 'none';
    });
    currentTopicIndex = index;
    updateButtons();
}

prevButton.addEventListener('click', () => {
    if (currentTopicIndex > 0) {
        showTopic(currentTopicIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentTopicIndex < topics.length - 1) {
        showTopic(currentTopicIndex + 1);
    }
});

showTopic(currentTopicIndex);