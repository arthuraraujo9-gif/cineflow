// PASSO 1: O JavaScript vai até o HTML e "pega" os elementos que precisamos usar
const botaoMenu = document.querySelector("#btn-menu"); // Acha o botão pelo ID
const menu = document.querySelector(".nav");           // Acha a lista de links pela classe

// PASSO 2: Ele fica "ouvindo" e esperando o usuário clicar no botão
botaoMenu.addEventListener("click", function () {
    
    // PASSO 3: O interruptor (Liga/Desliga)
    menu.classList.toggle("ativo");
});
