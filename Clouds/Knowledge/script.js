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
function updateCloudCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('cloudCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('cloudCheckedCount', count + 1);
    } else {
        localStorage.setItem('cloudCheckedCount', count - 1);
    }
    updateCloudProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const cloudCount = parseInt(localStorage.getItem('cloudCheckedCount')) || 0;
    const cloudCheckboxes = document.querySelectorAll('#cloud-skills-menu input[type="checkbox"]');

    cloudCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < cloudCount; // Marca os checkboxes com base na contagem
    });

    updateCloudProgress();
});
 