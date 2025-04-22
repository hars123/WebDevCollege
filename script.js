// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop form from refreshing the page
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
      const bloodGroup = document.getElementById("bloodgroup").value;
      const image = document.getElementById("image").files[0];
  
     
      alert(message);
    });
  });
   