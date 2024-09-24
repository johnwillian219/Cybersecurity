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
function updateITCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('ITCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('ITCheckedCount', count + 1);
    } else {
        localStorage.setItem('ITCheckedCount', count - 1);
    }
    updateITProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const ITCount = parseInt(localStorage.getItem('ITCheckedCount')) || 0;
    const ITCheckboxes = document.querySelectorAll('#fundamental-it-skills-menu input[type="checkbox"]');

    ITCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < ITCount; // Marca os checkboxes com base na contagem
    });

    updateITProgress();
});