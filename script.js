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
    document.querySelector('.progress-text').innerText = `${progressPercentage.toFixed(2)}%`;

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
    document.querySelector('#others-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#others-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateWebProgress() {
    const totalCheckboxes = 28; // Total de checkboxes para web
    const progressPercentage = (webCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#web-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#web-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateToolsProgress() {
    const totalCheckboxes = 40; // Total de checkboxes para distros e tools
    const progressPercentage = (toolsCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#tools-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#tools-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateProgrammingProgress() {
    const totalCheckboxes = 28; // Total de checkboxes para programming
    const progressPercentage = (programmingCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#programming-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#programming-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateCloudProgress() {
    const totalCheckboxes = 20; // Total de checkboxes para cloud
    const progressPercentage = (cloudCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#cloud-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#cloud-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateSecurityProgress() {
    const totalCheckboxes = 32; // Total de checkboxes para security
    const progressPercentage = (securityCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#security-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#security-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateVirtualizationProgress() {
    const totalCheckboxes = 16; // Total de checkboxes para virtualization
    const progressPercentage = (virtualizationCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#virtualization-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#virtualization-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateComputerProgress() {
    const totalCheckboxes = 40; // Total de checkboxes para Compputer network
    const progressPercentage = (computerCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#computer-networks-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#computer-networks-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateSOProgress() {
    const totalCheckboxes = 28; // Total de checkboxes para SO
    const progressPercentage = (SOCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#operating-systems-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#operating-systems-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
}

function updateITProgress() {
    const totalCheckboxes = 16; // Total de checkboxes para IT skills
    const progressPercentage = (ITCheckedCount / totalCheckboxes) * 100;
    document.querySelector('#fundamental-it-skills-progress .progress-bar').style.width = `${progressPercentage}%`;
    document.querySelector('#fundamental-it-skills-progress .progress-percentage').innerText = `${progressPercentage.toFixed(2)}%`;
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