

function Pesquisar(string) {
    tabela = document.getElementsByTagName("table")[0];
    linhas = tabela.getElementsByTagName("tr");
    for (let r = 1; r < linhas.length; r++) {
        dados = linhas[r].getElementsByTagName("td");
        let encontrei = false;
        for (let d = 0; d < dados.length; d++) {
            if (dados[d].innerText.indexOf(string) >= 0) {
                encontrei = true;
                break;
            }
        }
        if (encontrei) {
            linhas[r].style.display = "";
        } else {
            linhas[r].style.display = "none";
        }
    }

}