const form = document.getElementById("form")

function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
 }

form.addEventListener("submit", e => {
   e.preventDefault()
   const email = form.email.value
   const errorMessage = document.createElement("P")

   if(!validateEmail(email)){
      if(!form.parentElement.lastChild.classList.contains("presentation__error")){
         errorMessage.classList.add("presentation__error")
         errorMessage.textContent = "Please provide a valid email"
   
         form.parentElement.appendChild(errorMessage)
   
         
         form.email.classList.add("presentation__email--error")
         form.submit.classList.add("presentation__submit--error")


         setTimeout(() =>{
            form.email.classList.remove("presentation__email--error")
            form.submit.classList.remove("presentation__submit--error")
            errorMessage.remove()
         }, 3000)

         return
      }
   }

   form.reset()

})