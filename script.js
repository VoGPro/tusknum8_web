function openForm() {
  document.getElementById("myForm").style.display = "block";
  history.pushState("myForm", null, "form");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  window.history.back();
}

function sendForm() {
  localStorage.clear();
}

updateState = function(state) {
  if (!state) document.getElementById("myForm").style.display = "none";
  else document.getElementById("myForm").style.display = "block";
}

window.addEventListener('popstate', function(e) {
  updateState(e.state);
})

window.addEventListener('DOMContentLoaded', function(event) {
  const inpName = document.getElementById("inpName");

  inpName.addEventListener('change', function() {
    const name = inpName.value;
    localStorage.setItem("Name", name);
    console.log(name);
  });

  const inpEmail = document.getElementById("inpEmail");

  inpEmail.addEventListener('change', function() {
    const email = inpEmail.value;
    localStorage.setItem("Email", email);
    console.log(email);
  });

  const inpMessage = document.getElementById("inpMessage");

  inpMessage.addEventListener('change', function() {
    const message = inpMessage.value;
    localStorage.setItem("Message", message);
    console.log(message);
  });

  if (localStorage.length > 0) {
    inpName.value = localStorage.getItem("Name");

    inpEmail.value = localStorage.getItem("Email");

    inpMessage.value = localStorage.getItem("Message");
  }
})
