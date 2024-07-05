function validarEmail() {
    var email = document.getElementById("email").value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
          // Se o e-mail estiver correto
          alert("E-mail válido. Formulário enviado com sucesso!");
          return true;
      } else {
          // Se o e-mail estiver incorreto
          alert("Por favor, insira um endereço de e-mail válido.");
          return false;
      }
  }
