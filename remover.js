var tabela12 = document.querySelector('table')

tabela12.addEventListener('dblclick', function(event) {
    event.target.parentNode.classList.add('animacao');

    setTimeout(function() {
        event.target.parentNode.remove();
        } , 1000)

});

