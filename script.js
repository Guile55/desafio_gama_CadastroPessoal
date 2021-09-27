function validacao() {
    var formulario = document.forms["cadastroPessoal"]
    var nome = formulario.nomeCompleto.value
    var cpf = formulario.cpf.value
    var endereco = formulario.endereco.value
    var numero = formulario.numero.value
    var telefoneCelular = formulario.telefoneCelular.value

    var erro = false
    if (nome == "") {
        alert("Campo Nome Completo é de preenchimento obrigatório")
        erro =true 
        
    }
    
    if (cpf == "") {
        alert("Campo CPF é de preenchimento obrigatório")
        erro =true
    }

    if (endereco == "") {
        alert("Campo Endereço é de preenchimento obrigatório")
        erro =true
    }

    if (numero == "") {
        alert("Campo Numero é de preenchimento obrigatório")
        erro =true
    }

    if (telefoneCelular == "") {
        alert("Campo Telefone Celular é de preenchimento obrigatório")
        erro =true
    }

    if (erro){
        return false
    }else{
        alert ("Cadastro efetuado com sucesso")
        return true
    }

}






   

    

