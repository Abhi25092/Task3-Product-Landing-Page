// Modal controls
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
    modal.classList.add("active");
});
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if(e.target === modal) {
        modal.classList.remove("active");
    }
});