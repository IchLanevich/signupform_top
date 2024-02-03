const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const passwordInputHelperText = document.getElementById(
  "passwordInputHelperText"
);

confirmPasswordInput.addEventListener("change", () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInputHelperText.style.visibility = "visible";
  }
});
