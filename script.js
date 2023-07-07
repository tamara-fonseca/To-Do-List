const localStorageKey = "todolistname";

function validação(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputvalue = document.getElementById("inputtask").value
    let existe = values.find(x => x.name == inputvalue)
    return !existe ? false : true

}

function newtask() {
  let input = document.getElementById("inputtask");
  if (!input.value) {
    alert("Adicione uma tarefa");
  } 
  
  else if(validação())
  {
    alert('Já existe uma tarefa com esse nome!')

  }
  
  else {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    mostrarvalores();
  }
  input.value=""
}

function mostrarvalores() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.getElementById("todolist");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button id='btok' onclick='removeiten("${values[i]["name"]}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
  </svg></button></li>`;
  }
}

function removeiten(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.findIndex((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  mostrarvalores();
}
mostrarvalores();
