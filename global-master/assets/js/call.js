
let mailSent = false;
$(document).ready(findElements());

function findElements() {
  try {
    document.getElementById("submitForm").addEventListener("submit", () => sendInfo(event), { passive: false });
    
  }
  catch (e) {
    console.log(e);
  }
}


let settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://young-castle-17596.herokuapp.com/`,
  "method": "GET"
}
$.ajax(settings).done(function (response) {
  // console.log(response);
});

function sendInfo(event) {
  event.preventDefault()
  document.getElementById("submitBtn").value = "Sending...";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://young-castle-17596.herokuapp.com/`,
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    "data": {
      name: name,
      email: email,
      
    }
  }
  if (!mailSent) {
    $.ajax(settings).done(function (response) {
      console.log(response);
      document.getElementById("submitBtn").value = "Sent";
      mailSent = true;
    });
  }

}
