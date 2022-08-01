var text = document.querySelector("textarea") 
var criptButton = document.querySelector(".criptografar")
var title = document.getElementById("titulo-resultado")
var description = document.getElementById("info-resultado")
var imageResult = document.getElementById("img-resultado") 

text.addEventListener("change", function(){
    var textValue = this.value; 
    var resultCript = textValue.replace(/e/g, "enter").replace(/i/g, "imes").
    replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");  //replacing specific letters (a,e,i,o,u) for another strings

    criptButton.addEventListener("click", function(){
        
        console.log(resultCript)

        
        imageResult.remove();
        description.remove();
        

        
        title.removeAttribute('id');
        title.classList.add('resultado-texto');
        /*
        title.remove();
         */
        title.textContent = resultCript 
      
    })
    
})

 
