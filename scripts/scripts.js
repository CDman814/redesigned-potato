const form = document.querySelector(".validation");

// Declaring function
const validity = () => {
  form.classList.add("validated");

  document.querySelector("#success").style.display = "none";
  document.querySelector("#warning").style.display = "none";

// If yes/no checked
// I had trouble getting the topping list to default to not showing
// I tried renaming one of the ids but it broke ;-;
// It keeps breaking... ;-;

  if (document.getElementsByName("toppings-checked")[0].checked)
    document.querySelector(".topping-list").style.display = "block";
  if (document.getElementsByName("toppings-checked")[1].checked)
    document.querySelector(".topping-list").style.display = "none";
};

$(function () {

// Toggles flow control
  form.addEventListener("change", validity);
  form.addEventListener("submit", (event) => 
  {
    event.preventDefault();
    event.stopPropagation();

// Will gets date, calendar thing
    const weddingDate = new Date($("#wedding-date").datepicker("date"));

// Warns user if not filled
    if (form.checkValidity()) {
      form.reset();
      form.classList.remove("validated");
      document.querySelector("#warning").style.display = "none";
      document.querySelector("#success").style.display = "block";
    } 
    else {
      document.querySelector("#warning").innerText = "Please fill all fields";
      document.querySelector("#warning").style.display = "block";
    }
  });

  $("#wedding-date").datepicker();

// Resets form if "clear" clicked
  $("#clear").click(() => {
    form.classList.remove("validated");
    document.querySelector(".topping-list").style.display = "none";
    form.reset();
  });

});
