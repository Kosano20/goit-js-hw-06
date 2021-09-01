const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
const itemsArr = Array.from(items);
console.log(`Number of categories: ${itemsArr.length}`);

for (const item of itemsArr) {
    const titleEl = item.querySelector("h2");
    console.log(`Category: ${titleEl.textContent}`);

    const listEl = item.querySelectorAll("li");
    console.log(`Elements: ${listEl.length}`)
}