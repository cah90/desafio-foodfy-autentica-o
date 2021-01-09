const formDelete = document.querySelector("#form-delete")

formDelete.addEventListener("submit", function(event) {
  const confirmation = confirm("Tem certeza de que deseja deletar?")

  if(!confirmation) {
    event.preventDefault()
  }
})

