const input = document.querySelector("#validation-input");
const requiredLength = Number(input.dataset.length);
input.addEventListener("focus", () => { 
  });
  
input.addEventListener("blur", () => {
    if (input.value.length !== requiredLength) {
        input.classList.add("invalid");
    }  else {
        input.classList.remove("invalid")
        input.classList.add("valid");
    }
  });
