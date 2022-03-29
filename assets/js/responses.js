function getBotResponse(input) {
  let inputFormatted = input.toLowerCase();

  const duvida = "Dúvidas em relação a:";
  const opcao1 = "1 - Produto";
  const opcao2 = "2 - Garantia";
  const opcao3 = "3 - Formas de pagamento";
  const opcao4 = "4 - Entrega";

  // Simple responses
  if (inputFormatted == "bom dia") {
    return `Olá, bom dia! Escolha uma opção:<br>${duvida}<br>${opcao1}<br>${opcao2}<br>${opcao3}<br>${opcao4}`;
  } else if (inputFormatted == "boa tarde") {
    return `Olá, boa tarde! Escolha uma opção:<br>${duvida}<br>${opcao1}<br>${opcao2}<br>${opcao3}<br>${opcao4}`;
  } else if (inputFormatted == "boa noite") {
    return `Olá, boa noite! Escolha uma opção:<br>${duvida}<br>${opcao1}<br>${opcao2}<br>${opcao3}<br>${opcao4}`;
  } else if (inputFormatted == "obrigado") {
    return "Nós que agradecemos pelo contato 😉";
  } else if (inputFormatted == "1") {
    return "Escolhido dúvidas em relação ao produto.";
  } else if (inputFormatted == "2") {
    return "Escolhido dúvidas em relação a garantia do produto.";
  } else if (inputFormatted == "3") {
    return "Escolhido dúvidas em relação a formas de pagamento.";
  } else if (inputFormatted == "4") {
    return "Escolhido dúvidas em relação a entrega do produto.";
  } else if (inputFormatted == "❤️") {
    return "Obrigado pelo feedback positivo 😄";
  } else {
    return `Opção inválida, tente novamente 😊<br><br>Escolha uma opção:<br>${duvida}<br>${opcao1}<br>${opcao2}<br>${opcao3}<br>${opcao4}`;
  }
}
