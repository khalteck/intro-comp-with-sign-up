document.getElementById("submit-btn").addEventListener("click", () => {
    let firstInput = document.forms["form"]["firstname"].value;
    if (firstInput.length == 0) {
        document.getElementById("first-err").classList.remove("hide");
        document.getElementById("first-err-sign").classList.remove("hide");
    } else {
        document.getElementById("first-err").classList.add("hide");
        document.getElementById("first-err-sign").classList.add("hide");
    }
    let lastInput = document.forms["form"]["lastname"].value;
    if (lastInput.length == 0) {
        document.getElementById("last-err").classList.remove("hide");
        document.getElementById("last-err-sign").classList.remove("hide");
    } else {
        document.getElementById("last-err").classList.add("hide");
        document.getElementById("last-err-sign").classList.add("hide");
    }
    let emailInput = document.forms["form"]["email"].value;
    let email = document.forms["form"]["email"];
    if (emailInput.length < 4) {
        document.getElementById("email-err").classList.remove("hide");
        document.getElementById("email-err-sign").classList.remove("hide");
        email.placeholder = "example@email/com";
        email.classList.add("red");
    } else {
        document.getElementById("email-err").classList.add("hide");
        document.getElementById("email-err-sign").classList.add("hide");
        email.classList.remove("red");
    }
    let passInput = document.forms["form"]["password"].value;
    if (passInput.length == 0) {
        document.getElementById("pass-err").classList.remove("hide");
        document.getElementById("pass-err-sign").classList.remove("hide");
    } else {
        document.getElementById("pass-err").classList.add("hide");
        document.getElementById("pass-err-sign").classList.add("hide");
    }
})