function getBotResponse(input) {
  let inputFormatted = input.toLowerCase();

  // Simple responses
  if (inputFormatted == "bom dia") {
    return "Olá, bom dia! Escolha uma opção:";
  } else if (inputFormatted == "boa tarde") {
    return "Olá, boa tarde! Escolha uma opção:";
  } else if (inputFormatted == "boa noite") {
    return "Olá, boa noite! Escolha uma opção:";
  } else if (inputFormatted == "obrigado") {
    return "Nós que agradecemos pelo contato 😉";
  } else {
    return "Tente perguntar outra coisa!";
  }
}
