const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const deleteError = document.getElementById("delete");
const text = document.getElementById("textArea");
form.addEventListener("submit", (e) => {
  let messages = [];
  if (firstName.value === "" && lastName.value === "") {
    console.log("Prenume: " + firstName.value, "\nNume: " + lastName.value);
    messages.push("First and last name required!");

    document
      .getElementById("error")
      .setAttribute(
        "style",
        "background-color:red; color:whitesmoke; font-weight:bolder; border-radius:0.25rem; padding:5px; width:250px; text-align:center"
      );
    document
      .getElementById("firstName")
      .setAttribute("style", "border-color:red;");
    document
      .getElementById("lastName")
      .setAttribute("style", "border-color:red;");
  } else if (firstName.value === "" && lastName.value) {
    console.log("Prenume: " + firstName.value, "\nNume: " + lastName.value);
    messages.push("First name required!");

    document
      .getElementById("error")
      .setAttribute(
        "style",
        "background-color:red; color:whitesmoke; font-weight:bolder; border-radius:0.25rem; padding:5px; width:250px; text-align:center"
      );
    document
      .getElementById("lastName")
      .setAttribute("style", "border-color:#228B22;");
    document
      .getElementById("firstName")
      .setAttribute("style", "border-color:red;");
  } else if (firstName.value && lastName.value === "") {
    console.log("Prenume: " + firstName.value, "\nNume: " + lastName.value);
    messages.push("Last name required!");
    document
      .getElementById("error")
      .setAttribute(
        "style",
        "background-color:red; color:whitesmoke; font-weight:bolder; border-radius:0.25rem; padding:5px; width:250px; text-align:center"
      );
    document
      .getElementById("firstName")
      .setAttribute("style", "border-color:#228B22;");
    document
      .getElementById("lastName")
      .setAttribute("style", "border-color:red;");
  } else {
    console.log("Prenume: " + firstName.value, "\nNume: " + lastName.value);
    messages.push(` Thank you for contacting us,  ${firstName.value} !  `);

    document
      .getElementById("error")
      .setAttribute(
        "style",
        "background-color:#228B22; color:whitesmoke; font-weight:bolder; border-radius:0.25rem; padding:5px; width:350px; text-align:center"
      );
    document
      .getElementById("firstName")
      .setAttribute("style", "border-color:#228B22;");
    document
      .getElementById("lastName")
      .setAttribute("style", "border-color:#228B22;");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(" ");
  }
  console.log("Mesaj: " + text.value);
});
