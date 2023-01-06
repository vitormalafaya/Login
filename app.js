function usuario() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "email@teste.com" && senha == "Emailteste-") {
        setTimeout(function() {
            window.location.href = "https://github.com/vitormalafaya";
        }, 3000);
        alert('BEM VINDO')
    } else {
        alert('ERRO: Verifique se o Email e senha estao corretos')
    }
}
