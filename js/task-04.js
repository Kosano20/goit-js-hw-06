const removeBtn = document.querySelector('[data-action="decrement"]');
const addBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;
    removeBtn.addEventListener("click", () => {
        counterValue -= 1;
        value.textContent = counterValue;
    });
    addBtn.addEventListener("click", () => {
        counterValue += 1;
        value.textContent = counterValue;
    });