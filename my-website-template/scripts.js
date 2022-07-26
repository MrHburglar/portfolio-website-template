const overlay = document.querySelector("#overlay");

document.querySelector(".show-modal-button").addEventListener("click", () => {
    overlay.style.display = "block";
});

document.querySelector(".close-modal-button").addEventListener("click", () => {
    overlay.style.display = "none";
});