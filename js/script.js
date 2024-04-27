$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereçoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Por favor, insira seu nome completo.'
        },
        submitHandler: function(form) {
            alert('Fomulário enviado com Sucesso!')
            form.submit()
        }
    })
})