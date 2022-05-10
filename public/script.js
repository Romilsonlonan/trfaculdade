const field = document.querySelectorAll("[required]")



function ValidateField(field) {
    // logica para verificar se existem erros 

    function verifyError() {
        let foundError = false;

        for(let error in field.validity) {

            if (field.validity[error] && field.validity.valid ) {
                foundError = error
            }
        }
    return foundError;
    }


    function customMessage(typeError) {
        const messages = {
            text:{
                valueMissing: "Por favor, preencha este campo!"
            },
            email:{
                valueMissing: "Email é obrigatório!",
                typeMismatch: "Por favor, preencha um email válido!"
            }

        } 
        return messages[field.type][typeError]
     }

    function setCustomMessage(message) {
        if(message){
        spanError = classList.add("active")
        spanError.innerHTML = "Campo Obrigatório"
        } else {
        spanError = classList.remove("active")
        spanError.innerHTML = "Cadastro com Sucesso!!!"            
        }        
    }

    return function() {

        const error = verifyError()

        if(Error) {
            const message = customMessage(error)
            field.style.borderColor = "red"
            setCustomMessage(message)
        } else { 
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}



function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()
}

for(field of field) {
    field.addEventListener("invalid", event => {
        //ELIMINAR O BUBBLE
    event.preventDefault() 
        customValidation(event)           
    })

    field.addEventListener("blur, customValidation")
}
