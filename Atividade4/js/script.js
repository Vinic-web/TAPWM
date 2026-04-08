function sortearComputador() {
    var numero = Math.floor(Math.random() * 100);

    if (numero <= 32) return "pedra";
    else if (numero <= 65) return "papel";
    else return "tesoura";
}

function verificarVencedor(jogador, computador) {
    if (jogador === computador) return "empate";

    if (
        (jogador === "pedra"   && computador === "tesoura") ||
        (jogador === "papel"   && computador === "pedra")   ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        return "jogador";
    }

    return "computador";
}

function iniciarJogo() {
    var pontuacaoJogador    = 0;
    var pontuacaoComputador = 0;
    var rodada              = 1;

    alert("Melhor de 5 rodadas.\nDigite pedra, papel ou tesoura a cada rodada.");

    while (pontuacaoJogador < 3 && pontuacaoComputador < 3) {

        var entrada = prompt(
            "Rodada " + rodada + " | Voce: " + pontuacaoJogador + " x " + pontuacaoComputador + " :PC\n\n" +
            "Sua jogada: pedra, papel ou tesoura"
        );

        if (entrada === null) {
            alert("Jogo cancelado.");
            return;
        }

        var jogador = entrada.trim().toLowerCase();

        if (jogador !== "pedra" && jogador !== "papel" && jogador !== "tesoura") {
            alert("Jogada invalida. Tente novamente.");
            continue;
        }

        var computador = sortearComputador();
        var resultado  = verificarVencedor(jogador, computador);

        var msg = "Voce: " + jogador + "  |  Computador: " + computador + "\n";

        if (resultado === "jogador") {
            pontuacaoJogador++;
            msg += "Voce venceu a rodada!";
        } else if (resultado === "computador") {
            pontuacaoComputador++;
            msg += "Computador venceu a rodada!";
        } else {
            msg += "Empate!";
        }

        alert(msg);
        rodada++;
    }

    if (pontuacaoJogador > pontuacaoComputador) {
        alert("Placar final: Voce " + pontuacaoJogador + " x " + pontuacaoComputador + " Computador\nVoce venceu!");
    } else {
        alert("Placar final: Voce " + pontuacaoJogador + " x " + pontuacaoComputador + " Computador\nComputador venceu!");
    }
}