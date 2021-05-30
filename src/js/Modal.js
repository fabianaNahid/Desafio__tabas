function escondeDiv() {
    document.getElementById("hide").style.display = "flex";
}
function validar() {  

    var email = document.getElementById("email");
    var senha = document.getElementById("password")
    var result = document.getElementById('result')

    if (email.value == "") {
        alert("Nome não informado");
        // Deixa o input com o focus
        email.focus();
        // retorna a função e não olha as outras linhas
        return;
    }

    if (senha.value == "") {
        alert("Senha não informada");
        senha.focus();
        return;
    }

    alert("Formulário enviado!");
    result.innerHTML = email.value && senha.value;
} 
