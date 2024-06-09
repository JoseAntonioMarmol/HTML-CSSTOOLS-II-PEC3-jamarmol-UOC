import $ from "jquery";

$(function () {
  $(".alert").hide();
  var form = $(".form");
  var success = $("#alert-success");
  var fail = $("#alert-error");

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        success.fadeIn();
        setTimeout(function () {
          success.fadeOut();
        }, 5000);
        form.trigger("reset");
      })
      .catch((error) => {
        fail.fadeIn();
        setTimeout(function () {
          fail.fadeOut();
          alert(error);
        }, 5000);
        form.trigger("reset");
      });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});
