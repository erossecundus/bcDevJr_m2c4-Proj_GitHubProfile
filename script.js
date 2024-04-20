
function search() {
  var username = document.getElementById("inputUserName").value;
  var url = `https://api.github.com/users/${username}`;

  $.getJSON(url, (user) => {
    showUser(user)
    clearError();
  }).fail( () => {
    showUser({});
    showError("Não encontrado!")
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



