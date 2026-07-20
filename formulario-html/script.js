// Validação com JavaScript — só em alguns campos (nome, e-mail, senha, idade e termos)

var form = document.getElementById("formInscricao");
var mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (evento) {
  // Impede o envio da página para validar primeiro
  evento.preventDefault();

  mensagem.className = "";
  mensagem.textContent = "";

  // Lê os valores dos campos que vamos validar
  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var senha = document.getElementById("senha").value;
  var idade = document.getElementById("idade").value;
  var termos = document.getElementById("termos").checked;

  var erros = [];

  // Valida só alguns campos (os demais ficam com a validação nativa do HTML)
  if (nome.length < 3) {
    erros.push("O nome deve ter pelo menos 3 caracteres.");
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    erros.push("Informe um e-mail válido.");
  }

  if (senha.length < 6) {
    erros.push("A senha deve ter pelo menos 6 caracteres.");
  }

  if (idade === "" || Number(idade) < 16) {
    erros.push("A idade mínima é 16 anos.");
  }

  if (!termos) {
    erros.push("É preciso aceitar os termos de participação.");
  }

  if (erros.length > 0) {
    mensagem.className = "erro";
    mensagem.textContent = "Erro: " + erros.join(" ");
  } else {
    mensagem.className = "sucesso";
    mensagem.textContent = "Inscrição enviada com sucesso! Obrigado, " + nome + ".";
  }
});
