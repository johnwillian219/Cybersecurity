//----------------------------Função para o funcionamento do progresso---------------------------------//
function updateCheckbox(checkbox) {
    const index = [...checkbox.parentElement.parentElement.children].indexOf(checkbox.parentElement);
    localStorage.setItem(`checkbox_${index}`, checkbox.checked);
}
