function search() {
  var username = document.getElementById("inputUserName").value;
  var url = `https://api.github.com/users/${username}`;

  $.getJSON(url, (user) => {
    
    document.getElementById("name").innerHTML     = user.name;
    document.getElementById("html_url").innerHTML = user.html_url;
    document.getElementById("location").innerHTML = user.location;
    document.getElementById("avatar_url").innerHTML =
    `<img src=${user.avatar_url} height="220" width="220" class="shadow rounded"></img>`;

  })
}