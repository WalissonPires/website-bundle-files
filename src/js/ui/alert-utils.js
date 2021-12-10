console.log('alert-utils');

function alertWarning(message) {
    alert(message, 'warning');
}

function estaFuncaoSeraRemovidaPeloWebPack() {

    console.log('Esta função será removida pelo WebPack');
}

// Necessário para o Webpack não remover a função do bundle por pensar que não está em uso
window.alertWarning = alertWarning;