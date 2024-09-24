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
function updateOthersCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('othersCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('othersCheckedCount', count + 1);
    } else {
        localStorage.setItem('othersCheckedCount', count - 1);
    }
    updateOthersProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const othersCount = parseInt(localStorage.getItem('othersCheckedCount')) || 0;
    const othersCheckboxes = document.querySelectorAll('#others-menu input[type="checkbox"]');

    othersCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < othersCount; // Marca os checkboxes com base na contagem
    });

    updateOthersProgress();
});
 