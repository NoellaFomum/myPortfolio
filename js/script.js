document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});

document
  .getElementById("sendEmailButton")
  .addEventListener("click", function () {
    const firstname = document.getElementById("idFName").value;
    const lastname = document.getElementById("idLName").value;
    const phonenumber = document.getElementById("idNumber").value;
    const email = document.getElementById("idEmail").value;
    const message = document.getElementById("idMessage").value;

    if (!firstname || !lastname || !email || !phonenumber || !message) {
      alert("Please review the fields in the form.");
      return;
    }

    Email.send({
      SecureToken: "0415dc5d-5a5a-4ba4-91de-4629f3ae09ac",
      To: "fomumnoella@gmail.com",
      From: "fomumnoella@gmail.com",
      Subject: `New contact from ${firstname}`,
      Body: `Name: ${firstname} ${lastname} <br> Email: ${email} <br> Message: ${message}`,
    })
      .then((message) => alert("Email sent successfully!"))
      .catch((error) => alert("Failed to send email: " + error));
  });
