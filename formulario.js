
var botao = document.querySelector("#botao");

botao.addEventListener("click", function(event) {
    event.preventDefault();
    var formu = document.querySelector('#formulario');

    var nome = formulario.nome.value;
    var n1= formulario.nota1.value;
    var n2= formulario.nota2.value;
    var n3= formulario.nota3.value;


    var alunoTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var nota1Td = document.createElement("td");
    var nota2Td = document.createElement("td");
    var nota3Td = document.createElement("td");
    var mediaTd = document.createElement("td");
    var situacaoTd = document.createElement("td")
    var media1 = calcularmedia(n1, n2, n3);

    nomeTd.textContent = nome;
    nota1Td.textContent = n1;
    nota2Td.textContent = n2;
    nota3Td.textContent = n3;
    mediaTd.textContent = media1
    situacaoTd.textContent = final(media1);
    console.log(situacaoTd)


    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(nota1Td);
    alunoTr.appendChild(nota2Td);
    alunoTr.appendChild(nota3Td);
    alunoTr.appendChild(mediaTd);
    alunoTr.appendChild(situacaoTd);

    console.log(mediaTd);

    var tabelaAluno = document.querySelector('#tabela-aluno');
    tabelaAluno.appendChild(alunoTr);
    
    var valnota1 = validarnota1(n1);
    var valnota2 = validarnota2(n2);
    var valnota3 = validarnota3(n3);

    if (!valnota1) {
        nota1Td.textContent = 'nota inválida';
        mediaTd.textContent = "";
        situacaoTd.textContent = "";
    }
    if (!valnota2) {
        nota2Td.textContent = 'nota inválida';
        mediaTd.textContent = "";
        situacaoTd.textContent = "";
    }
    if (!valnota3) {
        nota3Td.textContent = 'nota inválida';
        mediaTd.textContent = "";
        situacaoTd.textContent = "";
    }

  
});

function final (media) {
    console.log(media)
    
    if (media >= 7) {
        return "Aprovado";

    } if (media < 4 ) {
        return "Reprovado";

    } if (media > 4 && 7) {
        return "Prova final";
    }

};

function validarnota1(nota1) {
    if (nota1 > 0 && nota1 < 10) {
        return true;
    } else {
        return false;
    }
}

function validarnota2(nota2) {
    if (nota2 > 0 && nota2 < 10) {
        return true;
    } else {
        return false;
    }
}

function validarnota3(nota3) {
    if (nota3 > 0 && nota3 < 10) {
        return true;
    } else {
        return false;
    }
}
