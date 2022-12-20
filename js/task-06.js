const input = document.querySelector(`#validation-input`);

input.addEventListener("blur", changeBorderColor);

function changeBorderColor() {
  input.className =
    input.dataset.length == input.value.length ? "valid" : "invalid";
}
