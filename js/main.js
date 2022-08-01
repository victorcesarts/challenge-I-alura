var text = document.querySelector("textarea")  
var criptButton = document.querySelector(".criptografar")
var decriptButton = document.querySelector(".descriptografar")
var copyButton = document.querySelector(".remover")
var title = document.getElementById("titulo-resultado")
var description = document.getElementById("info-resultado")
var imageResult = document.getElementById("img-resultado") 

text.addEventListener("input", function(){ 
    var textValue = text.value;
    if(textValue.length == 0){
        addContent();
    }else{
        criptButton.addEventListener("click", function(){
            var textValue = text.value;
            if(textValue.length > 0){ 
                removeContent();        
                validateInput(textValue);

                if(validateInput(textValue)){ //case true, the text inserted has no special characters
                    var resultCript = textValue.replace(/e/g, "enter").replace(/i/g, "imes").
                    replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");  //replacing specific letters (a,e,i,o,u) for another strings
                    title.textContent = resultCript 
                    addCopyButton()
                }else{
                    title.textContent = "Não utilize acentos ou letras maiúsculas." 
                    removeCopyButton()
                } 
            } 
        })

        decriptButton.addEventListener("click", function(){
            var textValue = text.value;
            if(textValue.length > 0){        
                validateInput(textValue);
                if(validateInput(textValue)){ //case true, the text inserted has no special characters
                    var resultCript = textValue.replace(/enter/g, "e").replace(/imes/g, "i").
                    replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");  //replacing specific letters (a,e,i,o,u) for another strings
                    title.textContent = resultCript 
                    removeContent() 
                    addCopyButton()
                    
                }else{
                    title.textContent = "Não utilize acentos ou letras maiúsculas." 
                    removeCopyButton()
                } 
            } 
        })
    }   
})

copyButton.addEventListener("click", function(){
    var textToCopy = title.textContent;
    copyFunction(textToCopy);
})
        
 function removeContent() {
    imageResult.removeAttribute('id');
    imageResult.classList.add('remover')
    description.removeAttribute('id');
    description.classList.add('remover')
    title.removeAttribute('id');
    title.setAttribute('id','resultado-texto');  
 }

 function validateInput(str) {
    return str.normalize('NFD').replace(/[A-Z\u0300-\u036f]/g, "") == str
 }

 function addCopyButton() {
    copyButton.classList.remove("remover")
    copyButton.classList.add("botao-copiar")
 }
function removeCopyButton() {
    copyButton.classList.remove("botao-copiar")
    copyButton.classList.add("remover")
}

 function addContent(){
    removeCopyButton()

    imageResult.classList.remove('remover');
    imageResult.setAttribute('id','img-resultado')

    description.classList.remove('remover');
    description.setAttribute('id', 'info-resultado') 

    title.removeAttribute('id') 
    title.setAttribute('id', 'titulo-resultado');
    title.textContent = "Nenhuma mensagem encontrada" 
 }

 function copyFunction(textToCopy){
    navigator.clipboard.writeText(textToCopy); 
 }