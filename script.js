function enviar() {

    var nome = document.getElementById('nom') // Variável para o Nome
    var name = nome.value
    var fn = document.querySelector('#npt')
    fn.innerHTML = `Nome de Usuário: ${name}`

    var idade = document.getElementById('ida') // Variável para a Idade
    var age = idade.value
    var fa = document.querySelector('#ipt')
    fa.innerHTML = `Sua idade: ${age}`

    var tempo = document.getElementById('tim') // Variável para a Hora
    var time = tempo.value
    var ft = document.querySelector('#tpt')
    ft.innerHTML = `Agora são: ${time}`

    var pais = document.getElementById('sel') // Variável para o País
    var country = pais.value
    var fpo = document.querySelector('#popt')
    fpo.innerHTML = `Seu país de origem: ${country}`

    if (country == 'Selecione...') { // Se o País não for selecionado...

        alert('ERRO - Selecione um país!') // Vai executar este alerte
        fpo.innerHTML = 'Informe seu país!'

    }

}