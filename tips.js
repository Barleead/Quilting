const button = document.getElementById("tipsButton");
const items = ["Tip 1", "Tip 2", "Tip 3", "Tip 4"]; // Define your items array here

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    alert(items[randomIndex]);
});