console.log('form-utils');

function clearForm(form) {
  form.reset();
  form.querySelectorAll('input[type=text], input[type=password], textarea').forEach(function(input) {
    input.value = '';
  });
}

// Necessário para o Webpack não remover a função do bundle por pensar que não está em uso
window.clearForm = clearForm;