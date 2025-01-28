document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/v1/serverName")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var serverName = data.serverName;
      var serverNameElement = document.getElementById("serverName");
      serverNameElement.innerText = serverName;
    });
});
