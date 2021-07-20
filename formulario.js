var t1 = document.querySelector("#tabela");
console.log(t1);

var b1 = document.querySelector("#botao");
b1.addEventListener("click", function(event) {
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


    nomeTd.textContent = nome;
    nota1Td.textContent = n1;
    nota2Td.textContent = n2;
    nota3Td.textContent = n3;
    mediaTd.textContent = calcularmedia(n1, n2, n3);


    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(nota1Td);
    alunoTr.appendChild(nota2Td);
    alunoTr.appendChild(nota3Td);
    alunoTr.appendChild(mediaTd);

    console.log(mediaTd)

    var tabela = document.querySelector('#tabela2');
    tabela.appendChild(alunoTr);

});