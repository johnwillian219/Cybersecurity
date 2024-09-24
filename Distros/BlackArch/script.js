//----------------------------Função para o funcionamento do progresso---------------------------------//
function updateCheckbox(checkbox) {
    const index = checkbox.getAttribute('data-index');
    localStorage.setItem(`checkbox_${index}`, checkbox.checked);
}

// Carrega o estado dos checkboxes ao carregar a página secundária
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        const index = checkbox.getAttribute('data-index');
        const isChecked = localStorage.getItem(`checkbox_${index}`) === 'true';
        checkbox.checked = isChecked;
    });
});


//individual
function updateToolsCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('toolsCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('toolsCheckedCount', count + 1);
    } else {
        localStorage.setItem('toolsCheckedCount', count - 1);
    }
    updateToolsProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const toolsCount = parseInt(localStorage.getItem('toolsCheckedCount')) || 0;
    const toolsCheckboxes = document.querySelectorAll('#distros-tools-menu input[type="checkbox"]');

    toolsCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < toolsCount; // Marca os checkboxes com base na contagem
    });

    updateToolsProgress();
});
 