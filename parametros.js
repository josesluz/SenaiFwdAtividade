function Login(){
	var status=0;
	var username = document.getElementById("login").value;
	var password = document.getElementById("senha").value;
	if (username=="usuario" && password=="usuario") {
    status=1;
		window.location="arearestrita.html";
	}
	if (status==0) {
		alert("Senha ou Usuário inválido.");
	}
}


function validarFormulario() {
var nome = document.getElementById("nome").value;
var telefone = document.getElementById("telefone").value;
var email = document.getElementById("email").value;
var mensagem = document.getElementById("mensagem").value;

if (nome == "") {
  alert('Preencha o campo com seu nome');
  document.getElementById("nome").focus();
  } else if (telefone == "") {
  alert('Preencha o campo com seu telefone');
  document.getElementById("telefone").focus();
} else if (email == "") {
  alert('Preencha o campo com seu email');
  document.getElementById("email").focus();
} else if (mensagem == "") {
  alert('Preencha o campo com a sua mensagem');
  document.getElementById("mensagem").focus();
  }
}
