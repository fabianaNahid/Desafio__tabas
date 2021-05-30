function enviar(){
 
    var nome = document.getElementById("txtnome").value;
    var telefone = document.getElementById("txttelefone").value;
    var email = document.getElementById("txtemail").value;
     
    var texto = "Nome: " +nome + "; Telefone: "+ telefone + "; Email: "+email; // como quiser formatar
     
    return true;
     
}