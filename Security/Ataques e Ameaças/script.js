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
function updateSecurityCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('securityCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('securityCheckedCount', count + 1);
    } else {
        localStorage.setItem('securityCheckedCount', count - 1);
    }
    updateSecurityProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const securityCount = parseInt(localStorage.getItem('securityCheckedCount')) || 0;
    const securityCheckboxes = document.querySelectorAll('#security-knowledge-menu input[type="checkbox"]');

    securityCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < securityCount; // Marca os checkboxes com base na contagem
    });

    updateSecurityProgress();
});
 
