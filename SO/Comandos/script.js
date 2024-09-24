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
function updateSOCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('SOCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('SOCheckedCount', count + 1);
    } else {
        localStorage.setItem('SOCheckedCount', count - 1);
    }
    updateSOProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const SOCount = parseInt(localStorage.getItem('SOCheckedCount')) || 0;
    const SOCheckboxes = document.querySelectorAll('#operating-systems-menu input[type="checkbox"]');

    SOCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < SOCount; // Marca os checkboxes com base na contagem
    });

    updateSOProgress();
});