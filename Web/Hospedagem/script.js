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
function updateWebCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('webCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('webCheckedCount', count + 1);
    } else {
        localStorage.setItem('webCheckedCount', count - 1);
    }
    updateWebProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const webCount = parseInt(localStorage.getItem('webCheckedCount')) || 0;
    const webCheckboxes = document.querySelectorAll('#web-menu input[type="checkbox"]');

    webCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < webCount; // Marca os checkboxes com base na contagem
    });

    updateWebProgress();
});
 