const formDelete = document.querySelector("#form-delete")
console.log('form-delete', formDelete)

formDelete.addEventListener("submit", function(event) {
  console.log("i was clicked")
  const confirmation = confirm("Tem certeza de que deseja deletar?")

  if(!confirmation) {
    event.preventDefault()
  }
})

console.log("i was called")
