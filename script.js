
var usersHistory = [];

function search() {
  var username = document.getElementById("inputUserName").value;
  var url = `https://api.github.com/users/${username}`;

  $.getJSON(url, (user) => {
    showUser(user);
    clearError();
    
    if(isNew(user)) {
      save(user);
      showHistory(user);
    }
      
  }).fail( () => {
    showUser({});
    showError("Não encontrado!");
  });
}

function showError(msg) {
  document.getElementById("error").innerHTML =
  `<div class="alert alert-danger mt-1" role="alert">${msg}/div>`;
}

function clearError() {
  document.getElementById("error").innerHTML = "";
}

function showUser(user) {
 
  document.getElementById("name").innerHTML     = user.name       || "";
  document.getElementById("html_url").innerHTML = user.html_url   || "";
  document.getElementById("location").innerHTML = user.location   || "";
    
  document.getElementById("avatar_url").innerHTML = user.avatar_url ? 
    `<img src=${user.avatar_url} height="220" width="220" class="shadow rounded"></img>` : "";
  
}

function save(user) {
  usersHistory.push(user);
}

function isNew(user) {
  return usersHistory.filter( (u) => u.login === user.login).length == 0;
}

function showHistory(user) {

  document.getElementById("history").innerHTML += 
    `<div class="col">
      <img id="avatar_url" src=${user.avatar_url} height="110" width="110" class="shadow rounded">
    </div>`

}
