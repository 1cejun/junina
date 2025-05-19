function verificarPalavra() {
    const palavra = document.getElementById("palavra").value.trim();
    const palavraCorreta = "cadeia";

    if (palavra.toUpperCase() === palavraCorreta.toUpperCase()) {
        window.location.href = "correto.html";
    } else {
        window.location.href = "erro.html";
    }
}
