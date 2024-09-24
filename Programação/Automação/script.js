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
function updateProgrammingCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('programmingCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('programmingCheckedCount', count + 1);
    } else {
        localStorage.setItem('programmingCheckedCount', count - 1);
    }
    updateProgrammingProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const programmingCount = parseInt(localStorage.getItem('programmingCheckedCount')) || 0;
    const programmingCheckboxes = document.querySelectorAll('#programming-skills-menu input[type="checkbox"]');

    programmingCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < programmingCount; // Marca os checkboxes com base na contagem
    });

    updateProgrammingProgress();
});
 
